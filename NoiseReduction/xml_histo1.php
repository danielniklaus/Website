<?php 
if(isset($_GET["gambar"]) AND $_GET["gambar"]!=""){
	header('Content-type: text/xml');
	print '
	<graph caption="Histogram Gambar" numdivlines="4" showValues="0" showAnchors="0"  
	numVDivLines="22" anchorRadius="3" anchorSides="10" rotateNames="1" 
	lineThickness="2" divLineAlpha="40" divLineColor="494949" showAlternateHGridColor="1" 
	alternateHGridColor="d8d8d8" alternateVGridAlpha="30" shadowAlpha="40" 
	baseFontColor="494949" vDivlinecolor="494949" limitsDecimalPrecision="0" 
	divLineDecimalPrecision="0" decimalPrecision="0" bgColor="F5F5F5">';

	$imaged = $_GET["gambar"];
	if(file_exists($imaged)){
		$images 		= imagecreatefromjpeg($imaged); 
		$image_width 	= imagesx($images);
		$image_height 	= imagesy($images);
		$value[0] 		= array();
		$value[1] 		= array();
		$value[2] 		= array();
		
		for($x=0;$x<$image_width;$x++){
			for($y=0;$y<$image_height;$y++){
				$rgb = imagecolorat($images, $x, $y); 
				$r = ($rgb >> 16) & 0xFF;
				$g = ($rgb >> 8) & 0xFF;
				$b = $rgb & 0xFF;
				$value[0][$r]++;
				$value[1][$g]++;
				$value[2][$b]++;
			}
		}
		
		print '
		<categories>';
		for($i=0; $i<255; $i++){
			print '
			<category name=""/>';
		}
		print '
		</categories>';
		
		$array_warna  = array("#ff0000","#00ff00","#0000ff");
		$colors_name  = array("RED","GREEN","BLUE");
		
		for($a=0;$a<3;$a++){
			print '
			<dataset seriesname="'.$colors_name[$a].'" color="'.$array_warna[$a].'">';
			for ($i=0; $i<255; $i++){
				$h = $value[$a][$i];
				print '
				<set value="'.ceil($h).'"/>';
			}
			print '
			</dataset>';
		}
		print '
		</graph>';
	}
}
?>