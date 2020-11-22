<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bills', function (Blueprint $table) {
            $table->id();
            $table->integer('member_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->integer('voucher_id')->nullable();
            $table->integer('price_total')->default(0);
            $table->integer('price_discount')->default(0);
            $table->integer('product_total')->default(0)->comment('tổng sản phẩm');
            $table->integer('amount')->default(0)->comment('tổng số lượng hàng');
            $table->integer('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bills');
    }
}
