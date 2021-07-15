<?php 
try{
	require_once("./connectBooks.php");
	$sql = "SELECT * FROM `quiz_question`";
	$qustion = $pdo->query($sql);
	$quest_rows = $question->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($quest_rows);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>