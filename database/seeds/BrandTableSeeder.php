<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandTableSeeder extends Seeder
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
                'slug' => 'fare',
                'status' => 1
            ]
        ];
        DB::table('brands')->truncate();
        DB::table('brands') -> insert($permissions);
    }
}
