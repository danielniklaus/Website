<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePesansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pesans', function(Blueprint $table) {
            $table->increments('id');
            $table->string('harga');
            $table->string('nama_pemesan');
            $table->string('alamat_pemesan');
            $table->string('nomor_pemesan');
            $table->text('note');
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
        Schema::drop('pesans');
    }
}
