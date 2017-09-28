<?php

$dir = '../zanry/';
// $dir1 = './noise1/';
// foreach(glob($dir.'*.*') as $v){
//     unlink($v);
// }
//$img ="./upload/".$_POST["gambar"];
$img =$_POST["gambar"];
// $valgas =$_POST["ukuran"]; //ditambahkan 


$images_source = imagecreatefromjpeg($img);
//$color1 = imagecolorallocate($images_source, 200, 240, 242);
$color2 = imagecolorallocate($images_source,255,255,255);
//imagefill($images_source,0,0,$color1);
for($x=0;$x<imagesx($images_source);++$x){
    for($y=0;$y<imagesy($images_source);++$y){
        $index      = imagecolorat($images_source, $x, $y);
        $rgb        = imagecolorsforindex($images_source, $index);
        $cal_red    = $rgb['red'];
        $cal_green  = $rgb['green'];
        $cal_blue   = $rgb['blue'];
        if (mt_rand(0,80) == 80) imagesetpixel($images_source, $x, $y, $color2);
       // $color      = imagecolorallocate($images_source, $cal_red, $cal_green, rand(0,255));
        //imagesetpixel($images_source, $x, $y, $color);
    }
}   
//$random_image_id = rand();
//$random_image_id = $val;
$create_new_imgs = $dir."noise".$img;
// $create_new_imgs1 = $dir1.$random_image_id.$img;
header('Content-Type: image/jpg');
imagejpeg($images_source,$create_new_imgs);
header( "Location:file_citra.php");

//imagejpeg($images_source);
//imagedestroy($images_source);

//print '<img width="600" src="'.$create_new_img.'"/>';
?>