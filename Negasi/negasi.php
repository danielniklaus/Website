<?php
function statistik($array, $output = 'modus'){
 
    if(!is_array($array)){ 
        return FALSE;    
   }else{
    
        switch($output){  
            case 'modus':               
                $v = array_count_values($array);                 
                arsort($v); 
                foreach($v as $k => $v){$total = $k; break;} 
            break;  
  
        } 
        return $total; 
    } 
}


if(isset($_POST["gambar"]) AND $_POST["gambar"]!=""){
	$dir = 'negasi/';
	$dir2 = 'upload/';
	foreach(glob($dir.'*.*') as $v){
		unlink($v);
	}
	$img = $_POST["gambar"];
	$imgs = $dir2.$img;
	$images_source = imagecreatefromjpeg($imgs);
	imagefilter($images_source, IMG_FILTER_GRAYSCALE);
	$c = array();
	$m = array();
		//	$i = 1;
	for($x=1;$x<imagesx($images_source)-1;++$x){
		for($y=1;$y<imagesy($images_source)-1;++$y){

			$tinggi_y =$y-1;
			$lebar_x = $x-1;

			for ($i=0 ; $i < 9 ; $i++ ) { 
				$index 		= imagecolorat($images_source, $lebar_x, $tinggi_y);
				$rgb   		= imagecolorsforindex($images_source, $index);
				// $cal_red	= $rgb['red'];
				// $cal_green	= $rgb['green'];
				// $cal_blue	= $rgb['blue'];
				$cal_color  = $rgb['blue']; 
				$a = $cal_color;
				$b = array_push($c,  $a);
				if($tinggi_y - ($y-1) == 2)
					{
						$lebar_x += 1;
						$tinggi_y = $y -1; 
							
					}else
					{
						$tinggi_y += 1; 
					}	
					# code...
			}
					
		}

	}

	for ($i=0; $i < count($c); $i++) {
		$modus = array_slice($c,$i,9);			
		$modusnilai =  statistik($modus,'modus');
		$modus[4] = $modusnilai;

		
		echo "<pre>";
	var_dump($modusnilai);
	echo "</pre>";		 		
	}

	
}else{
	print '<h2>Silahkan pilih salah satu gambar disamping terlebih dahulu.</h2><div class="clear"></div>';
}
?>
