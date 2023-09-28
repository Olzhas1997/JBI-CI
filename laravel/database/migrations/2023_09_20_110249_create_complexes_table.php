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
        Schema::create('complexes', function (Blueprint $table) {
            $table->id();
            $table->uuid('external_id')->unique();
            $table->string('title');
            $table->string('slug')->nullable();
            $table->string('address')->nullable();
            $table->boolean('is_active')->default(false);
            $table->boolean('is_main_shown')->default(false);
            $table->string('coordinates')->nullable();
            $table->text('description')->nullable();
            $table->json('about')->nullable();
            $table->json('features')->nullable();
            $table->json('preview_image')->nullable();
            $table->json('detailed_image')->nullable();
            $table->integer('sort')->nullable();
            $table->json('statistic_data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complexes');
    }
};
