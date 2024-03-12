<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservacion extends Model
{
    use HasFactory;
    protected $table        = "reservaciones";
    protected $primaryKey   = "id";

    protected $fillable = [
        'persona_id',
        'fechaInicio',
        'fechaFin',
        'motivoViaje',
    ];

    public function reserva() {
        return $this->hasOne(Persona::class,'id','persona_id');
    }

    public function acompaniantes() {
        return $this->hasMany(ReservacionAcompaniantes::class,'reservacion_id','id');
        // return $this->hasOne(ReservacionAcompaniantes::class,'persona_id','id');
    }

    public function habitaciones() {
        return $this->hasMany(ReservacionHabitaciones::class,'reservacion_id','id');
    }
}
