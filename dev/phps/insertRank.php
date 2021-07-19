<?php
ob_start();
session_start();

$mem_no=$_SESSION['mem_no'];

try{
  require_once("../connect_cfd101g1.php");
  
  $sql = "INSERT INTO `quiz`(quiz_score, mem_no) values (:quiz_score, :mem_no)";

  $newRank = $pdo->prepare($sql);
  $newRank->bindValue(":mem_no", $mem_no);
  $newRank->bindValue(":quiz_score", $_POST['score']);
  $newRank->execute();  
  }

}catch(PDOException $e){
  echo "error";
}
?>
  