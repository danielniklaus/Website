<?php

namespace App\Http\Controllers\Atap;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Atap;
use Illuminate\Http\Request;
use Session;

class AtapController extends Controller
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
            $atap = Atap::where('jenis', 'LIKE', "%$keyword%")
				->orWhere('ukuran', 'LIKE', "%$keyword%")
				->paginate($perPage);
        } else {
            $atap = Atap::paginate($perPage);
        }

        return view('atap.atap.index', compact('atap'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        
        return view('atap.atap.create');
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
        
        Atap::create($requestData);

        Session::flash('flash_message', 'Atap added!');

        return redirect('admin/atap');
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
        $atap = Atap::findOrFail($id);

        return view('atap.atap.show', compact('atap'));
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
        $atap = Atap::findOrFail($id);

        return view('atap.atap.edit', compact('atap'));
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
        
        $atap = Atap::findOrFail($id);
        $atap->update($requestData);

        Session::flash('flash_message', 'Atap updated!');

        return redirect('admin/atap');
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
        Atap::destroy($id);

        Session::flash('flash_message', 'Atap deleted!');

        return redirect('admin/atap');
    }
}
