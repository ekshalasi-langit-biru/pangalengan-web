<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use HasFactory;

class Blog extends Model
{
    //
    protected $fillable = ['title', 'slug', 'content', 'thumbnail'];
}
