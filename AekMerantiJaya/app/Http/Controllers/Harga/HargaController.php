<?php

namespace App\Http\Controllers\Harga;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Harga;
use App\Atap;
use App\Canal;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Session;

class HargaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = 25;
        

        /*if (!empty($keyword)) {
            $harga = Harga::where('atap', 'LIKE', "%$keyword%")
				->orWhere('canal', 'LIKE', "%$keyword%")
				->orWhere('hargaRabung1', 'LIKE', "%$keyword%")
				->orWhere('hargaRabung5', 'LIKE', "%$keyword%")
				->orWhere('keteranga', 'LIKE', "%$keyword%")
				->paginate($perPage);
        } else {
            $harga = Harga::paginate($perPage);
        }*/
        
        $harga = DB::table('hargas')
            ->join('canals', 'canals.id', '=', 'hargas.canal')
            ->join('ataps', 'ataps.id', '=', 'hargas.atap')
            ->select('hargas.*', 'canals.canal','canals.reng', 'ataps.jenis','ataps.ukuran')
            ->paginate($perPage);
            // dd($harga);
        // dd($harga1,$harga);
            /*"id": 1
        +"atap": "2"
        +"canal": "GULVANIZE"
        +"hargaRabung1": 150000
        +"hargaRabung5": 160000
        +"keteranga": "Kontruksi Baja Ringan + Atap + Upah Pasang"
        +"created_at": "2017-07-08 00:01:42"
        +"updated_at": "2017-07-09 04:24:00"
        +"reng": "C. 0,70 – R. 0,45"
        +"jenis": "Atap Star Roof"
        +"ukuran": "0,35MM"
*/

        return view('admin.harga.index', compact('harga'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $ataps = Atap::get_all_atap();
        $canals = Canal::get_all_canal();


        return view('admin.harga.create',compact('ataps','canals'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        
        $requestData = $request->all();
        
        Harga::create($requestData);

        Session::flash('flash_message', 'Harga added!');

        return redirect('admin/harga');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $harga = Harga::findOrFail($id);
        $atap = Atap::get_atap($harga->atap);
        $canal = Canal::get_canal($harga->canal);

        return view('admin.harga.show', compact('harga','atap','canal'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $harga = Harga::findOrFail($id);
        $ataps = Atap::get_all_atap();
        $canals = Canal::get_all_canal();
       

        return view('admin.harga.edit', compact('harga','ataps','canals'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update($id, Request $request)
    {
        
        $requestData = $request->all();
        
        $harga = Harga::findOrFail($id);
        $harga->update($requestData);

        Session::flash('flash_message', 'Harga updated!');

        return redirect('admin/harga');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy($id)
    {
        Harga::destroy($id);

        Session::flash('flash_message', 'Harga deleted!');

        return redirect('admin/harga');
    }
}
