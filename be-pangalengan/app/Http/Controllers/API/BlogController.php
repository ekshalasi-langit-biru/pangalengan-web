<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    //
    public function index()
    {
        $blogs = Blog::all(); 
        return response()->json($blogs);
    }


    // public function show($id)
    // {
    //     $blog = Blog::find($id); 

    //     if (!$blog) {
    //         return response()->json(['message' => 'Blog not found'], 404);
    //     }

    //     return response()->json($blog); 
    // }
}
