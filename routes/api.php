<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;



// CSRF for Sanctum


Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);




// Protected routes
Route::middleware('auth:sanctum')->group(function(){
    Route::get('/notes',[NoteController::class,'index']);
    Route::post('/notes', [NoteController::class,'store']);
    Route::get('/user',[AuthController::class,'user']);
    Route::post('/logout',[AuthController::class,'logout']);
    Route::put('/notes/{id}',[NoteController::class,'update']);
    Route::delete('/notes/{id}',[NoteController::class,'destroy']);
});
