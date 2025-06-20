<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use HasFactory;

class Product extends Model
{
    //

    protected $fillable = ['name', 'description', 'price', 'image', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function likedByUsers()
    {
        return $this->belongsToMany(User::class, 'likes')->withTimesstamps();
    }
}
