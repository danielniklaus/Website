<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


use Illuminate\Support\Facades\DB;

class Harga extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'hargas';

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
    protected $fillable = ['atap', 'canal', 'hargaRabung1', 'hargaRabung5', 'keteranga'];

    public static function get_all_harga(){
       return DB::table('hargas')
            ->join('canals', 'canals.id', '=', 'hargas.canal')
            ->join('ataps', 'ataps.id', '=', 'hargas.atap')
            ->select('hargas.*', 'canals.canal','canals.reng', 'ataps.jenis','ataps.ukuran')
            ->get();
    }

    
}
