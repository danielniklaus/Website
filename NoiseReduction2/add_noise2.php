<?php

$im = ImageCreateTrueColor(500, 500);

if (is_resource($im)) {
    $blue = array_map('hexdec', str_split('0000FF', 2));
    $white = array_map('hexdec', str_split('FFFFFF', 2));

    $blue = ImageColorAllocate($im, $blue[0], $blue[1], $blue[2]);
    $white = ImageColorAllocate($im, $white[0], $white[1], $white[2]);

    for ($w = 1; $w <= 500; $w++) {
        for ($h = 1; $h <= 500; $h++) {
            if (mt_rand(1, 100) >= 50)
                ImageSetPixel($im, $w, $h, $blue);
            else
                ImageSetPixel($im, $w, $h, $white);
        }
    }
}

header('Content-type: image/png');

ImagePNG($im, null, 9);
ImageDestroy($im);

?>