<?php
namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Configuracion\Modelos\Reservacion as Modelo;
// use App\Http\Controllers\Configuracion\Modelos\ReservacionHabitaciones as Habs;
// use App\Http\Controllers\Configuracion\Modelos\ReservacionAcompaniantes as Acompaniantes;
use App\Http\Controllers\Configuracion\Modelos\Persona;
use App\Http\Controllers\BaseController;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Carbon\Carbon;
use PDF;


class ReservacionesController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleReservacionesCalendario(Request $request){
        $fechaInicio = Carbon::now()->subMonth();
        $fechaFin = Carbon::now()->addMonths(4);
        $data = self::select(array('fechaInicio' => $fechaInicio,'fechaFin' => $fechaFin,));
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }

    public static function select($filtro){
        $data = Modelo::where('id',20)->get();
        $data = Modelo::where(function ($query) use ($filtro) {
            if ($filtro['reservacion_id'] ?? false) {
                $query->where('id', $filtro['reservacion_id']);
            } else {
                $query->whereBetween('fechaInicio', [$filtro['fechaInicio'],$filtro['fechaFin']])
                    ->orWhereBetween('fechafin', [$filtro['fechaInicio'],$filtro['fechaFin']]);
            }
        });
        $data->with([
                'reserva' => function ($query) {
                    $query->select('id', 'nombre', 'primerApellido', 'segundoApellido', 'telefono', 'correo');
                },
                'habitaciones' => function ($query) {
                    $query->select('habitacion_id', 'reservacion_id', 'id');
                },
                'habitaciones.habitacion' => function ($query) {
                    $query->select('id', 'nombre', 'descripcion', 'tarifa', 'amenidades', 'camas', 'puedeFumar', 'capacidad');
                },
                'acompaniantes' => function ($query) {
                    $query->select('id', 'reservacion_id', 'persona_id');
                },
                'acompaniantes.persona' => function ($query) {
                    $query->select('id', 'nombre', 'primerApellido', 'segundoApellido', 'telefono', 'correo');
                },
            ]);
        return $data->get();
    }

    public function handleListar(Request $request){
        $data = Modelo::orderBy('id',"asc")
            // ->with('estatus')
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }

    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch($payload['accion']){
                case 1:
                    return self::insertar($payload, $modelo);
                    break;
                case 2:
                    return self::actualizar($payload, $modelo);
                    break;
                case 3:
                    return self::eliminar($payload, $modelo);
                    break;
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
    }

    public function insertar($payload, $modelo) {
        // $reservacionPayload = array(
        //     'fechaInicio' => $payload['fechaInicio'] ,
        //     'fechaFin' => $payload['fechaFin'] ,
        //     'persona_id' => $payload['person']['id'],
        // );
        // $reservacion = $modelo::create($reservacionPayload);

        // if (isset($payload['habitaciones'] )) {
        //     foreach ($payload['habitaciones'] as $key => $value) {
        //         Habs::create(array(
        //             'fechaInicio' => $payload['fechaInicio'] ,
        //             'fechaFin' => $payload['fechaFin'] ,
        //             'habitacion_id' => $value['id'],
        //             'reservacion_id' => $reservacion->id,
        //         ));
        //     }
        // }
        // if (isset($payload['acompaniantes'] )) {
        //     foreach ($payload['acompaniantes'] as $key => $value) {
        //         $count = DB::table('personas')
        //             ->orWhere('telefono', '=', $value['telefono'])
        //             ->orWhere('correo', '=', $value['correo'])
        //             ->count();
        //         if ($count == 0) {
        //             $persona = Persona::create($value);
        //         } else {
        //             $tmp = DB::table('personas')
        //             ->orWhere('telefono', '=', $value['telefono'])
        //             ->orWhere('correo', '=', $value['correo'])
        //             ->get();

        //             if (sizeof($tmp) == 1) {
        //                 $persona = $tmp[0];
        //             }
        //         }
        //         Acompaniantes::create(array(
        //             'persona_id' => $persona->id,
        //             'reservacion_id' => $reservacion->id,
        //         ));
        //     }
        // }
        return self::responsee('Reservación registrado con exito.', true);
    }

    public static function generarPapeleta($payload) {
        \Carbon\Carbon::setLocale('es');
        if (!($payload['reservacion_id'] ?? false)) {
            return array(
                'file'      => null,
                'nombre'    => null,
                'status'    => false,
                'message'   => 'Falta reservacion_id',
            );
        } else {
            $data = self::select(array('reservacion_id' => $payload['reservacion_id']))->toArray();
            if (sizeof($data) == 1){
                $data = $data[0];
                $data['folio'] = str_pad($data['id'], 6, 0, STR_PAD_LEFT);
                $data['noches'] = Carbon::parse($data['fechaInicio'])->diffInDays(Carbon::parse($data['fechaFin']));
                $data['total'] = 0;
                $fechaRegistro  = Carbon::parse($data['created_at']);
                $fechaInicio    = Carbon::parse($data['fechaInicio']);
                $fechaFin       = Carbon::parse($data['fechaFin']);
                $data['fechaRegistro']  = ucfirst($fechaRegistro->isoFormat('dddd')) . ' - ' . $fechaRegistro->format('d/m/Y');
                $data['fechaInicio']    = ucfirst($fechaInicio->isoFormat('dddd')) . ' - ' . $fechaInicio->format('d/m/Y');
                $data['fechaFin']       = ucfirst($fechaFin->isoFormat('dddd')) . ' - ' . $fechaFin->format('d/m/Y');
                $tmpHab = [];
                foreach ($data['habitaciones'] as $item) {
                    $item   = $item['habitacion'];
                    $tmp    = str_replace(["$", ","], "", $item['tarifa']);
                    $tmp    = floatval($tmp);
                    $item['tarifa'] = number_format(($tmp), 2, '.', ',');;
                    $item['total']  = number_format(($data['noches'] * $tmp), 2, '.', ',');;
                    $data['total']  = $data['total'] + ( $data['noches'] * $tmp);
                    array_push($tmpHab,$item);
                };
                $data['habitaciones'] = $tmpHab;
                $data['totalMoney'] = number_format($data['total'], 2, '.', ',');
                // dd($data);
                $view = view('pdf.template', $data)->render();
                $pdf = PDF::loadHtml($view);
                return $pdf->output();
            }else{
                return array(
                    'file'      => null,
                    'nombre'    => null,
                    'status'    => false,
                    'message'   => 'Problemas con la resevación',
                );
                return array(
                    'file'      => null,
                    'nombre'    => null,
                    'status'    => false,
                    'message'   => 'Problemas con la resevación',
                );
            }
        }
    }

    public function generatePDF(Request $request){
        $payload = $request->all();
        // $payload = array('reservacion_id' =>220);
        $pdfContent = ReservacionesController::generarPapeleta($payload);
        if (isset($pdfContent['status']) && !$pdfContent['status']) {
            return self::responsee(
                $pdfContent['message'],
                $pdfContent['status'],
               [] ,
            );
        } else {
            $response = response($pdfContent, 200, [ 'Content-Type' => 'application/pdf', ]);
            return $response;
        }
    }
}
