<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Atap extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ataps';

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
    protected $fillable = ['jenis', 'ukuran'];

    public static function get_all_atap(){
        return DB::table('ataps')->get();
    }
    public static function get_atap($id){
        return DB::table('ataps')->where('id',$id)->first();
    }

    
}
