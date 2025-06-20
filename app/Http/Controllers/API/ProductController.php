<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;

class ProductController extends Controller
{
    //
    public function index()
    {
        return Product::with('category')->get();
    }
    
    public function show($id)
    {
        return Product::with('category')->findOrFail($id);
    }

    public function toggleLike($id)
    {
        $user = Auth::user();
        
        $user->likedProducts()->toggle($id);

        return response()->json(['message' => 'Toggled like status']);
    }

    public function likedProducts()
    {
        $user = Auth::user();

        return $user->likedProducts()->with('category')->get();
    }
}
