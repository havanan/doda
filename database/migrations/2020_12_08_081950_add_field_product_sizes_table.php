<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldProductSizesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_sizes', function($table) {
            $table->string('long')->nullable()->note('dài');
            $table->string('width')->nullable()->note('rộng');
            $table->string('height')->nullable()->note('cao');
            $table->string('note')->nullable()->note('cao');
            $table->integer('color_id')->nullable();
            $table->integer('product_id')->nullable();
            $table->integer('available')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_sizes', function($table) {
            $table->dropColumn('long');
            $table->dropColumn('width');
            $table->dropColumn('height');
            $table->dropColumn('note');
            $table->dropColumn('color_id');
            $table->dropColumn('product_id');
            $table->dropColumn('available');
        });
    }
}
