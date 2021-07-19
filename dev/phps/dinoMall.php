<?php 
try {
	require_once("./connectBooks.php");

	$sql = "select * from product";
	$products = $pdo->query($sql); 										
  $prodRows = $products->fetchAll(PDO::FETCH_ASSOC);  
	// 取回所有資料 放在二維陣列中 (配合 foreach)


}catch(Exception $e){ 
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>


<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Examples</title>
<style>
		.products td {
			border-bottom: 1px dotted deeppink;
		}
</style>
</head>

<body>
				<table class='products' align='center' width='800'>	
				<tr bgcolor='#febefe'><th>編號</th><th>價格</th><th>圖片</th><th>款式</th><th>上下架</th></tr>	
				<?php 

					foreach($prodRows as $i => $prodRow){       // 一次印一列資料 
						?>
							<tr>
							<td><?=$prodRow["psn"]?></td>
							<td><?=$prodRow["price"]?></td>
							<td><img src="<?=$prodRow["img"]?>" width="50"></td>

							<td><?=$prodRow["type"]?></td>
							<td><?=$prodRow["state"]?></td>
							</tr>
						<?php	
					}
				?>
				</table>

</body>
</html>