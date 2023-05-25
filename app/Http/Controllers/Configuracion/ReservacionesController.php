<?php
namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Configuracion\Modelos\Reservacion as Modelo;
use App\Http\Controllers\Configuracion\Modelos\ReservacionHabitaciones as Habs;
use App\Http\Controllers\Configuracion\Modelos\ReservacionAcompañantes as Acompaniantes;
use App\Http\Controllers\Configuracion\Modelos\Persona;
use App\Http\Controllers\BaseController;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Carbon\Carbon;


class ReservacionesController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleReservacionesCalendario(Request $request){
        // Obtén la fecha de inicio (un mes antes de la fecha actual)
        $fechaInicio = Carbon::now()->subMonth();

        // Obtén la fecha de fin (4 meses después de la fecha actual)
        $fechaFin = Carbon::now()->addMonths(4);

        // Realiza la consulta utilizando whereBetween en ambas columnas de fecha
        $data = Modelo::where(function ($query) use ($fechaInicio, $fechaFin) {
            $query->whereBetween('fechaInicio', [$fechaInicio, $fechaFin])
                ->orWhereBetween('fechafin', [$fechaInicio, $fechaFin]);
        })
        ->with([
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
        ])
        ->get();


        // $data = Modelo::orderBy('id',"asc")
        //     // ->with('estatus')
        //     ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
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
        $reservacionPayload = array(
            'fechaInicio' => $payload['fechaInicio'] ,
            'fechaFin' => $payload['fechaFin'] ,
            'persona_id' => $payload['person']['id'],
        );
        $reservacion = $modelo::create($reservacionPayload);

        if (isset($payload['habitaciones'] )) {
            foreach ($payload['habitaciones'] as $key => $value) {
                Habs::create(array(
                    'fechaInicio' => $payload['fechaInicio'] ,
                    'fechaFin' => $payload['fechaFin'] ,
                    'habitacion_id' => $value['id'],
                    'reservacion_id' => $reservacion->id,
                ));
            }
        }
        if (isset($payload['acompaniantes'] )) {
            foreach ($payload['acompaniantes'] as $key => $value) {
                $count = DB::table('personas')
                    ->orWhere('telefono', '=', $value['telefono'])
                    ->orWhere('correo', '=', $value['correo'])
                    ->count();
                if ($count == 0) {
                    $persona = Persona::create($value);
                } else {
                    $tmp = DB::table('personas')
                    ->orWhere('telefono', '=', $value['telefono'])
                    ->orWhere('correo', '=', $value['correo'])
                    ->get();

                    if (sizeof($tmp) == 1) {
                        $persona = $tmp[0];
                    }
                }
                Acompaniantes::create(array(
                    'persona_id' => $persona->id,
                    'reservacion_id' => $reservacion->id,
                ));
            }
        }
        return self::responsee('Reservación registrado con exito.', true);
    }
}
