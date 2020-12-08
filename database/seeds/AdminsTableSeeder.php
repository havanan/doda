<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'name' => 'Fare',
                'phone' => '0394128866',
                'email' => 'havanan95@gmail.com',
                'status' => 1,
                'password' => bcrypt('abcd1234')
            ]
        ];
        DB::table('admins')->truncate();
        DB::table('admins') -> insert($permissions);
    }
}
