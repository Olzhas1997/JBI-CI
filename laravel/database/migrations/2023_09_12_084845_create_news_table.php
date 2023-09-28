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
        Schema::create('news_categories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
        });

        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title', 1024);
            $table->string('type')->default('маленькая');
            $table->string('slug')->nullable()->default(null);
            $table->foreignId('category_id')
                ->nullable()
                ->default(null)
                ->references('id')->on('news_categories')->nullOnDelete();
            $table->boolean('is_active')->default(false);
            $table->date('date')->nullable()->default(null);
            $table->json('preview_img')->nullable()->default(null);
            $table->json('detail_img')->nullable()->default(null);
            $table->json('content')->nullable()->default(null);
            $table->text('preview_text')->nullable();
            $table->text('detail_text')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
        Schema::dropIfExists('news_categories');
    }
};
