<?php

ob_start();
session_start();

try{
  require_once("./connectBooks.php");

  //判斷Session登入的ID有沒有存在
  // $_SESSION["mem_no"] = 3; //寫入Orders
  // $mem_no="";
  // if ($_SESSION['mem_no'] == undefined) //未登入
  // {
  //   $result = [
  //     "status"=>"N", 
  //     "message"=>"請重新登入",
  //   ];
  //   echo  json_encode($result);
  // } else {// 已登入
  //   $mem_no = $_SESSION['mem_no'];
  // }
  $data = json_decode($_POST["data"],true); 
  $cartTotal = $data["cartTotal"];
  $items = $data["items"];
  //---------------------------------------先寫入主檔
  //$mem_no = $_SESSION["mem_no"];
  $mem_no = 1;//----------delte;

  $sql="insert into orders value(null, $mem_no, now(), $cartTotal)";
  $pdo->exec($sql);
  $order_no = $pdo->lastInsertId();
  
  $count= count($items);

  // exit("===". $count);
  foreach($items as $i => $item)
  {  
      $order_no = $order_no;
      $order_psn = $item["psn"];
      $order_quantity = $item["quantity"];
      $order_price = $item["price"];

      $sql = "INSERT INTO `orderlist`(`order_no`, `psn`, `quantity`, `price`) VALUES ($order_no,$order_psn,$order_quantity,$order_price)";
      $orderlist = $pdo->query($sql);
  }

    $result = [
      "status"=>"YES", 
      "message"=>"新增成功",
    ];
    echo  json_encode($result);
}catch(PDOException $e){
  echo $e->getMessage();
}
?>