<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Category;

// =================================
// UPDATE BLOG CONTROL FOR FRONT END
// =================================

class BlogController extends Controller
{
    // GET /blogs
    public function index()
    {
        return response()->json(
            Blog::with('category')->latest()->get()
        );
    }

    // GET /blogs/{slug}
    public function show($slug)
    {
        $blog = Blog::with('category')->where('slug', $slug)->first();

        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        return response()->json($blog);
    }

    // GET /blogs/headline
    public function headline()
    {
        return response()->json(
            Blog::with('category')->where('is_headline', true)->latest()->get()
        );
    }

    // GET /blogs/category/{slug}
    public function byCategory($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $blogs = Blog::with('category')->where('category_id', $category->id)->latest()->get();

        return response()->json([
            'category' => $category,
            'blogs' => $blogs
        ]);
    }
}