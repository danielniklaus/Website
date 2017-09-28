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
$dir = './noise/modus/';
$dir1 = './noise1/modus1/';
foreach(glob($dir.'*.*') as $v){
  unlink($v);
}

$val = $_POST["ukuran"];
$image = "noise".$_POST["gambar"];
$img = imagecreatefromjpeg($image);
//imagefilter($img, IMG_FILTER_GRAYSCALE);  
for ($i=0; $i < count($val); $i++) {
    $modus = $val;      
    $modusnilai =  statistik($modus,'modus');
    $modus[4] = $modusnilai;   
  }

// $modusMatrix = array(
//   array(-1, -1, -1), 
//     array(-1, (8+$val), -1), 
//     array(-1, -1, -1)
// ); 
$modusMatrix = array(
    array(1.2, 1, 1.2), 
    array(1, (1+$val), 1), 
    array(1.2, 1, 1.2)
);
//$random_image_id = rand();
$random_image_id = 1;
$new_img = $dir.$random_image_id.$image;
$new_img1 = $dir1.$random_image_id.$image;
$divisor = array_sum(array_map('array_sum', $modusMatrix));            
$offset = 0; 
imageconvolution($img, $modusMatrix, $divisor, $offset);
imagejpeg($img, $new_img);
//imagejpeg($img, $new_img1);

$mse =


imagedestroy($img);
print '<img width="1000" src="'.$new_img.'"/>';
?>