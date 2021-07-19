// try{
// 	require_once("../connect_cfd101g1.php");
// 	$sql = "SELECT a.*,m.mem_id FROM `member` m join card_favorite a WHERE a.mem_no=m.mem_no";
// 	//$mem = $_session['mem_no']; 
// 	$card_favorite = $pdo->query($sql);
// 	$favRows = $card_favorite->fetchAll(PDO::FETCH_ASSOC);
	
// 	echo json_encode($favRows);
// }catch(PDOException $e){
// 	//echo $e->getMessage();
// 	exit("系統暫時不能提供服務");
// }
<?php
ob_start();
session_start();

$mem = $_SESSION['mem_no'];
//$img = $_SESSION['mem_id'];
$mem_id = isset($_POST["mem_id"])?$_POST["mem_id"]:"";

try{
require_once("../connect_cfd101g1.php");
$sql = "INSERT INTO card_favorite(
						MEM_NO,MEM_ID,
				) 
				VALUES(
						:MEM_NO, :MEM_ID,1)";

$card_favorite = $pdo->prepare($sql);
$card_favorite->bindValue(":MEM_NO", $mem);
$card_favorite->bindValue(":MEM_ID", $mem_id);

$card_favorite->execute(); 
// -------------------------------------------------------------------------------------------------


}catch(PDOException $e){
$error = array("errorMsg"=>$e->getMessage());
echo json_encode($error);
}
?>