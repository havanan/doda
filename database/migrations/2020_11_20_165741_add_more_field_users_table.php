<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMoreFieldUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function($table) {
            $table->string('avatar')->nullable();
            $table->integer('status')->nullable();
            $table->integer('role_id')->nullable();
            $table->date('birthday')->nullable();
            $table->string('address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function($table) {
            $table->dropColumn('avatar');
            $table->dropColumn('address_1');
            $table->dropColumn('address_2');
            $table->dropColumn('status');
            $table->dropColumn('birthday');
        });
    }
}
