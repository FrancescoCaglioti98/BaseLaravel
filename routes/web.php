<?php

use App\Http\Controllers\TruckController;
use Illuminate\Support\Facades\Route;

/*Route::prefix('/trucks')->group(function () {
    Route::get('/', [TruckController::class, 'index'])->name('trucks.index');

    Route::get('/create', [TruckController::class, 'create'])->name('trucks.create');
    Route::post('/', [TruckController::class, 'store'])->name('trucks.store');

});*/

Route::get('/{any?}', function () {
    return view('base');
})->where('any', '.*');
