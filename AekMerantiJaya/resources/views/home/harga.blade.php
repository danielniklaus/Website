@extends('home.app')

@section('content')
<div class="banner page_head">
	
</div>

<div class="short_codes">
<div class="container">
		<section id="tables">
          <div class="page-header">
            <h3 class="bars">Jenis Paket Dan Harga</h3>
            <!-- <div class="col-sm-12 col-md-12 col-lg-12 mb-60">
              <div class="alert alert-success alert-dismissable">
                <button aria-hidden="true" data-dismiss="alert" class="close" type="button"> × </button>
                Success! Well done its submitted. </div>

            
            </div> -->
            <div class="flash-message">
            @foreach (['danger', 'warning', 'success', 'info'] as $msg)
              @if(Session::has('alert-' . $msg))

              <p class="alert alert-{{ $msg }}">{{ Session::get('alert-' . $msg) }} <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></p>
              @endif
            @endforeach
          </div>
          </div>
          <div class="bs-docs-example">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Atap</th>
                  <th>Canal</th>
                  <th>Harga Rabung 1</th>
                  <th>Harga Rabung 5</th>
                  <th>Keterangan</th>
                  <th>Pesan</th>
                </tr>
              </thead>
              <tbody>
                @foreach($harga as $item)
                    <tr>
                                        <td>{{ $item->id }}</td>
                                       
                                        <td>{{ $item->jenis }} {{$item->ukuran}}</td><td>{{ $item->canal }} {{ $item->reng }}</td><td>{{ $item->hargaRabung1 }}</td>
                                        <td>{{ $item->hargaRabung5 }} </td>
                                        <td>{{ $item->keteranga }} </td>
                                        <td>
                                           <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" value="">Beli</button>
                                
                                        </td>
                                        
                                    </tr>
                                @endforeach
                
              </tbody>
              
            </table>
          </div>
		</section>
     <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">From Pemesanan</h4>
          </div>
          <div class="modal-body">
          {!! Form::open(['url' => '/admin/pesan', 'class' => 'form-horizontal', 'files' => true]) !!}

                        @include ('admin.pesan.form')

                        {!! Form::close() !!}

          </div>
          
        </div>
      </div>
    </div>


	</div>
</div>
</div>

@endsection