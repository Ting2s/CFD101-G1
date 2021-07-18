<?php 
ob_start();
session_start();

try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT b.img, b.type 
  FROM member a join accessory b on (a.mem_no=b.mem_no)
	where :mem_no=a.mem_no";

$dinoAcc = $pdo->prepare($sql);
$dinoAcc->bindValue(":mem_no", $_SESSION['mem_no']);
$dinoAcc->execute();

	echo json_encode($dinoAcc);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>