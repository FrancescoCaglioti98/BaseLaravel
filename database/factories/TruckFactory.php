<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Truck>
 */
class TruckFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'vehicle_name' => $this->faker->name(),
            'license_plate' => $this->faker->randomNumber(9, true),
            'width' => $this->faker->randomNumber(3, true),
            'depth' => $this->faker->randomNumber(3, true),
        ];
    }
}
