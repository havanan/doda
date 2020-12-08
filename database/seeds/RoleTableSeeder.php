<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleTableSeeder extends Seeder
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
                'name' => 'Admin',
                'slug' => 'admin',
                'note' => 'Quyền tối thượng'
            ],
            [
                'name' => 'Nhân viên',
                'slug' => 'staff',
                'note' => 'Chỉ xem'
            ],
        ];
        DB::table('roles')->truncate();
        DB::table('roles') -> insert($permissions);
    }
}
