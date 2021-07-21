<?php 
ob_start();
session_start();

$mem_no=$_SESSION['mem_no'];

try{
	require_once("../connect_cfd101g1.php");
	$sql = "SELECT `mem_nicname`, `mem_img` 
  FROM member
	where mem_no=:mem_no";

$mem = $pdo->prepare($sql);
$mem->bindValue(":mem_no", $mem_no);
$mem->execute();

$memberRows = $mem->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($memberRows);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>