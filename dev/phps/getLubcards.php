<?php 
ob_start();
session_start();

$mem_no=$_SESSION['mem_no'];

try{
	require_once("../connect_cfd101g1.php");
	$sql ="SELECT a.card_img ,a.card_no
  from card a join card_favorite b on (a.card_no=b.card_no)
  where b.mem_no=:mem_no";

$lubCard = $pdo->prepare($sql);
$lubCard->bindValue(":mem_no", $mem_no);
$lubCard->execute();

$lubcards = $lubCard->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($lubcards);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>