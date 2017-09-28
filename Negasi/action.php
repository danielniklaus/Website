<link rel="stylesheet" type="text/css" href="css/histogram.css">
<?php
	error_reporting(0);
	session_start();

	$uploadDir = "upload/";//penyimpanan file yg di upload
	// Apabila ada file yang di-upload
	if(is_uploaded_file($_FILES['myfile']['tmp_name'])){
		$uploadFile = $_FILES['myfile'];
 
		// Extract nama file
		$extractFile = pathinfo($uploadFile['name']);
		$size = $_FILES['myfile']['size']; //untuk mengetahui ukuran file
		$tipe = $_FILES['myfile']['type'];// untuk mengetahui tipe file
 
		//Dibawah ini adalah untuk mengatur format gambar yang dapat di uplada ke server.
		//Anda bisa tambahakan jika ingin memasukan format yang lain tergantung kebutuhan anda.
 
		$exts =array('image/jpg','image/jpeg','image/pjpeg','image/png','image/x-png');
		if(!in_array(($tipe),$exts)){
			echo 'Format file yang di izinkan hanya JPEG dan PNG';
			exit;
		}
		// dibawah ini script untuk mengatur ukuran file yang dapat di upload ke server
		if(($size !=0)&&($size>3000000)){
			exit('Ukuran gambar terlalu besar?');
		}
	} 	
	$sameName = 0; // Menyimpan banyaknya file dengan nama yang sama dengan file yg diupload
	$handle = opendir($uploadDir);
	while(false !== ($file = readdir($handle))){ // Looping isi file pada directory tujuan
		// Apabila ada file dengan awalan yg sama dengan nama file di uplaod
		if(strpos($file,$extractFile['filename']) !== false)
		$sameName++; // Tambah data file yang sama
	}
 
	/* Apabila tidak ada file yang sama ($sameName masih '0') maka nama file pakai 
	* nama ketika diupload, jika $sameName > 0 maka pakai format "namafile($sameName).ext */
	$newName = empty($sameName) ? $uploadFile['name'] : $extractFile['filename'].'('.$sameName.').'.$extractFile['extension'];
 
	if(move_uploaded_file($uploadFile['tmp_name'],$uploadDir.$newName)){
		echo 'File berhasil diupload dengan nama: '.$newName;
		$_SESSION['file'] = $newName;



		


	//	echo "<script> window.location.reload = 'index.php'</script>";
		header( "Location:index.php");
	}
	else{
		echo 'File gagal diupload';
	}

?>