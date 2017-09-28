@extends('home.app')

@section('content')
<div class="banner">
	<div class="container">
		<div class="banner-info">
			<div class="col-md-7 banner-left wow flipInY" data-wow-duration="1.5s" data-wow-delay="0s">
				<h3>Selamat Datang <span> Aek Meranti Jaya </span> Kontraktor Barang Dan Jasa</h3>
				<p> Menyediakan Pengadaan & Pemasangan Rangka Atap Baja Ringan</p>
				<a class="hvr-outline-out scroll" href="#about">See More About Us</a>
			</div>
			<div class="col-md-5 banner-right wow flipInY" data-wow-duration="1.5s" data-wow-delay="0s">
					<div class="ban-icon ban-col1">
						<img src="images/icon1.png" alt="" />
					</div>
					<div class="ban-icon ban-col2">
						<img src="images/icon2.png" alt="" />
					</div>
					<div class="ban-icon3">
					<img src="images/icon3.png" alt="" />
					</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>
<!-- //banner -->
<!-- banner-bottom -->
<!-- //banner-bottom -->
<!-- services -->
<div class="main_ser">
	<div class="container">
		<div class="col-md-7 main_ser_one wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
			<h3>Inovasi</h3>
			<p> Inovasi  terbaru kami dalam pemasangan baja atap ringan. Perpaaduan Harmonisan dan Dinamis yang Mengerti Kebutuhan Anda : </p>
			<div class="cont-grids">
				<div class="col-sm-6 cont-grid-one">
					<div class="cont-grid-left wel-grid">
						<div class="btm-clr4">
							<figure class="icon">
								<img src="images/icon1.png" alt=" " />
							</figure>
						</div>
					</div>
					<div class="cont-grid-right">
						<h4>Mutu Terjamin</h4>
						<p> Mutu baja berkekuatan tinggi.</p>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="col-sm-6 cont-grid-one">
					<div class="cont-grid-left wel-grid">
						<div class="btm-clr4">
							<figure class="icon">
								<img src="images/icon2.png" alt=" " />
							</figure>
						</div>
					</div>
					<div class="cont-grid-right">
						<h4>Praktis </h4>
						<p> Praktis (Mudah dalam pemasangan) dan ekonomis</p>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="col-sm-6 cont-grid-one yes_magr">
					<div class="cont-grid-left wel-grid">
						<div class="btm-clr4">
							<figure class="icon">
								<img src="images/icon3.png" alt=" " />
							</figure>
						</div>
					</div>
					<div class="cont-grid-right">
						<h4>Tahan Lama</h4>
						<p> Anti Karat, Anti Rayap, dan minimun perawatan.</p>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="col-sm-6 cont-grid-one yes_magr">
					<div class="cont-grid-left wel-grid">
						<div class="btm-clr4">
							<figure class="icon">
								<img src="images/icon1.png" alt=" " />
							</figure>
						</div>
					</div>
					<div class="cont-grid-right">
						<h4>Ramah Lingkungan</h4>
						<p> dengan bobot ringan dan ramah lingkungan.</p>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="col-md-5 main_ser_two wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
			<img class="img-responsive" src="images/image1.jpg" alt=" "/>
			<h4>Atap Baja Ringan</h4>
				
				<script>
							jQuery(document).ready(function() {
								function close_accordion_section() {
									jQuery('.accordion .accordion-section-title').removeClass('active');
									jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
								}

								jQuery('.accordion-section-title').click(function(e) {
									// Grab current anchor value
									var currentAttrValue = jQuery(this).attr('href');

									if(jQuery(e.target).is('.active')) {
										close_accordion_section();
									}else {
										close_accordion_section();

										// Add active class to section title
										jQuery(this).addClass('active');
										// Open up the hidden content panel
										jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
									}

									e.preventDefault();
								});
							});
				</script>

		</div>
		<div class="clearfix"></div>
	</div>
</div>
<!-- //services -->
<!-- treatments -->

@endsection