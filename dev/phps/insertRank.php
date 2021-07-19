<?php
try{
  require_once("connectBooks.php");
  $sql = "insert into quiz(mem_no,quiz_score) values (:mem_no,:quiz_score)";

  $quiz = $pdo->prepare($sql);
  $quiz = $_SESSION["mem_no"]
  $quiz->bindValue(":quiz_score", $_POST['quiz_score']);
  $quiz->execute();  
  }
}catch(PDOException $e){
  echo "error";
}
?>
  