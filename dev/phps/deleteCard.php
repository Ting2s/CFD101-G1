<?php
ob_start();
session_start();

$mem_no=$_SESSION['mem_no'];
echo $_POST['card_no'];

try{
  require_once("../connect_cfd101g1.php");
  
  $sql = "DELETE FROM `card`
  WHERE `card`.`card_no` = :card_no";

  $newPhoto = $pdo->prepare($sql);
  // $newPhoto->bindValue(":mem_no", $mem_no);
  $newPhoto->bindValue(":card_no", $_POST['card_no']);
  $newPhoto->execute();  

  
}catch(PDOException $e){
  echo $e->getMessage();
  echo "error";
  
}
?>
  