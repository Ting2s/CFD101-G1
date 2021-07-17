<?php
ob_start();
session_start();

try{
  require_once("../connect_cfd101g1.php");

  $sql = "insert into quiz(mem_no,quiz_score) values (:mem_no,:quiz_score)";

  $quiz = $pdo->prepare($sql);
  $quiz = $_SESSION["mem_no"]
  $quiz->bindValue(":quiz_score", $_POST['quiz_score']);
  $quiz->execute();  
  }
}catch(PDOException $e){
  echo $e->getMessage();
}


?>