<?php 
ob_start();
session_start();

$mem_no=$_SESSION['mem_no'];

try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT b.img, b.type 
  FROM member a join accessory b on (a.mem_no=b.mem_no)
	where a.mem_no=:mem_no";

$Acc = $pdo->prepare($sql);
$Acc->bindValue(":mem_no", $mem_no);
$Acc->execute();

$dinoAcc = $Acc->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($dinoAcc);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>