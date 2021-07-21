<?php
ob_start();
session_start();

try{
  require_once("../connect_cfd101g1.php");


  $data = json_decode($_POST["data"],true); 
  $cartTotal = $data["cartTotal"];
  $items = $data["items"];
  $_SESSION["mem_no"]=1;

      if(isset($_SESSION["mem_no"])){ //已登入 ===================沒有成功判斷

            echo $_SESSION["mem_no"];
            $mem_no = $_SESSION["mem_no"];
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

     }else{
            $result = [
              "status"=>"N", 
              "message"=>"請重新登入",
                ];
            echo  json_encode($result) , "重新登入";  
  }
  
  }catch(PDOException $e){
    echo $e->getMessage();
  }



//   $mem_no = $_SESSION["mem_no"];
//   $sql="insert into orders value(null, $mem_no, now(), $cartTotal)";
//   $pdo->exec($sql);
//   $order_no = $pdo->lastInsertId();
  
//   $count= count($items);

//   // exit("===". $count);
//   foreach($items as $i => $item)
//   {  
//       $order_no = $order_no;
//       $order_psn = $item["psn"];
//       $order_quantity = $item["quantity"];
//       $order_price = $item["price"];

//       $sql = "INSERT INTO `orderlist`(`order_no`, `psn`, `quantity`, `price`) VALUES ($order_no,$order_psn,$order_quantity,$order_price)";
//       $orderlist = $pdo->query($sql);
//   }

//     $result = [
//       "status"=>"YES", 
//       "message"=>"新增成功",
//     ];
//     echo  json_encode($result);
// }catch(PDOException $e){
//   echo $e->getMessage();
// }
?>