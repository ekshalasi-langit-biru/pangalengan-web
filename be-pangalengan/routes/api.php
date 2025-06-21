<?php

use App\Http\Controllers\API\AdminProductController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',    [AuthController::class, 'login']);
Route::post('/forgot-password', [AuthController::class, 'sendResetLink']);
Route::post('/reset-password',  [AuthController::class, 'resetPassword']);

Route::get('/products',      [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/categories',    [CategoryController::class, 'index']);
Route::get('/categories/{slug}/products', [CategoryController::class, 'getProducts']);
Route::get('/blogs',         [BlogController::class, 'index']);


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', [UserController::class, 'profile']);
    Route::put('/user', [UserController::class, 'updateProfile']);
    

    Route::put('/user/email',    [UserController::class, 'updateEmail']);
    Route::put('/user/phone',    [UserController::class, 'updatePhone']);
    Route::put('/user/password', [UserController::class, 'updatePassword']);


    Route::post('/user/photo',   [UserController::class, 'updatePhoto']);
    Route::delete('/user/photo', [UserController::class, 'deletePhoto']);


    Route::post('/products/{id}/like', [ProductController::class, 'toggleLike']);
    Route::get('/user/liked-products', [ProductController::class, 'likedProducts']);

    
    Route::middleware('admin')->prefix('admin')->group(function () {
        Route::post('/products', [AdminProductController::class, 'store']);
        Route::put('/products/{product}', [AdminProductController::class, 'update']);
        Route::delete('/products/{product}', [AdminProductController::class, 'destroy']);
    });
});
