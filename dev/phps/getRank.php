<?php 
try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT a.mem_nicname,b.quiz_score
  from `member` a join quiz b on (a.mem_no=b.mem_no)
  order by quiz_score DESC
  limit 5";

	$rank = $pdo->query($sql);
	$rank_rows = $rank->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($rank_rows);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>