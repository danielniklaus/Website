@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            @include('admin.sidebar')

            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading">Harga</div>
                    <div class="panel-body">
                        <a href="{{ url('/admin/harga/create') }}" class="btn btn-success btn-sm" title="Add New Harga">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add New
                        </a>

                        

                        <br/>
                        <br/>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>ID</th><th>Atap</th><th>Canal</th><th>HargaRabung1</th>
                                        <th>Keterangan</th>    
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @foreach($harga as $item)
                                    <tr>
                                        <td>{{ $item->id }}</td>
                                       
                                        <td>{{ $item->jenis }} {{$item->ukuran}}</td><td>{{ $item->canal }} {{ $item->reng }}</td><td>{{ $item->hargaRabung1 }}</td>
                                        <td>{{ $item->keteranga }} </td>
                                        <td>
                                            <a href="{{ url('/admin/harga/' . $item->id) }}" title="View Harga"><button class="btn btn-info btn-xs"><i class="fa fa-eye" aria-hidden="true"></i> View</button></a>
                                            <a href="{{ url('/admin/harga/' . $item->id . '/edit') }}" title="Edit Harga"><button class="btn btn-primary btn-xs"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button></a>
                                            {!! Form::open([
                                                'method'=>'DELETE',
                                                'url' => ['/admin/harga', $item->id],
                                                'style' => 'display:inline'
                                            ]) !!}
                                                {!! Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> Delete', array(
                                                        'type' => 'submit',
                                                        'class' => 'btn btn-danger btn-xs',
                                                        'title' => 'Delete Harga',
                                                        'onclick'=>'return confirm("Confirm delete?")'
                                                )) !!}
                                            {!! Form::close() !!}
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            <div class="pagination-wrapper"> {!! $harga->appends(['search' => Request::get('search')])->render() !!} </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
