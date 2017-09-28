<?php
	session_start();

	
?>

<!DOCTYPE html>
<html lang="en" data-ng-app="themeonApp">
<head>
	<title>Jerry</title>
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
	<div id="wrapper" class="blog gallery gallery-four">
		<!--header star-->
		<header id="header" class="header header-one">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-1">
						Logo
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
										<a data-id="#home-sec">Home</a>
									</li>
									<li class="anchorlink">
										<a data-id="#our-service">Service</a>
									</li>
									<li class="has-sub anchorlink">
									<a data-id="#lates-work">Profil</a>
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
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Lates Work</a>
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
									<div class="col-xs-12 col-sm-3">
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
								-->
								<div style="display: none" id="contactSuccess">
									<span>Hey! Thanks for reaching out. I will get back to you soon</span>
								</div>
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
							<a href="javascript:void(0)">Branding</a>
						</li>
						<li class="brand">
							<a href="javascript:void(0)">Branding</a>
						</li>
					</ul>
					<ul class="thumb-wrap clearfix">
						<li class="profile-des-wrap all main-item brand">
							<figure>
								<?php if (empty($_SESSION['file'])){
														?>
														<img src="images/img01.jpg" alt="#">
											<?php
												}else{ ?>

													<img src="upload/<?php echo $_SESSION ['file']?>" alt="#">
												<?php
												}
												?>	
							</figure>
							<div class="author-wrap">
								<div class="author">
									<h4> Park Banff Canada </h4>
									<span>Label Print</span>
								</div>
								<div class="arrow-right"></div>
								<a href="gallery-two"><i class="icon-arrow-right-circle"></i></a>
							</div>
						</li>
						<li class="profile-des-wrap main-item all photoshop">
							<figure>
								<?php if (empty($_SESSION['file'])){
														?>
														<img src="images/img03.jpg" alt="#">
											<?php
												}else{ ?>

													<img src="negasi/<?php echo $_SESSION ['file']?>" alt="#">
												<?php
												}
												?>	
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
								<!--<input type="submit" value="negasi" class="btn comment-submit qoute-sub"/> -->
								echo
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
				<?php 
error_reporting(0);
$source_file = "koala.jpg";

// histogram options

$maxheight = 300;
$barwidth = 2;

$im = ImageCreateFromJpeg($source_file); 

$imgw = imagesx($im);
$imgh = imagesy($im);

// n = total number or pixels

$n = $imgw*$imgh;

$histo = array();

for ($i=0; $i<$imgw; $i++)
{
        for ($j=0; $j<$imgh; $j++)
        {
        
                // get the rgb value for current pixel
                
                $rgb = ImageColorAt($im, $i, $j); 
                
                // extract each value for r, g, b
                
                $r = ($rgb >> 16) & 0xFF;
                $g = ($rgb >> 8) & 0xFF;
                $b = $rgb & 0xFF;
                
                // get the Value from the RGB value
                
                $V = round(($r + $g + $b) / 3);
                
                // add the point to the histogram
                
                $histo[$V] += $V / $n;
        
        }
}

// find the maximum in the histogram in order to display a normated graph

$max = 0;
for ($i=0; $i<255; $i++)
{
        if ($histo[$i] > $max)
        {
                $max = $histo[$i];
        }
}

echo "<div style='width: ".(256*$barwidth)."px; border: 1px solid'>";
for ($i=0; $i<255; $i++)
{
        $val += $histo[$i];
        
        $h = ( $histo[$i]/$max )*$maxheight;

        echo "<img src=\"img.gif\" width=\"".$barwidth."\"
height=\"".$h."\" border=\"0\">";
}
echo "</div>";
?>
				
			</section>
			<section class="contact-us">
					<div class="container">
						<div class="heading">
							<h2>Kontak Saya</h2>
							<p>
								Jerry
							</p>
						</div>
						<div class="col-xs-12 col-sm-4">
							<div class="contact-info">
								<a href="#" class="contact-icon"><i class="icon-call-out"></i> </a>
								<a href="tel:6601234567890" class="contact-text"> +66 (0)123 456 7890</a>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4">
							<div class="contact-info">
								<span  class="contact-icon"><i class="icon-location-pin"></i> </span>
								<span class="contact-text"> 3481 Melrose Place Beverly Hills, CA 90210</span>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4">
							<div class="contact-info">
								<a href="#" class="contact-icon"><i class="icon-envelope-letter"></i> </a>
								<a href="mailto:admin@trasuaemplate.com" class="contact-text"> admin@trasuaemplate.com</a>
							</div>
						</div>
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
				<div class="social-media-wrap">
					<a href="#"><i class="fa fa-twitter"></i> </a>
					<a href="#"><i class="fa fa-facebook"></i> </a>
					<a href="#"><i class="fa fa-instagram"></i> </a>
					<a href="#"><i class="fa fa-pinterest-p"></i> </a>
					<a href="#"><i class="fa fa-behance"></i></a>
				</div>
				<div class="copy-right">
					Copyright &copy;2015 Designed by<a href="#"> Azuretheme.</a> All Rights Reserved.
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
