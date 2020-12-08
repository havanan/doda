<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class PermissionTableSeeder extends Seeder
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
                'name' => 'Thêm',
                'slug' => 'them',
                'note' => 'Thêm mới bản ghi'
            ],
            [
                'name' => 'Sửa',
                'slug' => 'sua',
                'note' => 'Sửa bản ghi'
            ],
            [
                'name' => 'Xóa',
                'slug' => 'xoa',
                'note' => 'Xóa bản ghi'
            ],
        ];
        DB::table('permissions')->truncate();
        DB::table('permissions') -> insert($permissions);
    }
}
