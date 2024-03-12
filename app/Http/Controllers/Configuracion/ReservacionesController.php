<?php
namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Configuracion\Modelos\Reservacion as Modelo;
use App\Http\Controllers\Configuracion\Modelos\ReservacionHabitaciones as Habs;
use App\Http\Controllers\Configuracion\Modelos\ReservacionAcompaniantes as Acompaniantes;
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
                    $query->select('id', 'nombre', 'primerApellido', 'segundoApellido', 'telefono', 'correo', 'nacionalidad', 'ciudad', 'pais');
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
                    $query->select('id', 'nombre', 'primerApellido', 'segundoApellido', 'telefono', 'correo', 'edad');
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
        $message = 'Una o varias de las habitaciones están ocupadas.';
        $result  = false;
        $rangoFechas = [$payload['fechaInicio'], $payload['fechaFin']];
        $habitaciones_ids = array_column($payload['habitaciones'] ?? [], 'id');
    
        // Comprueba si alguna de las habitaciones seleccionadas está ocupada en el rango de fechas
        $ocupadas = Habs::whereIn('habitacion_id', $habitaciones_ids)
                        ->where(function($query) use ($rangoFechas) {
                            $query->whereBetween('fechaInicio', $rangoFechas)
                                  ->orWhereBetween('fechaFin', $rangoFechas);
                        })->exists();
        if (!$ocupadas) {
            $reservacionPayload = [
                'fechaInicio' => $payload['fechaInicio'],
                'fechaFin' => $payload['fechaFin'],
                'motivoViaje' => $this->parseMotivoViaje($payload['motivoViaje']),
                'persona_id' => $payload['person']['id'],
            ];
            $reservacion = $modelo::create($reservacionPayload);
    
            // Inserción en bloque para habitaciones y acompañantes
            $this->insertarHabitaciones($payload['habitaciones'], $reservacion->id,$payload);
            $this->insertarAcompaniantes($payload['acompaniantes'] ?? [], $reservacion->id);
    
            $message = 'Reservación registrada con éxito.';
            $result  = true; 
        }
    
        return self::responsee($message, $result);
    }
    
    protected function parseMotivoViaje($motivoViaje) {
        return is_array($motivoViaje) ? $motivoViaje['value'] : (is_string($motivoViaje) ? $motivoViaje : null);
    }
    
    protected function insertarHabitaciones($habitaciones, $reservacionId,$data) {
        $habitacionesData = array_map(function($habitacion) use ($reservacionId,$data) {
            return [
                'fechaInicio' => $data['fechaInicio'],
                'fechaFin' => $data['fechaFin'],
                'habitacion_id' => $habitacion['id'],
                'reservacion_id' => $reservacionId,
            ];
        }, $habitaciones);
    
        Habs::insert($habitacionesData); // Asume que la inserción en bloque es soportada
    }
    
    protected function insertarAcompaniantes($acompaniantes, $reservacionId) {
        foreach ($acompaniantes as $acompaniante) {
            $persona = Persona::create($acompaniante);
            Acompaniantes::create([
                'persona_id' => $persona->id,
                'reservacion_id' => $reservacionId,
            ]);
        }
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
                $view = view('pdf.papeletaReservacion', $data)->render();
                $pdf = PDF::loadHtml($view);
                return $pdf->output();
            }else{
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
