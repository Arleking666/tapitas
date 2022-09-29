<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LugarController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\PublicidadController;

Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => 'api'], function(){
    Route::post('auth/logout', [AuthController::class, 'logout']);
    Route::post('auth/refresh', [AuthController::class, 'refresh']);
    Route::post('auth/me', [AuthController::class, 'me']);

    Route::get('lugar',[LugarController::class, 'index']);
    Route::post('lugar',[LugarController::class, 'store']);

    Route::put('lugar/{id}',[LugarController::class, 'update']);
    Route::delete('lugar/{id}',[LugarController::class, 'destroy']);

    Route::apiResource('evento',EventoController::class);
    
    Route::apiResource('publicidad',PublicidadController::class);
    
});
