<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Inertia\Inertia;

class TestController extends Controller
{

    public function index()
    {
        $data = collect([
            [
                'name' => 'test1',
            ],
            [
                'name' => 'test2',
            ],
        ]);

        return Inertia::render('TestComponent', [
            'users' => $data->map(function ($user) {
                return [
                    'name' => $user['name'],
                ];
            })
        ]);
    }
}
