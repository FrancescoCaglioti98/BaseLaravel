<?php

use App\Http\Controllers\TruckController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/trucks')->group(function () {
    Route::get('/', [TruckController::class, 'index'])->name('trucks.index');
    Route::get('/{truck}', [TruckController::class, 'indexSpecific'])->name('trucks.index.specific');
    Route::post('/', [TruckController::class, 'store'])->name('trucks.store');
    Route::put('/{truck}', [TruckController::class, 'update'])->name('trucks.update');
    Route::delete('/{truck}', [TruckController::class, 'destroy'])->name('trucks.destroy');
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
