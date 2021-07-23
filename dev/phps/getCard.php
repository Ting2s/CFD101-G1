<?php 
try{
	require_once("../connect_cfd101g1.php");
	// $sql = "SELECT * FROM card c join card_favorite f on c.card_no = f.card_no WHERE = m.mem_no";
  $sql = "SELECT a.*,m.mem_id, m.mem_nicname FROM `member` m join card a WHERE a.mem_no=m.mem_no order by a.card_no";
  // $sql = "SELECT a.*,m.mem_id FROM `member` m join card_favorite a WHERE a.mem_no=m.mem_no";
	//$mem = $_session['mem_no']; 
	//$card = $pdo->query($sql);
  $card = $pdo->query($sql);
  //$cardRows = $card_favorite->fetchAll(PDO::FETCH_ASSOC);
	$favRows = $card->fetchAll(PDO::FETCH_ASSOC);
	
	// echo json_encode($cardRows);
  echo json_encode($favRows);

}catch(PDOException $e){
	//echo $e->getMessage();
	exit("系統暫時不能提供服務");
}
?>