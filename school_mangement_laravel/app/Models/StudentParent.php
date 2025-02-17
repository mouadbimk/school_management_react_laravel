<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudentParent extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'firstname',
        'lastname',
        'date_of_birth',
        'gender',
        'blood_type',
        'address',
        'phone',
        'email',
        'last_login_date',
        'password'
    ];
}
