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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->boolean('is_active')->default(true);
            $table->date('date')->nullable()->default(null);
            $table->foreignId('category_id')
                ->nullable()
                ->default(null)
                ->references('id')->on('document_categories')->nullOnDelete();
            $table->foreignId('group_id')
                ->nullable()
                ->default(null)
                ->references('id')->on('document_groups')->nullOnDelete();
            $table->json('file')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
