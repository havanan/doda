<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldProductColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_colors', function($table) {
            $table->integer('product_id')->nullable();
            $table->string('image')->nullable();
            $table->integer('available')->nullable();
            $table->string('note')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_colors', function($table) {
            $table->dropColumn('product_id');
            $table->dropColumn('image');
            $table->dropColumn('available');
        });
    }
}
