<?php
ob_start();
session_start();


if( isset($_SESSION['mem_no']) ){
  $mem_no=$_SESSION['mem_no'];
}else{
  $mem_no = null;
}

// ----------------------------------------------
try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT dino_no FROM mem_dino";
	$myBabyDino = $pdo->query($sql);
	$dinoRows = $myBabyDino->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($dinoRows);
}catch(PDOException $e){
	echo $e->getMessage();
}
?>
