<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TruckRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Messaggi personalizzati per la validazione.
     */
    public function messages(): array
    {
        return [
            // Nome
            'vehicle_name.required' => 'Il campo Nome Veicolo è obbligatorio.',
            'vehicle_name.string' => 'Il Nome Veicolo deve essere inserito.',
            'vehicle_name.max' => 'Il Nome Veicolo inserito è troppo lungo.',
            'vehicle_name.unique' => 'Nome Veicolo già in uso.',

            // Numero Targa
            'license_plate.required' => 'Il Numero Targa è obbligatorio.',
            'license_plate.regex' => 'Il Numero Targa inserito non è corretto.',
            'license_plate.unique' => 'Numero Targa già in uso.',

            // Profondità (CM)
            'depth.required' => 'Il campo Profondità è obbligatorio.',
            'depth.numeric' => 'La Profondità deve essere un numero.',
            'depth.min' => 'La Profondità non può essere negativa.',
            'depth.max' => 'La Profondità non può superare 999cm.',

            // Larghezza (CM)
            'width.required' => 'Il campo Larghezza è obbligatorio.',
            'width.numeric' => 'La Larghezza deve essere un numero.',
            'width.min' => 'La Larghezza non può essere negativa.',
            'width.max' => 'La Larghezza non può superare 999cm.',
        ];
    }
}
