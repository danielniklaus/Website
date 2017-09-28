<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


use Illuminate\Support\Facades\DB;

class Profil extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'profils';

    /**
    * The database primary key value.
    *
    * @var string
    */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['nama', 'jenis', 'alamat', 'keterangan', 'email', 'web'];

    public static function get_profil(){
       return DB::table('profils')->first();
    }

    
}
