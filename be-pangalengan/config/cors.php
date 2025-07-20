<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Configuration
    |--------------------------------------------------------------------------
    |
    | Here you can configure the CORS settings for your application. This
    | will determine which domains can access your API and which methods
    | they can use.
    |
    */

    'paths' => ['api/*'], // Apply CORS to all API routes

    'allowed_methods' => ['*'], // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => ['http://localhost:5173'], // Allow React app to make requests

    'allowed_headers' => ['*'], // Allow all headers

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Allow credentials like cookies or tokens
];
