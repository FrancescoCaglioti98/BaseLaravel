<?php

namespace App\Http\Requests;

class StoreTruckRequest extends TruckRequest
{
    /**
     * Definisce le regole di validazione per il form.
     */
    public function rules(): array
    {
        return [
            'vehicle_name' => [
                'required',
                'string',
                'max:255',
                'unique:App\Models\Truck,vehicle_name',
            ],
            'license_plate' => [
                'required',
                'string',
                'regex:/^(?:[A-Z]{2}\d{3}[A-Z]{2}|\b[A-Z]{2} \d{1,6}\b|[A-Z]{2}\d{5})$/',
                'unique:App\Models\Truck,license_plate',
            ],
            'depth' => ['required', 'numeric', 'min:1', 'max:999'],
            'width' => ['required', 'numeric', 'min:1', 'max:999'],
        ];
    }
}
