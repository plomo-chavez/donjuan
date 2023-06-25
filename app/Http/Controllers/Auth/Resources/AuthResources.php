<?php
namespace App\Http\Controllers\Auth\Resources;

use App\Http\Controllers\Auth\Models\PersonalAccessToken;
use App\Http\Controllers\Auth\Models\User;
use Carbon\Carbon;
use DateTime;

class AuthResources {
    public static function validateSession($token){
        $response = false;
        $accessToken = PersonalAccessToken::where('tokenFront', 'like', '%' . $token . '%')->get();
        if (sizeof($accessToken = PersonalAccessToken::where('tokenFront', 'like', '%' . $token . '%')->get()) == 1) {
            $accessToken = $accessToken[0];
            $now = Carbon::now();
            $date = Carbon::parse($accessToken->expires_at);
            if($now->lessThan($date)){
                $response =  true;
            }
        }
        return $response;
    }
}