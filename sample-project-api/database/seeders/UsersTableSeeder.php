<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'=>Str::random(0).'Stuart',
            'projects'=>Str::random(0).'Websocket Updates, Angular Upgrades',

        ]);

        DB::table('users')->insert([
            'name'=>Str::random(0).'Tyler',
            'projects'=>Str::random(0).'E-Commerce Website',

        ]);

        DB::table('users')->insert([
            'name'=>Str::random(0).'Adam',
            'projects'=>Str::random(0).'E-Commerce Website',

        ]);

        DB::table('users')->insert([
            'name'=>Str::random(0).'Lan',
            'projects'=>Str::random(0).'Angular Upgrades',

        ]);
    }
}
