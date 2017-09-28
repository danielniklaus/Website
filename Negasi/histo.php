<?php 
error_reporting(0);
if(isset($_POST["gambar"]) AND $_POST["gambar"]!=""){
	$imaged 		= $_POST["gambar"];
	$images 		= imagecreatefromjpeg($imaged); 
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

	print '<h2>Histogram Gambar</h2><hr/><div class="clear"></div><p></p>';
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
}else{
	print '<h2>Silahkan pilih salah satu gambar disamping terlebih dahulu.</h2><div class="clear"></div>';
}
?>