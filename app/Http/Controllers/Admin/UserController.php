<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    // public function index()
    // {
    //     $data = collect([
    //         [
    //             'name' => 'test1',
    //         ],
    //         [
    //             'name' => 'test2',
    //         ],
    //     ]);

    //     return Inertia::render('UsersList', [
    //         'users' => $data->map(function ($user) {
    //             return [
    //                 'name' => $user['name'],
    //             ];
    //         })
    //     ]);
    // }

    public function create()
    {
        return Inertia::render('users/add/UserAdd');
    }
}
