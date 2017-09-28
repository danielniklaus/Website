<?php session_start();
	unset($_SESSION['file']);
	session_destroy();
	header( "Location:index.php");
?>