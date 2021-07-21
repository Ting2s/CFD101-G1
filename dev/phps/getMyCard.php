<?php 
ob_start();
session_start();

$mem_no=$_SESSION['mem_no'];

try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT card_img ,card_no
  FROM `card`
  where mem_no=:mem_no";

$myCard = $pdo->prepare($sql);
$myCard->bindValue(":mem_no", $mem_no);
$myCard->execute();

$cards = $myCard->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($cards);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>