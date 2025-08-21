<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

// ======================
// ADMIN BLOG
// ======================

class AdminBlogController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|exists:categories,id',
            'title'       => 'required|string|max:255',
            'slug'        => 'nullable|string|max:255|unique:blogs,slug',
            'content'     => 'required|string',
            'thumbnail'   => 'nullable|url',
            'is_headline' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $slug = $request->slug ?: Str::slug($request->title);

        $blog = Blog::create([
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'slug'        => $slug,
            'content'     => $request->content,
            'thumbnail'   => $request->thumbnail,
            'is_headline' => $request->is_headline ?? false,
        ]);

        return response()->json(['message' => 'Blog created', 'data' => $blog], 201);
    }

    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'category_id' => 'nullable|exists:categories,id',
            'title'       => 'nullable|string|max:255',
            'slug'        => 'nullable|string|max:255|unique:blogs,slug,' . $blog->id,
            'content'     => 'nullable|string',
            'thumbnail'   => 'nullable|url',
            'is_headline' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $blog->update($request->only([
            'category_id', 'title', 'slug', 'content', 'thumbnail', 'is_headline'
        ]));

        return response()->json(['message' => 'Blog updated', 'data' => $blog]);
    }

    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog->delete();

        return response()->json(['message' => 'Blog deleted']);
    }
}
