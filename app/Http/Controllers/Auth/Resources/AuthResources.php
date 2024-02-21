<?php
namespace App\Http\Controllers\Auth\Resources;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Auth\Models\PersonalAccessToken;
use Closure;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AuthResources{
    
    public static function validateSession($token){
        // Busca el primer registro que coincida con el criterio
        $token = PersonalAccessToken::where('tokenFront', 'LIKE', '%'.$token)->first();
    
        // Retorna true si el token existe y aún no ha expirado; de lo contrario, retorna false
        return $token !== null && $token->expires_at > Carbon::now();
    }
}
