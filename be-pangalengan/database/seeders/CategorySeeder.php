<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Category::insert([
            [
                'id' => 1,
                'name' => 'Coffe Dummy 1',
                'slug' => 'espresso',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id' => 2,
                'name' => 'Coffe Dummy 2',
                'slug' => 'latte',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id' => 3,
                'name' => 'Coffe Dummy 3',
                'slug' => 'cappucino',
                'created_at' => now(),
                'updated_at' => now(),
            ]

        ]);
    }
}
