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



	// $dir = 'negasi/';
	// $dir2 = 'upload/';
	// foreach(glob($dir.'*.*') as $v){
	// 	unlink($v);
	// }
	$img = './1.jpg';
	//$imgs = $dir2.$img;
	$images_source = imagecreatefromjpeg($img);
	imagefilter($images_source, IMG_FILTER_GRAYSCALE);
	
	//$m = array();
		//	$i = 1;
	for($x=1;$x<imagesx($images_source)-1;++$x){
		for($y=1;$y<imagesy($images_source)-1;++$y){

			$tinggi_y =$y-1;
			$lebar_x = $x-1;
			$c = array();
			$k = array();
			$t = array();
			for ($i=0 ; $i < 9 ; $i++ ) { 
				$index 		= imagecolorat($images_source, $lebar_x, $tinggi_y);
				$rgb   		= imagecolorsforindex($images_source, $index);
				$cal_red	= "($lebar_x,$tinggi_y)".$rgb['red'];
				$cal_green	= $rgb['green'];
				$cal_blue	= $rgb['blue'];
				// $cal_color  = $rgb['blue']; 
				// $a = $cal_color;
				$b = array_push($c,  $cal_red);
				$g = array_push($k, $cal_green);
				$r = array_push($t, $cal_blue);
				if($tinggi_y - ($y-1) == 2)
					{
						$lebar_x += 1;
						$tinggi_y = $y -1; 
							
					}else
					{
						$tinggi_y += 1; 
					}

				// $modusnilaired =  statistik($c,'modus');	
				// $modusnilaigreen =  statistik($k,'modus');
				// $modusnilaiblue =  statistik($t,'modus');

				// if($i == 4){
				// 	$color 	= imagecolorallocate($images_source, $modusnilaired, $modusnilaigreen, $modusnilaiblue);
				// 	imagesetpixel($images_source, $x, $y, $color);


				// }


					# code...
			}
			

				// 
				// 
				// 

				$indexx 		= imagecolorat($images_source, $x, $y);
				$rgbb   		= imagecolorsforindex($images_source, $indexx);
				$call_red	= "($lebar_x,$tinggi_y)".$rgbb['red'];
				$call_green	= $rgbb['green'];
				$call_blue	= $rgbb['blue'];
			
				var_dump($call_red, $c);
				exit;
				
				





			var_dump($rgbb['red']);
			exit;

			

			var_dump($modusnilaired,$modusnilaigreen,$modusnilaiblue);
			exit;



			

			$color 		= imagecolorallocate($images_source, $modusnilaired, $modusnilaigreen, $modusnilaiblue);
			imagesetpixel($images_source, $x, $y, $color);
			
					
		}

	}
	imagejpeg($images_source);

	

	

?>
