<?php

namespace App\Http\Controllers\Pesan;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Pesan;
use Illuminate\Http\Request;
use Session;

class PesanController extends Controller
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

        if (!empty($keyword)) {
            $pesan = Pesan::where('harga', 'LIKE', "%$keyword%")
				->orWhere('nama_pemesan', 'LIKE', "%$keyword%")
				->orWhere('alamat_pemesan', 'LIKE', "%$keyword%")
				->orWhere('nomor_pemesan', 'LIKE', "%$keyword%")
				->orWhere('note', 'LIKE', "%$keyword%")
				->paginate($perPage);
        } else {
            $pesan = Pesan::paginate($perPage);
        }

        return view('admin.pesan.index', compact('pesan'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
       
        return view('admin.pesan.create');
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
        
        Pesan::create($requestData);

        // Session::flash('flash_message', 'Pesan added!');
        $request->session()->flash('alert-success', 'Pesanan sudah diterima, kami akan menghubungi anda. Terimakasih');

        return redirect('harga/');
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
        $pesan = Pesan::findOrFail($id);

        return view('admin.pesan.show', compact('pesan'));
    }
    public function pesan($id)
    {
        $id_harga = $id;

        return view('admin.pesan.edit', compact('id_harga'));
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
        $pesan = Pesan::findOrFail($id);

        return view('admin.pesan.edit', compact('pesan'));
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
        
        $pesan = Pesan::findOrFail($id);
        $pesan->update($requestData);

        Session::flash('flash_message', 'Pesan updated!');

        return redirect('admin/pesan');
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
        Pesan::destroy($id);

        Session::flash('flash_message', 'Pesan deleted!');

        return redirect('admin/pesan');
    }
}
