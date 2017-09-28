<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Canal extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'canals';

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
    protected $fillable = ['canal', 'reng'];

    public static function get_all_canal(){
        return DB::table('canals')->get();
    }
    public static function get_canal($id){
        return DB::table('canals')->where('id',$id)->first();
    }

    
}
