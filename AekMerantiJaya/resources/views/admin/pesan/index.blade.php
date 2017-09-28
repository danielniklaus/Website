@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            @include('admin.sidebar')

            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading">Tabel Pemesanan </div>
                    <div class="panel-body">
                        <a href="" class="btn btn-success btn-sm" title="Add New Pesan">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add New
                        </a>

                        {!! Form::open(['method' => 'GET', 'url' => '/admin/pesan', 'class' => 'navbar-form navbar-right', 'role' => 'search'])  !!}
                        <div class="input-group">
                            <input type="text" class="form-control" name="search" placeholder="Search...">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                        {!! Form::close() !!}

                        <br/>
                        <br/>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>ID</th><th>Harga</th><th>Nama Pemesan</th><th>Alamat Pemesan</th><th>Actions</th><th>Nomor Pemesan</th><th>Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @foreach($pesan as $item)
                                    <tr>
                                        <td>{{ $item->id }}</td>
                                        <td>Paket {{ $item->harga }}</td>
                                        <td>{{ $item->nama_pemesan }}</td>
                                        <td>{{ $item->alamat_pemesan }}</td>
                                        <td>{{ $item->nomor_pemesan }}</td>
                                        <td>{{ $item->note }}</td>
                                        <td>
                                            <a href="{{ url('/admin/pesan/' . $item->id) }}" title="View Pesan"><button class="btn btn-info btn-xs"><i class="fa fa-eye" aria-hidden="true"></i> View</button></a>
                                            <a href="{{ url('/admin/pesan/' . $item->id . '/edit') }}" title="Edit Pesan"><button class="btn btn-primary btn-xs"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button></a>
                                            {!! Form::open([
                                                'method'=>'DELETE',
                                                'url' => ['/admin/pesan', $item->id],
                                                'style' => 'display:inline'
                                            ]) !!}
                                                {!! Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> Delete', array(
                                                        'type' => 'submit',
                                                        'class' => 'btn btn-danger btn-xs',
                                                        'title' => 'Delete Pesan',
                                                        'onclick'=>'return confirm("Confirm delete?")'
                                                )) !!}
                                            {!! Form::close() !!}
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            <div class="pagination-wrapper"> {!! $pesan->appends(['search' => Request::get('search')])->render() !!} </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
