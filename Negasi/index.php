<?php
	session_start();

	
?>

<!DOCTYPE html>
<html lang="en" data-ng-app="themeonApp">
<head>
	<title>Daniel</title>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/global.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/settings.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/simple-line-icons.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/material-design-iconic-font.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/layers.css">
	<link rel="stylesheet" type="text/css" href="css/navigation.css">
	<link rel="stylesheet" type="text/css" href="css/responsive.css" media="screen">
	<link rel="stylesheet" type="text/less" href="css/skin.less" media="screen">
</head>
<body>
	<!--Loader Start-->
	<div id="loading">
		<div id="loading-center">
			<div id="loading-center-absolute">
				<div class="object" id="object_four"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_one"></div>
			</div>
		</div>
	</div>
		<!--Loader End-->
	<div id="wrapper" class="blog gallery gallery-four">
		<!--header star-->
		<header id="header" class="header header-one">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-1">
					<!--	Logo -->
					</div>
					<div class="col-xs-12 col-sm-11 nav-mob">
						<nav class="navbar">
							<div class="navbar-header">
								<button type="button" class="navbar-togle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
									<span class="sr-only">Toggle Navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav">
									<li class="active has-sub-anchorlink">
										<a href="#">Home</a>
									</li>
									<li class="has-sub anchorlink">
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
		<!--Header Section Ends-->
		<!--Baner Starts Here-->
		<div class="banner">
			<div class="small-banner-text">
				<span class="icon-layers icons"> </span>
				<h1><storng>Pengolahan Citra Digital</storng></h1>
				<ul>
					<li>
						<a href="">Gambar Normal</a>
					</li>
					<li>
						<a href="">Negasi</a>
					</li>
				</ul>				
			</div>
		</div>
		<!--End Banner -->
		<div class="section-content">
			<section class="get-in-touch">
					<div class=container>
						<div class="form-area-wrap">
							<div class="heading">
								<h2>UPLOAD <strong> FOTO</strong></h2>
							</div>
							<div class="form-area"> 
								<form action="action.php" method="post" enctype="multipart/form-data" class="contact-form">
								
									<div class="col-xs-12 col-sm-6">
										<div class="necessary-info">
											<input type="file" name="myfile" />
											<input name="MAX_FILE_SIZE" type="hidden" id="MAX_FILE_SIZE" size="30000" />
										</div>
									</div>
									<div class="col-xs-12 col-sm-6">
										<div class="submit-btn">
											<?php if (empty($_SESSION['file'])){
														?>
														<input type="submit" value="Upload" class="btn comment-submit qoute-sub"/>
											<?php
												}else{ ?>

													<a href="hapus.php" class="btn comment-submit qoute-sub">Hapus</a>
												<?php
												}
												?>											
										</div>
									</div>
									<div class="col-xs-12 col-sm-3">
										<div class="submit-btn">
											
										</div>
									</div>
								</form>

								<!--
								<form action="action.php" method="post"  class="contact-form" >
									<div class="col-xs-12 col-sm-6">
										<div class="necessary-info">
											<input type="file" name="myfile" class="input-foto" />
											<input name="MAX_FILE_SIZE" type="hidden" id="MAX_FILE_SIZE" size="30000" />
										</div>
									</div>
									<div class="col-xs-12 col-sm-6">
										<div class="submit-btn">
											<input type="submit" value="Upload" class="btn comment-submit qoute-sub"/>
										</div>
									</div>
								</form>
								
								<div style="display: none" id="contactSuccess">
									<span>Hey! Thanks for reaching out. I will get back to you soon</span>
								</div> -->
							</div>
						</div>
					</div>
				</section>
			<section id="lates-work">
				<div class="container">
					<ul class="nav nav-tabs">
						<li class="all">
							<a href="javascript:void(0)">All</a>
						</li>
						<li class="brand">
							<a href="javascript:void(0)">Normal</a>
						</li>
						<li class="photoshop">
							<a href="javascript:void(0)">Negasi</a>
						</li>
					</ul>
					<ul class="thumb-wrap clearfix">
						<li class="profile-des-wrap all main-item brand">
							<figure>
								<?php if (empty($_SESSION['file'])){
														?>
														<img src="images/imgb01.jpg" alt="#">
											<?php
												}else{ ?>

													<img src="upload/<?php echo $_SESSION ['file']?>" alt="#">
												<?php
												}
												?>	
							</figure>
							<div class="author-wrap">
								<div class="author">
									<?php if (empty($_SESSION['file'])){
														?>
														<h4>Pilih Gambar </h4>
														<span>Gambar Normal</span>
											<?php
												}else{ ?>

													<h4><?php echo $_SESSION['file'] ?></h4>
													<span>Gambar Normal</span>
												<?php
												}
												?>	
								</div>
								<div class="arrow-right"></div>
								<a href="gallery-two"><i class="icon-arrow-right-circle"></i></a>
							</div>
						</li>
						<li class="profile-des-wrap main-item all photoshop">
							<figure>
								<?php if (empty($_SESSION['file'])){
														?>
														<img src="images/imgb02.jpg" alt="#">
											<?php
												}else{ ?>

													<img src="negasi/<?php echo $_SESSION ['file']?>" alt="#">
												<?php
												}
												?>	
							</figure>
							<div class="author-wrap">
								<div class="author">
									<?php if (empty($_SESSION['file'])){
														?>
														<h4>Proses Gambar </h4>
														<span>Gambar Negasi</span>
											<?php
												}else{ ?>

													<h4><?php echo $_SESSION['file'] ?></h4>
													<span>Gambar Negasi</span>
												<?php
												}
												?>	
									
								</div> 
								<div class="arrow-right"></div>
								<a href="#">
									<i class="icon-arrow-right-circle">
									</i>
								</a>
							</div>
						</li>
						<li class="profile-des-wrap main-item all photoshop">
							<figure>
								
							</figure>
							<div class="author-wrap">
								<div class="author">
									<h4>Ruber Stam</h4>
									<span>Branding</span>
								</div> 
								<div class="arrow-right"></div>
								<a href="gallery-two.html">
									<i class="icon-arrow-right-circle">
									</i>
								</a>
							</div>
						</li>
					</ul>
					<form action="negasi.php" method="post" class="contact-form">
						<input type="hidden" name="gambar" value="<?php echo $_SESSION['file']?>"/>
								<?php if (empty($_SESSION['file'])){
										?>
								<input type="submit" value="negasi" class="btn comment-submit qoute-sub"/>
								
									<?php
										}else{ ?>
										<input type="submit" value="Negasi" class="btn comment-submit qoute-sub"/>
										
									<?php
										}
						?>											
					
					</form>
				</div>
			</section>
			
			<section id="lates-work">
				<div class="container">
				<?php 
					error_reporting(0);
					$dirpic = "upload/";
					$file = $_SESSION['file'];
					$source_file = $dirpic.$file;
					$images 		= imagecreatefromjpeg($source_file); 
					$image_width 	= imagesx($images);
					$image_height 	= imagesy($images);
					$total_xy 		= $image_width*$image_height;
					$temp_r 		= array();
					$temp_g 		= array();
					$temp_b 		= array();

					for($y=0;$y<$image_height;$y++){
						for($x=0;$x<$image_width;$x++){
							$rgb = imagecolorat($images, $x, $y); 
							$r = ($rgb >> 16) & 0xFF;
							$g = ($rgb >> 8) & 0xFF;
							$b = $rgb & 0xFF;
					
					$temp_r[$r] += $r/$total_xy;
					$temp_g[$g] += $g/$total_xy;
					$temp_b[$b] += $b/$total_xy;
				}
			}

			$max_r = 0;
			$max_g = 0;
			$max_b = 0;
			for($i=0;$i<255;$i++){
				if($temp_r[$i]>$max_r){
					$max_r = number_format($temp_r[$i],2,".",",");
				}
				if($temp_g[$i]>$max_g){
					$max_g = number_format($temp_g[$i],2,".",",");
				}
				if($temp_b[$i]>$max_b){
					$max_b = number_format($temp_b[$i],2,".",",");
				}
			}

			print '<h2>Histogram Gambar</h2><hr/><div class="clearr"></div><p></p>';
			print '<div class="histo"><div>RED</div>';
			for($i=0;$i<255;$i++){
				$h = ($temp_r[$i]/$max_r)*256;
				print '<img src="r.jpg" width="1" height="'.$h.'"/>';
			}
			print '</div>';

			print '<div class="histo"><div>GREEN</div>';
			for($i=0;$i<255;$i++){
				$h = ($temp_g[$i]/$max_g)*256;
				print '<img src="g.jpg" width="1" height="'.$h.'"/>';
			}
			print '</div>';

			print '<div class="histo"><div>BLUE</div>';
			for($i=0;$i<255;$i++){
				$h = ($temp_b[$i]/$max_b)*256;
				print '<img src="b.jpg" width="1" height="'.$h.'"/>';
			}
			print '</div><br clear="both"/>';
		?>
					</div>
			</section>
			<section id="lates-work">
			 <div class="container">
				<?php 
					error_reporting(0);
					$dirpic = "negasi/";
					$file = $_SESSION['file'];
					$source_file = $dirpic.$file;
					$images 		= imagecreatefromjpeg($source_file); 
					$image_width 	= imagesx($images);
					$image_height 	= imagesy($images);
					$total_xy 		= $image_width*$image_height;
					$temp_r 		= array();
					$temp_g 		= array();
					$temp_b 		= array();

					for($y=0;$y<$image_height;$y++){
						for($x=0;$x<$image_width;$x++){
							$rgb = imagecolorat($images, $x, $y); 
							$r = ($rgb >> 16) & 0xFF;
							$g = ($rgb >> 8) & 0xFF;
							$b = $rgb & 0xFF;
					
					$temp_r[$r] += $r/$total_xy;
					$temp_g[$g] += $g/$total_xy;
					$temp_b[$b] += $b/$total_xy;
				}
			}

			$max_r = 0;
			$max_g = 0;
			$max_b = 0;
			for($i=0;$i<255;$i++){
				if($temp_r[$i]>$max_r){
					$max_r = number_format($temp_r[$i],2,".",",");
				}
				if($temp_g[$i]>$max_g){
					$max_g = number_format($temp_g[$i],2,".",",");
				}
				if($temp_b[$i]>$max_b){
					$max_b = number_format($temp_b[$i],2,".",",");
				}
			}

			print '<h2>Histogram Gambar Negasi</h2><hr/><div class="clearr"></div><p></p>';
			print '<div class="histo"><div>RED</div>';
			for($i=0;$i<255;$i++){
				$h = ($temp_r[$i]/$max_r)*256;
				print '<img src="r.jpg" width="1" height="'.$h.'"/>';
			}
			print '</div>';

			print '<div class="histo"><div>GREEN</div>';
			for($i=0;$i<255;$i++){
				$h = ($temp_g[$i]/$max_g)*256;
				print '<img src="g.jpg" width="1" height="'.$h.'"/>';
			}
			print '</div>';

			print '<div class="histo"><div>BLUE</div>';
			for($i=0;$i<255;$i++){
				$h = ($temp_b[$i]/$max_b)*256;
				print '<img src="b.jpg" width="1" height="'.$h.'"/>';
			}
			print '</div><br clear="both"/>';
		?>
			</div>
			</section>
		</div>
		<!--Section Content Ends Here-->
		<!--Footer Section Start-->
		<footer id="footer" class="footer-one">
			<div class="container">
				<div class="reach-top-icon">
					<a href="#" class="top-large-arrow">&nbsp;</a>
					<a href="#" class="top-small-arrow">&nbsp;</a>
				</div>
				<!--
				<div class="social-media-wrap">
					<a href="#"><i class="fa fa-twitter"></i> </a>
					<a href="#"><i class="fa fa-facebook"></i> </a>
					<a href="#"><i class="fa fa-instagram"></i> </a>
					<a href="#"><i class="fa fa-pinterest-p"></i> </a>
					<a href="#"><i class="fa fa-behance"></i></a>
				</div>
				-->
				<div class="copy-right">
					Copyright &copy;2016. All Right Reserved
				</div>
			</div>
		</footer>
		<!--footer end-->
	</div>
	<!-- Script -->
	<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/less.js"></script>
	<script type="text/javascript" src="js/angular.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/isotope.pkgd.min.js"></script>

	<!-- revolution Js -->
	<!-- RS5.0 Core JS Files -->
	<script type="text/javascript" src="js/jquery.themepunch.tools.min.js"></script>
	<script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>
	<script type="text/javascript" src="js/jquery.revolution.js"></script>
	<!-- revolution Js-->
	<script type="text/javascript" src="js/jquery.flexslider.js"></script>
	<script type="text/javascript" src="js/count.js"></script>
	<script type="text/javascript" src="js/site.js"></script>

	<!-- Switcher Js -->
	<script src="js/theme-option/style-switcher/assets/js/style.switcher.js"></script>
	<script src="js/theme-option/style-switcher/assets/js/jquery.cookie.js"></script>
		<!-- Switcher Js -->
</body>
</html>
