<?php 
			try {
				require_once("../connect_cfd101g1.php");

				$sql = "select * from product";
				$products = $pdo->query($sql); 										
				$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);  
				echo json_encode($prodRows);

			}catch(Exception $e){ 
				echo "錯誤行號 : ", $e->getLine(), "<br>";
				echo "錯誤原因 : ", $e->getMessage(), "<br>";
			}
?>

