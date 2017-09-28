@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            @include('admin.sidebar')

            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading">Harga {{ $harga->id }}</div>
                    <div class="panel-body">

                        <a href="{{ url('/admin/harga') }}" title="Back"><button class="btn btn-warning btn-xs"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button></a>
                        <a href="{{ url('/admin/harga/' . $harga->id . '/edit') }}" title="Edit Harga"><button class="btn btn-primary btn-xs"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button></a>
                        {!! Form::open([
                            'method'=>'DELETE',
                            'url' => ['admin/harga', $harga->id],
                            'style' => 'display:inline'
                        ]) !!}
                            {!! Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> Delete', array(
                                    'type' => 'submit',
                                    'class' => 'btn btn-danger btn-xs',
                                    'title' => 'Delete Harga',
                                    'onclick'=>'return confirm("Confirm delete?")'
                            ))!!}
                        {!! Form::close() !!}
                        <br/>
                        <br/>

                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <th>ID</th><td>{{ $harga->id }}</td>
                                    </tr>
                                    <tr><th> Atap </th><td> {{ 
                                    $atap->jenis }} {{ 
                                    $atap->ukuran }} </td></tr><tr><th> Canal </th><td> {{ $canal->canal }} {{ $canal->reng }} </td></tr><tr><th> HargaRabung1 </th><td> {{ $harga->hargaRabung1 }} </td></tr>
                                    <tr><th> HargaRabung 5 </th><td> {{ $harga->hargaRabung5 }} </td></tr>
                                    <tr><th>Keterangan</th><td>{{ $harga->keteranga }}</td></tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
