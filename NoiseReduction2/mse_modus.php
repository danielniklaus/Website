<?php 


//$image = "./noise1(6).jpg";

//$image1 = "./noise/modus/1noise1(6).jpg";

$image ="noise".$_POST["gambar"];
$image1 = "./noise/modus/1".$image;

$c = array();
$images_source = imagecreatefromjpeg($image);
for($x=0;$x<imagesx($images_source);++$x){
    for($y=0;$y<imagesy($images_source);++$y){
        $index      = imagecolorat($images_source, $x, $y);
        $rgb        = imagecolorsforindex($images_source, $index);
        $cal_red_awal= $rgb['red'];
        $cal_green_awal  = $rgb['green'];
        $cal_blue_awal   = $rgb['blue'];

        $b = array_push($c,  $cal_red_awal);
    
    }
}  

$o = [];
$images_source = imagecreatefromjpeg($image1);
for($x=0;$x<imagesx($images_source);++$x){
    for($y=0;$y<imagesy($images_source);++$y){
        $index      = imagecolorat($images_source, $x, $y);
        $rgb        = imagecolorsforindex($images_source, $index);
        $cal_red_akhir= $rgb['red'];
        $cal_green_akhir  = $rgb['green'];
        $cal_blue_akhir   = $rgb['blue'];

        $r = array_push($o,  $cal_red_akhir);      
    }
}    

$jumlahmse = [];
for($i = 0; $i < count($c); $i++)
{
    $mse = pow(($c[$i]-$o[$i]),'2');
    $jumlah = array_push($jumlahmse, $mse);

}
$totalmse = array_sum($jumlahmse)/9;
$warna = pow("255","2") / $totalmse;


$psnr = log10($warna);

echo "MSE = ".$totalmse; echo "<br>";
echo "PSNR = ".$psnr; 

?>