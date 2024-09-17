<?php
ob_start();
session_start();


// ----------------------------------------------
try{
	require_once("../connect_cfd101g1.php");

	if( isset($_SESSION['mem_no']) ){
		$mem_no=$_SESSION['mem_no'];
		$sql = "SELECT dino_no FROM mem_dino";
		$myBabyDino = $pdo->query($sql);
		$dinoRows = $myBabyDino->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($dinoRows);
	}else{
		$mem_no = null;
	  }
}catch(PDOException $e){
	echo $e->getMessage();
}
?>
