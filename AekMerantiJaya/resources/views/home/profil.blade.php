@extends('home.app')

@section('content')
<div class="banner page_head">
	
</div>
<!-- //banner -->
<!-- contact -->
<div class="treatments">
	<div class="container">
<!-- +"id": 1
  +"nama": "CV. AEK MARANTI JAYA"
  +"jenis": "General Contractor"
  +"alamat": "Jl.Selam III Mandala by pass No :25"
  +"keterangan": "Merupakan perusahaan swasta murni yang bergerak di bidang perdagangan umum berdasarkan kontrak,penyedia barang dan jasa yang bekerja sama dengan perusahaan – pe ▶"
  +"email": "ikhsan2611@gmail.com"
  +"web": "www.cv_aekmarantijaya.com"
  +"created_at": "2017-07-08 00:13:33"
  +"updated_at": "2017-07-08 00:13:33"  -->

	<h3>{{ $profil->nama }}</h3>
		<div class="grid_3 grid_4 ">
		     <h3 class="bars">{{ $profil->jenis }}</h3>
		    <div class="bs-example">
				<div class="mb-60">
						<p>{{ $profil->keterangan }}</p>
				</div>
			</div>
	    </div>
	</div>
</div>


@endsection