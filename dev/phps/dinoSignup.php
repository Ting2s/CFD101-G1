<?php
ob_start();
session_start();

try{
  require_once("../connect_cfd101g1.php");

  $sql= "SELECT * FROM `member` where mem_id =:mem_id";

  $exist = $pdo->prepare($sql);
  $exist->bindValue(":mem_id",$_POST['mem_id']);
  $exist->execute();
  if( $exist->rowCount() !=0){
    echo 0;
  }else{ 

  $sql = "insert into member(mem_id,mem_pw,mem_email) values (:mem_id,:mem_pw,:mem_email)";

  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_id",$_POST['mem_id']);
  $member->bindValue(":mem_pw", $_POST['mem_pw']);
  $member->bindValue(":mem_email", $_POST['mem_email']);
  $member->execute();
  
  echo 1;
  
  }
}catch(PDOException $e){
  echo $e->getMessage();
}


?>