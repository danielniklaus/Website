<?php
	session_start();
?>

<!DOCTYPE html>
<html class="not-ie no-js" lang="en">  <!--<![endif]-->
<head>
	
	<!-- Google Web Fonts
  ================================================== -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:100,300,300italic,400,500%7cCourgette%7cRaleway:200,300,400,500,600,700,800' rel='stylesheet' type='text/css'>
	
	<!-- Basic Page Needs
  ================================================== -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<title>Noise Reduction Image Processing Zanry</title>	
	
	<meta name="description" content="">
	<meta name="author" content="">

	<!-- Favicons
	================================================== -->
	<link rel="shortcut icon" href="images/favicon.png">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">	

	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<!-- CSS
  ================================================== -->
    <link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="css/grid.css" />
	<link rel="stylesheet" href="css/layout.css" />
	<link rel="stylesheet" href="css/fontello.css" />
	<link rel="stylesheet" href="css/animation.css" />
	<link rel="stylesheet" href="css/animate.css" />
	
	<link rel="stylesheet" href="js/magnific-popup/magnific-popup.css" />
	
    <link rel="stylesheet" href="js/owl-carousel/owl.carousel.css" />
    <link rel="stylesheet" href="js/owl-carousel/owl.theme.css" />
    <link rel="stylesheet" href="js/owl-carousel/owl.transitions.css" />
	
	<!-- HTML5 Shiv
	================================================== -->
	<script src="js/jquery.modernizr.js"></script>
	<!--- Pengolahan CITRA ======= -->
		<title>Noise Reduction Zanry  </title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>		
	<link type="text/css" href="css/cupertino/jquery-ui-1.8.18.custom.css" rel="stylesheet" />	
	<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
	<script language="javascript" src="js/FusionCharts.js"></script>

<script type="text/javascript">
	var active_page = "histo";
	var active_foto = "<?php echo $_SESSION['file'];?>";	
	$(document).ready(function(){
		$('.foto_histo').click(function(){
			$(".foto_histo").addClass("fade_out");
			$(this).removeClass("fade_out");
			active_foto = $(this).attr("src");
		});
		
		$(".mn_menu").click(function(){
			$(".mn_menu").removeClass("selected");
			$(this).addClass("selected");
			active_page = $(this).attr("rel");
			if(active_foto!=""){
				$.ajax({
					type	: "POST",
					url		: active_page+".php",
					data	: "gambar="+active_foto,
					cache	: false,
					success	: function(r){
						$("#status_histo").html(r);
					}
				});
			}else{
				$.ajax({
					type	: "POST",
					url		: active_page+".php",
					cache	: false,
					success	: function(r){
						$("#status_histo").html(r);
					}
				});
			}
		});
	});
	</script>

	<!--- Pengolahan CITRA ======= -->
	
</head>

