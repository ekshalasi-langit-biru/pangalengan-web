<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Like extends Model
{
    use HasFactory;

    // Define the table name (if it's not the plural form of the model name)
    protected $table = 'likes';

    // Specify the primary key (if it's not the default 'id')
    protected $primaryKey = 'id';

    // Indicate if the ID is auto-incrementing
    public $incrementing = true;

    // Define the fields that are mass assignable
    protected $fillable = [
        'user_id',
        'product_id',
        'created_at',
        'updated_at',
    ];

    // Define the relationships with other models
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
