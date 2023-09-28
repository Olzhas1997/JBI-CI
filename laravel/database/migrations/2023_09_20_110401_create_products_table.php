<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->uuid('external_id')->unique();
            $table->string('type');
            $table->integer('floor')->nullable();
            $table->integer('number_on_floor')->nullable();
            $table->string('status')->nullable();
            $table->string('number')->nullable();
            $table->float('square')->nullable();
            $table->integer('levels')->nullable();
            $table->string('plan')->nullable();
            $table->string('layout')->nullable();
            $table->integer('rooms')->nullable();
            $table->float('kitchen')->nullable();
            $table->string('definition')->nullable();
            $table->string('section')->nullable();
            $table->uuid('section_id')->nullable();
            $table->string('location')->nullable();
            $table->string('object')->nullable();
            $table->float('price')->nullable();
            $table->dateTime('step')->nullable();
            $table->integer('complete')->nullable();
            $table->string('renovation')->nullable();
            $table->float('living_area')->nullable();
            $table->float('common_square')->nullable();
            $table->string('second')->nullable();
            $table->string('image_flat')->nullable();
            $table->string('image_floor')->nullable();
            $table->string('image_for_int')->nullable();
            $table->string('image_3d')->nullable();
            $table->float('discount_max')->nullable();
            $table->string('discount_campaign')->nullable();
            $table->string('discount_id')->nullable();
            $table->float('discount_amount')->nullable();
            $table->foreignUuid('house_id')->references('external_id')->on('houses')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
