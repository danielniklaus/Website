<?php

namespace App\Http\Controllers\Canal;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Canal;
use Illuminate\Http\Request;
use Session;

class CanalController extends Controller
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
            $canal = Canal::where('canal', 'LIKE', "%$keyword%")
				->orWhere('reng', 'LIKE', "%$keyword%")
				->paginate($perPage);
        } else {
            $canal = Canal::paginate($perPage);
        }

        return view('admin.canal.index', compact('canal'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('admin.canal.create');
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
        
        Canal::create($requestData);

        Session::flash('flash_message', 'Canal added!');

        return redirect('admin/canal');
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
        $canal = Canal::findOrFail($id);

        return view('admin.canal.show', compact('canal'));
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
        $canal = Canal::findOrFail($id);

        return view('admin.canal.edit', compact('canal'));
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
        
        $canal = Canal::findOrFail($id);
        $canal->update($requestData);

        Session::flash('flash_message', 'Canal updated!');

        return redirect('admin/canal');
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
        Canal::destroy($id);

        Session::flash('flash_message', 'Canal deleted!');

        return redirect('admin/canal');
    }
}
