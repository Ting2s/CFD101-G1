<?php 
try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT a.*,m.mem_nicname,m.mem_img FROM `member` m join msg_art a WHERE a.mem_no=m.mem_no";
	$msgart = $pdo->query($sql);
	$msgRows = $msgart->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($msgRows);
}catch(PDOException $e){
	//echo $e->getMessage();
	exit("系統暫時不能提供服務");
}
?>