<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class ProjectsTableSeeder extends Seeder
{
/**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            'project'=>Str::random(0).'E-Commerce_Website',
            'TaskAssignedTo'=>Str::random(0).'Product Pages:Adam, Shopping Cart:Tyler, My Account:Adam',
            'TaskEstimatedTime'=>Str::random(0).'Product Pages:5, Shopping Cart:10, My Account:5',
        ]);

        DB::table('projects')->insert([
            'project'=>Str::random(0).'Websocket_Updates',
            'TaskAssignedTo'=>Str::random(0).'Add to Socket.IO:Stuart, Enable Broadcasting:Stuart, Adjust Interface:Stuart',
            'TaskEstimatedTime'=>Str::random(0).'Add to Socket.IO:2, Enable Broadcasting:5, Adjust Interface:3',
        ]);

        DB::table('projects')->insert([
            'project'=>Str::random(0).'Angular_Upgrades',
            'TaskAssignedTo'=>Str::random(0).'Upgrade Angular:Lan, Fix Broken Things:Stuart, Test:Lan',
            'TaskEstimatedTime'=>Str::random(0).'Upgrade Angular:15, Fix Broken Things:10, Test:10',
        ]);
    }

}
