<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
Use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Product::insert([
            [
                'name' => 'Coffe Dummy 1',
                'description' => 'Description Coffe 1',
                'price' => '80000',
                'image' => 'http://wallup.net/wp-content/uploads/2017/11/17/239445-coffee-coffee_beans-cup.jpg',
                'category_id' => '1',
            ], 

            [
                'name' => 'Coffe Dummy 2',
                'description' => 'Description Coffe 2',
                'price' => '100000',
                'image' => 'https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg',
                'category_id' => '2',
            ],

            [
                'name' => 'Coffe Dummy 3',
                'description' => 'Description Coffe 3',
                'price' => '150000',
                'image' => 'https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg',
                'category_id' => '3',
            ]
            

        ]);
    }
}
