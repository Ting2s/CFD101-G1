<?php 
try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT * FROM `quiz_question`";
	$question = $pdo->query($sql);
	$quest_rows = $question->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($quest_rows);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>