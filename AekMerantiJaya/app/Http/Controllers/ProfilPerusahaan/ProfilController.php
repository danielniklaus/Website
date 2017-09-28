<?php

namespace App\Http\Controllers\ProfilPerusahaan;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Profil;
use Illuminate\Http\Request;
use Session;

class ProfilController extends Controller
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
            $profil = Profil::where('nama', 'LIKE', "%$keyword%")
				->orWhere('jenis', 'LIKE', "%$keyword%")
				->orWhere('alamat', 'LIKE', "%$keyword%")
				->orWhere('keterangan', 'LIKE', "%$keyword%")
				->orWhere('email', 'LIKE', "%$keyword%")
				->orWhere('web', 'LIKE', "%$keyword%")
				->paginate($perPage);
        } else {
            $profil = Profil::paginate($perPage);
        }

        return view('admin.profil.index', compact('profil'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('admin.profil.create');
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
        
        Profil::create($requestData);

        Session::flash('flash_message', 'Profil added!');

        return redirect('admin/profil');
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
        $profil = Profil::findOrFail($id);

        return view('admin.profil.show', compact('profil'));
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
        $profil = Profil::findOrFail($id);

        return view('admin.profil.edit', compact('profil'));
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
        
        $profil = Profil::findOrFail($id);
        $profil->update($requestData);

        Session::flash('flash_message', 'Profil updated!');

        return redirect('admin/profil');
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
        Profil::destroy($id);

        Session::flash('flash_message', 'Profil deleted!');

        return redirect('admin/profil');
    }
}
