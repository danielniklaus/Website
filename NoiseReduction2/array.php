<?php

$angka=array(4,4,5,3,3,3,3,4,2,3,5,4,2,2,2,2);
$no=0;

echo "<table border=1>";
for($i=0; $i <3; $i++){
      echo "<tr>";
      for($j=0; $j<5; $j++){
            echo "<td>";
            $angkabaru[$i][$j]=$angka[$no];
            $angkabaru1[$j][$i]=$angkabaru[$i][$j];
            echo $angkabaru[$i][$j];
            echo "</td>";
            $no++;
      }
}
echo "</table>";

echo "Nilai Maksimal berdasarakan kolom: <br>";
for($i=0; $i < 5; $i++){
      $jumlah[$i]=array_sum($angkabaru1[$i]);
      echo $jumlah[$i]. ",";
}

?>