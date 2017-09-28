<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pesan extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pesans';

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
    protected $fillable = ['harga', 'nama_pemesan', 'alamat_pemesan', 'nomor_pemesan', 'note'];

    
}
