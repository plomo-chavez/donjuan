<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Configuracion\Modelos\ReservacionHabitaciones ;
use App\Http\Controllers\Configuracion\Modelos\Habitacion ;
use App\Http\Controllers\Configuracion\Modelos\HabitacionEstatus;
use App\Http\Controllers\Configuracion\Modelos\Persona;
use App\Http\Controllers\BaseController;

class CatalogosController extends BaseController
{
    public function getTiposUsuarios(Request $request){
        $data = [
            [ 'nombre' => 'Administrador','id' => 1],
            [ 'nombre' => 'Recepcionista','id' => 2],
        ];
        $response = [
            'status' => false,
            'data' => $data,
            'message' => null
        ];
        return response()->json($response, 200);
    }
    public function getEstatusHabitaciones(Request $request){
        $data = HabitacionEstatus::orderBy('nombre',"asc")
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getHabitaciones(Request $request){
        $data = Habitacion::orderBy('nombre',"asc")
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function customPersons(Request $request){
        $data = Persona::where("tipo",1)->orderBy('nombre',"asc")
            ->get()
            ->map(function ($persona) {
                $persona['nombre'] = $persona['nombre'] . ' ' . $persona['primerApellido'] . ' ' . $persona['segundoApellido'];
                return $persona;
            });
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function roomsAvailable(Request $request){
        $payload = $request->all();
        $excludedIds = [];
        $rangoFechas = [$payload['filtros']['fechaInicio'], $payload['filtros']['fechaFin']]; // Define el rango de fechas que quieres buscar
        $reservaciones_ids = ReservacionHabitaciones::where(function($query) use ($rangoFechas) {
            $query->where(function($q) use ($rangoFechas) {
                // Caso donde una reserva existente comienza dentro del nuevo rango de fechas.
                $q->whereBetween('fechaInicio', $rangoFechas);
            })->orWhere(function($q) use ($rangoFechas) {
                // Caso donde una reserva existente termina dentro del nuevo rango de fechas.
                $q->whereBetween('fechaFin', $rangoFechas);
            })->orWhere(function($q) use ($rangoFechas) {
                // Casos donde una reserva existente abarca completamente el nuevo rango de fechas.
                $q->where('fechaInicio', '<', $rangoFechas[0])
                  ->where('fechaFin', '>', $rangoFechas[1]);
            })->orWhere(function($q) use ($rangoFechas) {
                // Caso donde el nuevo rango de fechas abarca completamente una reserva existente.
                $q->where('fechaInicio', '>', $rangoFechas[0])
                  ->where('fechaFin', '<', $rangoFechas[1]);
            });
        })->get(['habitacion_id']);
        $data = Habitacion::whereNotIn('id', $reservaciones_ids)
                ->orderBy('nombre',"asc")
                ->with('estatus')
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
