<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasFactory,SoftDeletes,HasApiTokens,Notifiable;
    //hidden filed
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $appends = ['role'];
    public function getRoleAttribute(){
        return 'admin';
    }
}
