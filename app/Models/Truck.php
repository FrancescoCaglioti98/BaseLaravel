<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Truck extends Model
{
    use HasFactory;

    protected $table = 'trucks';

    protected $primaryKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'vehicle_name',
        'license_plate',
        'width',
        'depth',
    ];
}
