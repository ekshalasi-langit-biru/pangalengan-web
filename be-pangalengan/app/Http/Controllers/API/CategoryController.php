<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    //
    public function index()
    {
        return Category::all();
    }

    public function getProducts($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();

        return $category->products()->with('category')->get();
    }
}
