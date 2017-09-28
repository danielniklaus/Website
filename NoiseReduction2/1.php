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

  $dir = 'negasi/';
  $dir2 = 'upload/';
  foreach(glob($dir.'*.*') as $v){
    unlink($v);
  }
  $img = $_POST["gambar"];
  $valgas =$_POST["ukuran"];

  $images_source = imagecreatefromjpeg($img);
  $random_image_id = rand();

  $create_new_img = $dir.$random_image_id.$img;
 // imagefilter($images_source, IMG_FILTER_GRAYSCALE);
  $c = array();
  $d = array();
  $e = array();
    //  $i = 1;
  for($x=1;$x<imagesx($images_source)-1;++$x){
    for($y=1;$y<imagesy($images_source)-1;++$y){

      $tinggi_y =$y-1;
      $lebar_x = $x-1;

      for ($i=0 ; $i < 9 ; $i++ ) { 
        $index    = imagecolorat($images_source, $lebar_x, $tinggi_y);
        $rgb      = imagecolorsforindex($images_source, $index);
        $cal_red = $rgb['red'];
        $cal_green = $rgb['green'];
        $cal_blue  = $rgb['blue'];
      
        $r = array_push($d, $cal_red);
        $g = array_push($e, $cal_green);
        $b = array_push($c,  $cal_blue);
        if($tinggi_y - ($y-1) == 2)
          {
            $lebar_x += 1;
            $tinggi_y = $y -1; 
              
          }else
          {
            $tinggi_y += 1; 
          } 
          
      }
          
    }

  }

  for ($i=0; $i < count($c); $i++) {
    $modus_blue = array_slice($c,$i,9);      
    $modusnilai_blue =  statistik($modus,'modus');
    $modus_blue[4] = $modusnilai_blue;

    $modus_red = array_slice($d,$i,9);      
    $modusnilai_red=  statistik($modus,'modus');
    $modus_red[4] = $modusnilai_red;

    $modus_green = array_slice($e,$i,9);      
    $modusnilai_green=  statistik($modus,'modus');
    $modus_red[4] = $modusnilai_green;


   
  }
   $gaussian = array(
      array(0, 0, 0), 
      array(0, $modus_blue[4]+$valgas, 0), 
      array(0, 0, 0)
    );
$val = 1;
$vas = 10;
$img1 = $create_new_img;
$images_source = imagecreatefromjpeg($img1);
for($x=0;$x<imagesx($images_source);++$x){
  for($y=0;$y<imagesy($images_source);++$y){
        $index    = imagecolorat($images_source, $x, $y);
        $rgb      = imagecolorsforindex($images_source, $index);
    $cal_red  = $val*($rgb['red']-$vas)+$vas;
    $cal_green  = $val*($rgb['green']-$vas)+$vas;
    $cal_blue = $val*($rgb['blue']-$vas)+$vas;
    $color    = imagecolorallocate($images_source, $cal_red, $cal_green, $cal_blue);
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

  
