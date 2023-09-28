<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class CreateAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'     => 'main-admin',
            'email'    => 'admin@mail.com',
            'password' => bcrypt('L7as24^'),
        ]);
    }
}