<body class="header-type-in animated">
	
	
<!-- - - - - - - - - - - - - - Wrapper - - - - - - - - - - - - - - - - -->

	
<div id="wrapper">
	
	
	<!-- - - - - - - - - - - - - Mobile Menu - - - - - - - - - - - - - - -->	
	
	
	<nav id="mobile-advanced" class="mobile-advanced"></nav>
	
	
	<!-- - - - - - - - - - - - end Mobile Menu - - - - - - - - - - - - - -->

	<!-- - - - - - - - - - - - - - Header - - - - - - - - - - - - - - - - -->	


	<header id="header" class="header-shrink-fixed logo-bluth">

		<div class="container">

			<div class="row">

				<div class="col-xs-12">

					<div class="header-in">

						<h1 id="logo"><a href="#">Noise Reduction</a></h1>

						<nav id="navigation" class="navigation">

                            <ul>
                                <li class="current-menu-item"><a href="index.php">Home</a><li>
                                <li><a href="profil.php">Profil</a>
 
                            </ul>							
						</nav><!--/ #navigation-->

					</div><!--/ .header-in-->		

				</div>

			</div><!--/ .row-->

		</div><!--/ .container-->

	</header><!--/ #header-->


	<!-- - - - - - - - - - - - - end Header - - - - - - - - - - - - - - - -->


	<!-- - - - - - - - - - - - - - Content - - - - - - - - - - - - - - - - -->


	<div id="content">
		
		<section class="section padding-top-off">
			
			<div class="container">

				<div class="row">

					<div class="col-sm-12">
						<header class="page-header">
							<b>
							<h2>Pengolahan Citra Digital</h2>
							<h2>Noise Reduction Pada Citra Digital</h2></b>
						</header><!--/ .page-header-->		
					</div>

				</div><!--/ .row-->
				<div class="row">
					<div class="col-sm-12">
						<div class="form-area"> 
							<form action="action.php" method="post" enctype="multipart/form-data" class="#">
								
								<input type="file" name="myfile" class="input-block" />
								<input name="MAX_FILE_SIZE" type="hidden" id="MAX_FILE_SIZE" size="90000000" />
									<div class="col-xs-12 col-sm-6">
										<div class="button-overflow">
											<?php if (empty($_SESSION['file'])){
														?>
														<input type="submit" value="Upload" class="button orange middle"/>
											<?php
												}else{ ?>

													<a href="hapus.php" class="button orange middle">Hapus</a>
													
												<?php
												}
												?>											
										</div>
									</div>
							</form>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<div class="form-area"> 
												
							<form action="add_noise.php" method="post" enctype="multipart/form-data" class="#">
								<input type="hidden" name="gambar" value="<?php echo $_SESSION['file']?>"/>
										<?php if (empty($_SESSION['file'])){
												?>
												
										<!--<input type="submit" value="negasi" class="btn comment-submit qoute-sub"/> -->
										
											<?php
												}else{ ?>
													
													
												<input type="submit" value="Tambah Noise" class="button orange middle"/>
												
											<?php
												}
								?>											
					
							</form>
						
							
						</div>
					</div>
				</div>

				<div class="row" style="text-align: center;">
					<div class="container" >
						<div class="col-xs-12">
							<header class="page-header">
							<div class="project-single-entry" >
								<?php if (empty($_SESSION['file'])){
														?>
														<!--Image Kosong -->
											<?php
												}else{ ?>

													<div class="col-xs-6">
														<div class="item">
															<a class="slide-image popup-link plus-icon" href="<?php echo $_SESSION['file'];?>">
																<img src="<?php echo $_SESSION['file'];?>" alt="" />
															</a>
														</div>
													</div>
													<div class="col-xs-6">
														<div class="item">
															<a class="slide-image popup-link plus-icon" href="noise<?php echo $_SESSION['file'];?>">
																<img src="noise<?php echo $_SESSION['file'];?>" alt="" />
															</a>
														</div>
													</div>
												<?php
												}
												?>	 
								
							</div><!--/ .project-single-entry-->
							</header>
						</div>
					</div>
				</div><!--/ .row-->
				
				<div class="row">
					<div class="col">
						<div class="col-sm-12">
							<h3>Pengaturan Value Nilai Noise Reduction</h3>
							<hr/>
							<div class="clear"></div>
								Tambahkan tingkat Penghapusan Noise :
							<input type="text" id="amount" readonly style="border:0; color:#f6931f; background:transparent; font-weight:bold;" />
							<div style="padding-left:3px; padding-right:3px; padding-top:5px;">
								<div id="slider"></div>
								<p>&nbsp;</p>
							</div>
							
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<div class="col-sm-6">
							<h3>Hasil Noise Reduction Gaussian Filter</h3>
							<hr/>
							
							<div class="item">
							<div id="hasil_sharp" class="slide-image popup-link plus-icon"></div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="col-sm-6">
							<h3>Hasil Noise Reduction Modus Filter</h3>
							<hr/>
							<div class="item">
                                <div id="modus_filter" class="slide-image popup-link plus-icon"></div>	
							</div>
						</div>
					</div>
				</div>
				</br>
				<input type="button" id="btn" value="Hitung MSE dan PNSR" class="button orange middle"/>
				<div class="row">
					<div class="col">
						<div class="col-sm-6">
							<h3>Perhitungan MSE dan PSNR Gaussian Filter</h3>
							<hr/>
							
							<div class="item">
							<div id="gaussian_mse" class="popup-link plus-icon"></div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="col-sm-6">
							<h3>Perhitungan MSE dan PSNR Modus Filter</h3>
							<hr/>
							<div class="item">
                                <div id="modus_mse" class="popup-link plus-icon"></div>	
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">

							<h3 style="text-align:center;">Histogram Gambar Asli </h3>
							<div id="content" style="text-align:center;">
								<div id="chart1div" style= "margin: 0 auto; width:100%; text-align:center; height: 300px">
									<img src="loading.gif" style="margin-top:90px">
								</div>
								<script language="javascript" type="text/javascript">
									var chart1 = new FusionCharts("FCF_MSLine.swf", "sampleChart", "850", "300");
									chart1.setDataURL("xml_histo.php?gambar=<?php echo $_SESSION["file"]; ?>");	   
									chart1.render("chart1div");
								</script>
							</div>
					</div>
				</div>
				<div class="row">			
					<div class="col-sm-12">
							<h3 style="text-align:center;">Histogram Gambar Noise Reduction Gaussian  </h3>
							<div id="content">
								<?php 
								?>
								<div id="chart1div1" style= "margin: 0 auto; width:100%; text-align:center; height: 300px">
									<img src="loading.gif" style="margin-top:90px">
								</div>
								<script language="javascript" type="text/javascript">
									var chart1 = new FusionCharts("FCF_MSLine.swf", "sampleChart", "850", "300");
									chart1.setDataURL("xml_histo1.php?gambar=<?php echo 'noise/1noise'.$_SESSION["file"]; ?>");	   
									chart1.render("chart1div1");
								</script>
							</div>
					</div>
				</div>	
				<div class="row">			
					<div class="col-sm-12">
							<h3 style="text-align:center;">Histogram Gambar Noise Reduction Modus  </h3>
							<div id="content">
								<?php 
								?>
								<div id="chart1div2" style= "margin: 0 auto; width:100%; text-align:center; height: 300px">
									<img src="loading.gif" style="margin-top:90px">
								</div>
								<script language="javascript" type="text/javascript">
									var chart1 = new FusionCharts("FCF_MSLine.swf", "sampleChart", "850", "300");
									chart1.setDataURL("xml_histo2.php?gambar=<?php echo 'noise/modus/1noise'.$_SESSION["file"]; ?>");	   
									chart1.render("chart1div2");
								</script>
							</div>
					</div>
				</div>

			</div><!--/ .container-->	
			
		</section><!--/ .section-->
				
	</div><!--/ #content-->
	

	<!-- - - - - - - - - - - - - end Content - - - - - - - - - - - - - - - -->


	<!-- - - - - - - - - - - - - Bottom Footer - - - - - - - - - - - - - - - -->


	<footer class="bottom-footer">

		<div class="container">

			<div class="row">

				<div class="col-xs-12">

					

						<div class="copyright" style="font-size:20px;"> <center>
							Copyright ©<a href="profil.php">Zanry</a><br>-Teknik Informatika STT-<br>2016</center>
						</div><!--/ .cppyright-->

				

					

				</div>

			</div><!--/ .row-->

		</div><!--/ .container-->

	</footer><!--/ .bottom-footer-->	


	<!-- - - - - - - - - - - - end Bottom Footer - - - - - - - - - - - - - - -->

	
