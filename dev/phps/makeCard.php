<?php
    ob_start();
    session_start();

try{
    require_once("../connect_cfd101g1.php");

    // if(isset($_SESSION["mem_no"])){ //已登入
    //   $result = [
    //     "status"=>"N", 
    //     "message"=>"請重新登入",
    //   ];
    //   echo  json_encode($result);
    // };

    $img = $_POST['hidden_data'];
    $img = str_replace('data:image/png;base64,', '', $img);
    // $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $fileName = date("Ymd");
    $file = $fileName; //  20210709
    $success = file_put_contents($file, $data); 

    $sql = "INSERT INTO `card` (`card_no`, `card_img`,`card_status`,`mem_no`) VALUES (null,$file,0,1)";
    $dino = $pdo->exec($sql);

   }catch(PDOException $e){
    echo $e->getMessage();
  }
?>