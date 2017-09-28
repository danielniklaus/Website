<?php
$x = 1500;
$y = 1500;
$im = imagecreatetruecolor($x,$y);
$color1 = imagecolorallocate($im, 200, 240, 242);
$color2 = imagecolorallocate($im,220,220,220);
imagefill($im,0,0,$color1);
for($i = 0; $i < $x; $i++) {
    for($j = 0; $j < $y; $j++) {
        if (mt_rand(0,1) == 1) imagesetpixel($im, $i, $j, $color2);
    }
}
header('Content-Type: image/png');
imagepng($im);
?>