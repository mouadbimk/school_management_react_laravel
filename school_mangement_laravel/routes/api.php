<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentParentController;
    
Route::middleware(['auth:sanctum'])->group(static function(){
    Route::get('/me',function(Request $request){
        return $request->user();
    });
});
//Permission Student

Route::middleware(['auth:sanctum','ability:student'])->prefix('student')->group(static function(){
  
});
//Get Student For Teacher and Admin
Route::middleware(['auth:sanctum','ability:admin,teacher'])->group(static function(){
    Route::apiResources([
        'students' => StudentController::class,
    ]);
});

//Permission Admin
Route::middleware(['auth:sanctum','ability:admin'])->prefix('admin')->group(static function(){
    Route::apiResources([
        'parents'=> StudentParentController::class,
    ]);

});
//Permission Teacher
Route::middleware(['auth:sanctum','ability:teacher'])->prefix('teacher')->group(static function(){

});

require __DIR__.'/auth.php';