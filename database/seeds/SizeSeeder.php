<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sizes')->truncate();
        $numbers = range(1, 10, 0.5);
        $sizes = shuffle($numbers);
        var_dump($sizes);
        $groups = [];
        if (!empty($numbers)) {
           foreach ($numbers as $key => $size) {
               $groups[$key] = [
                  'name' => $size,
                ];
           }
        }
        if (!empty($groups)) {
            DB::table('sizes')->insert($groups);
        }

    }
}
