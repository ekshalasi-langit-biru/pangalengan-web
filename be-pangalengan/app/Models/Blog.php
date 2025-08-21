<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model
{
    //
    use HasFactory;
    
    protected $fillable = ['category_id','title', 'slug', 'content', 'thumbnail', 'is_headline'];// Update Headline and Category

    public function category()
    {
        return $this->belongsTo(Category::class); 
    }
}


