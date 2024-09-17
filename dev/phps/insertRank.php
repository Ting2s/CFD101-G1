<?php
ob_start();
session_start();


if( isset($_SESSION['mem_no']) ){
  $mem_no=$_SESSION['mem_no'];
}else{
  $mem_no = null;
}



try{
  require_once("../connect_cfd101g1.php");
  
  //isset資料是否存在  
  if( isset($_SESSION['mem_no']) ){
    $mem_no=$_SESSION['mem_no'];
    $sql = "INSERT INTO `quiz`(quiz_score, mem_no) values (:quiz_score, :mem_no)";

    $newRank = $pdo->prepare($sql);
    $newRank->bindValue(":mem_no", $mem_no);

  }else{
    $sql = "INSERT INTO `quiz`(quiz_score, mem_no) values (:quiz_score, null)";

    $newRank = $pdo->prepare($sql);
  } 

  $newRank->bindValue(":quiz_score", $_POST['score']);
  $newRank->execute();  

}catch(PDOException $e){
  echo $e->getMessage();
  echo "error";
}
?>
  