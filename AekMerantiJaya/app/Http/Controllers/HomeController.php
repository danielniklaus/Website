<?php

namespace App\Http\Controllers;
use App\Profil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
/*    public function __construct()
    {
        $this->middleware('auth');
    }
*/
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return view('home');
        return view('home.index');
    }

    public function galery()
    {
        return view('home.galery');
    }

    public function profil()
    {
        $profil = Profil::get_profil(); 
        return view('home.profil',compact('profil'));
    }

    public function pemasangan(){
        return view('home.pemasangan');
    }

    public function material(){
        return view('home.material');
    }

    public function harga(){
        $perPage = 25;
        $harga = DB::table('hargas')
            ->join('canals', 'canals.id', '=', 'hargas.canal')
            ->join('ataps', 'ataps.id', '=', 'hargas.atap')
            ->select('hargas.*', 'canals.canal','canals.reng', 'ataps.jenis','ataps.ukuran')
            ->paginate($perPage);
        return view('home.harga',compact('harga'));
    }
}
