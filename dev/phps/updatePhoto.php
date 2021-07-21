<?php
ob_start();
session_start();

$mem_no=$_SESSION['mem_no'];

try{
  require_once("../connect_cfd101g1.php");
  
  $sql = "UPDATE `member` set mem_img=:mem_img where mem_no=:mem_no";

  $newPhoto = $pdo->prepare($sql);
  $newPhoto->bindValue(":mem_no", $mem_no);
  $newPhoto->bindValue(":mem_img", $_POST['newImg']);
  $newPhoto->execute();  
  

}catch(PDOException $e){
  echo $e->getMessage();
  echo "error";
}
?>
  