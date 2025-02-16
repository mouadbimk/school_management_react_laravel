<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentParentController;

Route::middleware(['auth:sanctum','ability:student'])->prefix('student')->group(static function(){
    Route::get('/', function (Request $request) {
        return $request->user();
    });
});
Route::middleware(['auth:sanctum','ability:admin'])->prefix('admin')->group(static function(){
    Route::apiResources([
        'parents'=> StudentParentController::class,
    ]);
    Route::get('/', function (Request $request) {
        return $request->user();
    });
});
Route::middleware(['auth:sanctum','ability:teacher'])->prefix('teacher')->group(static function(){
    Route::get('/', function (Request $request) {
        return $request->user();
    });
});
