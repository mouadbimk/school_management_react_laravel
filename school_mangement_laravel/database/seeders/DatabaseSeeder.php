<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Teacher;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Mouad',
        //     'email' => 'mouad12@gmail.com',
        //     'password'=> bcrypt('12345678'),
        // ]);
        Admin::factory()->create([
            'firstname' => 'Admin',
            'lastname'=>'Owner',
            'email' => 'admin2@gmail.com',
            'address'=>fake()->address(),
            'date_of_birth'=> fake()->date(),
            'phone'=> substr(fake()->numerify('##########'),-10),
            'password'=> bcrypt('12345678'),
        ]);
        Teacher::factory()->create([
            'lastname' => 'Teacher',
            'firstname'=>'mouad',
            'address' => fake()->address(),
            'phone'=> substr(fake()->numerify('##########'),-10),
            'date_of_birth'=> fake()->date(),
            'email' => 'teacher@gmail.com',
            'password'=> bcrypt('12345678'),
        ]);
    }
}
