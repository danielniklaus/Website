@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            @include('admin.sidebar')

            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading">Pesan {{ $pesan->id }}</div>
                    <div class="panel-body">

                        <a href="{{ url('/admin/pesan') }}" title="Back"><button class="btn btn-warning btn-xs"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button></a>
                        <a href="{{ url('/admin/pesan/' . $pesan->id . '/edit') }}" title="Edit Pesan"><button class="btn btn-primary btn-xs"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button></a>
                        {!! Form::open([
                            'method'=>'DELETE',
                            'url' => ['admin/pesan', $pesan->id],
                            'style' => 'display:inline'
                        ]) !!}
                            {!! Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> Delete', array(
                                    'type' => 'submit',
                                    'class' => 'btn btn-danger btn-xs',
                                    'title' => 'Delete Pesan',
                                    'onclick'=>'return confirm("Confirm delete?")'
                            ))!!}
                        {!! Form::close() !!}
                        <br/>
                        <br/>

                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <th>ID</th><td>{{ $pesan->id }}</td>
                                    </tr>
                                    <tr><th> Paket Harga </th><td>Paket {{ $pesan->harga }} </td></tr><tr><th> Nama Pemesan </th><td> {{ $pesan->nama_pemesan }} </td></tr><tr><th> Alamat Pemesan </th><td> {{ $pesan->alamat_pemesan }} </td></tr><tr><th>Nomor Telepon</th><td>{{$pesan->nomor_pemesan}}</td></tr><tr><th>Catatan</th><td>{{ $pesan->note }} </td></tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
