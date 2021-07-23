<?php 
try{
	require_once("../connect_cfd101g1.php");

	$recordPerPage = $_GET["records"];
  $start = ($_GET["pageNo"]-1) * $recordPerPage;

  $sql = "SELECT a.*,m.mem_id, m.mem_nicname FROM `member` m join card a WHERE a.mem_no=m.mem_no order by a.card_no limit $start, $recordPerPage";

  $card = $pdo->query($sql);

	$favRows = $card->fetchAll(PDO::FETCH_ASSOC);
	
  echo json_encode($favRows);

}catch(PDOException $e){
	//echo $e->getMessage();
	exit("系統暫時不能提供服務");
}
?>