</div><!--/ #wrapper-->


<!-- - - - - - - - - - - - end Wrapper - - - - - - - - - - - - - - -->


<script src="../../ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<script src="js/jquery.selectivizr.min.js"></script>
<![endif]-->
<script src="js/plugins.js"></script>
<script src="js/plugins/min/jquery.mixitup-min.js"></script>
<script src="js/owl-carousel/owl.carousel.js"></script>
<script src="js/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="js/config.js"></script>
<script src="js/custom.js"></script>
<!-- PENGOLAHAN CITRA -->
<script>
$(function() {
	$("#slider").slider({
		value:1,
		min: 1,
		max: 100,
		slide: function(event, ui) {
			$("#amount").val(ui.value);
		},
		stop: function(event, ui) {
			if(active_foto!=""){
    			$("#hasil_sharp").html("computing...");
    				$.ajax({
    					type	: "POST",
    					url		: "img.noise.php",
    					data	: "gambar="+active_foto+"&ukuran="+ui.value,
    					cache	: false,
    					success	: function(r){
    						$("#hasil_sharp").html(r);
    					}
    				});
                $("#modus_filter").html("computing...");
                    $.ajax({
                        type    : "POST",
                        url     : "img.modus.php",
                        data    : "gambar="+active_foto+"&ukuran="+ui.value,
                        cache   : false,
                        success : function(r){
                            $("#modus_filter").html(r);
                        }
                    });
              

			}else{
				alert("Maaf, silahkan terlebih dahulu pilih foto yang ingin Anda proses.");
			}
		}
	});
	$("#amount").val($("#slider").slider("value"));
});
</script>
 <script type="text/javascript">
            $('document').ready(function() {
                $('#btn').click(function() {
                	$("#gaussian_mse").html("computing...");
	                    $.ajax({
	                        type    : "POST",
	                        url     : "mse_gaussian.php",
	                        data    : "gambar="+active_foto,
	                        cache   : false,
	                        success : function(r){
	                            $("#gaussian_mse").html(r);
	                        }
	                    });
	               	$("#modus_mse").html("computing...");
	                    $.ajax({
	                        type    : "POST",
	                        url     : "mse_modus.php",
	                        data    : "gambar="+active_foto,
	                        cache   : false,
	                        success : function(r){
	                            $("#modus_mse").html(r);
	                        }
	                    });
	                    
	            });
            });
        </script>

<!--Pengolah CITRA -->      
</body>

<!-- Mirrored from html.webtemplatemasters.com/engorgio/single-portfolio-gallery.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 01 Mar 2016 10:20:09 GMT -->
</html>
