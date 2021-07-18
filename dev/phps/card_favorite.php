<?php 
try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT a.*,m.mem_nicname FROM `member` m join card_favorite a WHERE a.mem_no=m.mem_no";
	$card_favorite = $pdo->query($sql);
	$favRows = $card_favorite->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($favRows);
}catch(PDOException $e){
	//echo $e->getMessage();
	exit("系統暫時不能提供服務");
}
?>