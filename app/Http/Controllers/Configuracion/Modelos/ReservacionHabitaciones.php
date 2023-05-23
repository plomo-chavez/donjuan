<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservacionHabitaciones extends Model
{
    use HasFactory;
    protected $table        = "reservacion_habitaciones";
    protected $primaryKey   = "id";

    protected $fillable = [
        'reservacion_id',
        'habitacion_id',
        'fechaInicio',
        'fechaFin',
    ];

    public function habitacion() {
        return $this->hasOne(Habitacion::class,'id','habitacion_id');
    }
}
