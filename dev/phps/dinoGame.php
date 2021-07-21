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
    $sql = "INSERT INTO `mem_dino`(DINO_NO,mem_no) values (:DINO_NO,:mem_no)";

    $getDino = $pdo->prepare($sql);
    $getDino->bindValue(":mem_no", $mem_no);

  }else{
    $sql =  "INSERT INTO `mem_dino`(DINO_NO,mem_no) values (:DINO_NO,null)";

    $getDino = $pdo->prepare($sql);
  } 

  $getDino->bindValue(":DINO_NO", $_POST['mydino']);
  $getDino->execute();  

}catch(PDOException $e){
  echo $e->getMessage();
  echo "error";
}
?>
  