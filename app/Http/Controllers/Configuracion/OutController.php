<?php
namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Configuracion\Modelos\Habitacion;
use App\Http\Controllers\Email\MailController;
use App\Http\Controllers\BaseController;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class OutController extends BaseController
{
    public function getResources(Request $request){
        $resources = $request['resources'] ?? null;
        if ($resources != null) {
            switch ($resources) {
                case 'getHabitaciones':
                    return self::getHabitaciones();
                    break;
                case 'sendMail':
                    return MailController::sendMailWithTemplate($request['payload'],'mailSeccionContacto');
                    break;
                case 'sendMailInicio':
                    return MailController::sendMailWithTemplate($request['payload'],'mailSeccionInicio');
                    break;
                
                default:
                    # code...
                    break;
            }
        } else {
            return self::responsee(
                'Sin tipo de recurso.',
                false,
            );
        }
    }
    public function getHabitaciones(){
        $data = Habitacion::orderBy('id',"asc")
            ->with('estatus')
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function sendMail(){
        $data = Habitacion::orderBy('id',"asc")
            ->with('estatus')
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
