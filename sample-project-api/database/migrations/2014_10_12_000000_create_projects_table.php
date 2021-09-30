<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->string('project')->nullable();
            $table->json('TaskAssignedTo')->nullable();
            $table->json('TaskEstimatedTime')->nullable();
        });
        DB::statement('ALTER TABLE `projects` CHANGE `project` `project` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL, CHANGE `TaskAssignedTo` `TaskAssignedTo` LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL, CHANGE `TaskEstimatedTime` `TaskEstimatedTime` LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
