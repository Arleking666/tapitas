<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicidad extends Model
{
    use HasFactory;
    protected $fillable=[
        'nombre',
        'logo',
        'promocion',
    
    ];
}
