<?php
ob_start();
session_start();
$_SESSION['mem_no'] = 1; //--------------------以後整合時需砍掉
$mem_no = $_SESSION['mem_no']; //登入者想收藏
//$img = $_SESSION['mem_id'];
$mem_id = isset($_POST["mem_id"])?$_POST["mem_id"]:""; //原PO
try{
	require_once("../connect_cfd101g1.php");

	if($_POST["like"] == "like"){
		$sql = "INSERT INTO card_favorite(
								mem_no, card_no
						) 
						VALUES(
								:mem_no, :card_no)";	
	}else{
		$sql = "delete from card_favorite where mem_no=:mem_no and card_no=:card_no";
	}


	$card_favorite = $pdo->prepare($sql);
	$card_favorite->bindValue(":mem_no", $mem_no);
	$card_favorite->bindValue(":card_no", $_POST["card_no"]);

	$card_favorite->execute(); 
	echo "OK";
// -----------------------------------


}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
	echo json_encode($error);
}
?>