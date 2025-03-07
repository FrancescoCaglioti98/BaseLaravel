<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class UpdateTruckRequest extends TruckRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'vehicle_name' => [
                'string',
                'max:255',
                Rule::unique('trucks', 'vehicle_name')->ignore($this->route('truck')),
            ],
            'license_plate' => [
                'string',
                'regex:/^(?:[A-Z]{2}\d{3}[A-Z]{2}|\b[A-Z]{2} \d{1,6}\b|[A-Z]{2}\d{5})$/',
                Rule::unique('trucks', 'license_plate')->ignore($this->route('truck')),
            ],
            'depth' => ['numeric', 'min:1', 'max:999'],
            'width' => ['numeric', 'min:1', 'max:999'],
        ];
    }
}
