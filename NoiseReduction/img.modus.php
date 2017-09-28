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

function modus($array)
{
	$red	= $array[9];
	//$green	= $rgb['green'];
	//$blue	= $rgb['blue'];
	for ($i = 1; $i < imagesx($images_source) - 1; $i++)
    {
        for ($j = 1; $j < imagesy($images_source) - 1; $j++)
        {
            
		
            $t_j = $j - 1;
            $t_i = $i - 1;
            
    
            for ($index = 0; $index < 9; $index++)
            {

              	$redd[$index]= $red;
             	$greenn[$index] =$green;
            	$bluee[$index] = $blue;
 
             	if ($t_j - ($j - 1) == 2)
               	{
                  	$t_i += 1;
                  	$t_j = $j - 1;
                  	
              	}
               	else { 
               		$t_j += 1; 
               	}

           	}
       	}  
       	
    }

}
$dir = './noise/';
$dir1 = './noise1/';

foreach(glob($dir.'*.*') as $v){
	unlink($v);
}
$img = $_POST["gambar"];
$valgas =$_POST["ukuran"]; //ditambahkan 

$image = imagecreatefromjpeg($img);

$random_image_id = rand();
$create_new_img = $dir.$random_image_id.$img;
$gaussian = array(
	array(1.0, 2.0, 1.0), 
	array(3.0, 4.0+$valgas, 3.0), 
	array(1.0, 2.0, 1.0)
);
imageconvolution($image, $gaussian, 15, 0);
imagejpeg($image, $create_new_img);
imagedestroy($image);

$val = 1;
$vas = 10;
$img1 = $create_new_img;
$images_source = imagecreatefromjpeg($img1);
for($x=0;$x<imagesx($images_source);++$x){
	for($y=0;$y<imagesy($images_source);++$y){
        $index 		= imagecolorat($images_source, $x, $y);
        $rgb   		= imagecolorsforindex($images_source, $index);
		$cal_red	= $val*($rgb['red']-$vas)+$vas;
		$cal_green	= $val*($rgb['green']-$vas)+$vas;
		$cal_blue	= $val*($rgb['blue']-$vas)+$vas;
		$color 		= imagecolorallocate($images_source, $cal_red, $cal_green, $cal_blue);
		imagesetpixel($images_source, $x, $y, $color);
	}
}	
//$random_image_id = rand();
$random_image_id = $val;
$create_new_imgs = $dir.$random_image_id.$img;
$create_new_imgs1 = $dir1.$random_image_id.$img;
imagejpeg($images_source, $create_new_imgs, 600);
imagejpeg($images_source, $create_new_imgs1, 600);
imagedestroy($images_source);

print '<img width="600" src="'.$create_new_img.'"/>';
?>
