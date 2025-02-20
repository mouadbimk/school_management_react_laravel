<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class StudentParent extends Authenticatable
{
    use HasFactory,SoftDeletes,HasApiTokens,Notifiable;
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
    protected $hidden = [
        'remember_token',
        'deleted_at',
        'email_verified_at',
        'created_at',
    ];
    protected $appends =['role'];
    protected $casts = [
        'date_of_birth' => 'date:Y-m-d',
    ];
    public function getRoleAttribute(){
        return 'parent';
    }
}
