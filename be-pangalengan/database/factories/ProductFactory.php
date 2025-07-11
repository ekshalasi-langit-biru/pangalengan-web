<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->word, 
            'description' => $this->faker->sentence, 
            'price' => $this->faker->randomFloat(2, 10, 1000, 100000), 
            'image' => $this->faker->imageUrl(), 
            'category_id' => $this->faker->numberBetween(1, 3), 
        ];
    }
}
