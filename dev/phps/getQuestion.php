<?php 
try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT DISTINCT *
	FROM `quiz_question`
	ORDER BY Rand()
	limit 7";
	$question = $pdo->query($sql);
	$questions = $question->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($questions);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>