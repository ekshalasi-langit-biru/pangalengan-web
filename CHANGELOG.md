# Changelog

## [Unreleased]

### ✨ Features
- Implemented full authentication system using Laravel Sanctum
  - User registration, login, logout
  - Token-based access control
- Added user roles (`user`, `admin`) with `IsAdmin` middleware
- Created admin-only APIs for managing products (create, update, delete)
- Enabled liking/unliking products for authenticated users
- Protected user-related routes using `auth:sanctum` middleware
- Implemented profile management:
  - Update profile info
  - Update email, phone, password
  - Upload & delete profile photo
- Created `categories` and `blogs` public routes
- Integrated default admin seeder with pre-generated token for testing

### 🛠 Fixes
- Resolved missing `personal_access_tokens` table issue during Sanctum usage
- Ensured route structure using `/api` prefix inside `web.php`
- Adjusted role check logic in custom `IsAdmin` middleware

### 🧪 Testing
- Verified all public and protected APIs via Postman:
  - `/register`, `/login`, `/user`, `/products`, `/categories`
  - `/products/{id}/like`, `/user/liked-products`
  - Admin endpoints for product CRUD (Create, Read, Update, Delete)

---

## How to test
1. Run `php artisan migrate:fresh --seed`
2. Use Postman:
   - Register new user or use admin seed credentials
   - Use token from login/seed to access protected endpoints

