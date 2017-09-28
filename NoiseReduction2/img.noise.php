<?php
$dir = './noise/';
$dir1 = './noise1/';
foreach(glob($dir.'*.*') as $v){
	unlink($v);
}
$img = "noise".$_POST["gambar"];
$valgas =$_POST["ukuran"]; //ditambahkan 

$image = imagecreatefromjpeg($img);

$random_image_id = rand();
$create_new_img = $dir.$random_image_id.$img;
$gaussian = array(
	array(1.0, 2.0, 1.0), 
	array(3.0, 4.0+$valgas, 3.0), 
	array(1.0, 2.0, 1.0)
);
//imageconvolution($image, $gaussian, 15, 0.3);
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
		// $cal_red	= $rgb['red'];
		// $cal_green	= $rgb['green'];
		// $cal_blue	= $rgb['blue'];
		$color 		= imagecolorallocate($images_source, $cal_red, $cal_green, $cal_blue);
		imagesetpixel($images_source, $x, $y, $color);
	}
}	
//$random_image_id = rand();
$random_image_id = $val;
$create_new_imgs = $dir.$random_image_id.$img;
//$create_new_imgs1 = $dir1.$random_image_id.$img;
imagejpeg($images_source, $create_new_imgs, 600);
//imagejpeg($images_source, $create_new_imgs1, 600);
imagedestroy($images_source);

print '<img width="600" src="'.$create_new_img.'"/>';
?>
