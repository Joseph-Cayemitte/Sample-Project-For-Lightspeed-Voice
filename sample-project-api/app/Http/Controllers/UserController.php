<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index($user)
    {
        $name = User::whereName($user)->first();
        return $name;
        // return User::all($user);
        // return $user;
    }
}
