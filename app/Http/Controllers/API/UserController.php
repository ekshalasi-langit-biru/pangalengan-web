<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    //
    public function profile()
    {
        return Auth::user();
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $user->update($request->only(['name', 'phone']));
        return response()->json(['message' => 'Profile updated.']);
    }

    public function updateEmail(Request $request)
    {
        $request->validate([
            'new_email' => 'required|email|unique:users,email',
        ]);
        $user = Auth::user();
        $user->email = $request->new_email;
        $user->save();
        return response()->json(['message' => 'Email updated.']);
    }

    public function updatePhone(Request $request)
    {
        $request->validate([
            'new_phone' => 'required',
        ]);
        $user = Auth::user();
        $user->phone = $request->new_phone;
        $user->save();
        return response()->json(['message' => 'Phone updated.']);
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
        ]);

        $user = Auth::user();
        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Current password is incorrect'], 403);
        }

        $user->password = bcrypt($request->new_password);
        $user->save();

        return response()->json(['message' => 'Password updated.']);
    }

    public function updatePhoto(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|max:2048',
        ]);

        $user = Auth::user();
        if ($user->photo_path) {
            Storage::disk('public')->delete($user->photo_path);
        }

        $path = $request->file('photo')->store('user_photos', 'public');
        $user->photo_path = $path;
        $user->save();

        return response()->json(['message' => 'Photo uploaded.', 'photo_url' => asset('storage/'.$path)]);
    }

    public function deletePhoto()
    {
        $user = Auth::user();
        if ($user->photo_path) {
            Storage::disk('public')->delete($user->photo_path);
            $user->photo_path = null;
            $user->save();
        }
        return response()->json(['message' => 'Photo deleted.']);
    }
}
