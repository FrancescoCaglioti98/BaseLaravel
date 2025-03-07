<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property-read int $id
 * @property-read string $vehicle_name
 * @property-read string $license_plate
 * @property-read int $width
 * @property-read int $depth
 */
class TruckResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'vehicle_name' => $this->vehicle_name,
            'license_plate' => $this->license_plate,
            'width' => $this->width,
            'depth' => $this->depth,
        ];
    }
}
