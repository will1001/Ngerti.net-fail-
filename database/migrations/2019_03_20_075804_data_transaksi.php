<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DataTransaksi extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('data_transaksis', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('id_mapel');
            $table->integer('id_teacher');
            $table->integer('id_student');
            $table->date('tanggal');
            $table->time('waktu');
            $table->string('materi_yg_ingin_dipelajari');
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
        //
    }
}
