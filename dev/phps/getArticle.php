<?php 
try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT a.*,m.mem_nicname FROM `member` m join article a WHERE a.mem_no=m.mem_no";
	$article = $pdo->query($sql);
	$artRows = $article->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($artRows);
}catch(PDOException $e){
	//echo $e->getMessage();
	exit("系統暫時不能提供服務");
}
?>