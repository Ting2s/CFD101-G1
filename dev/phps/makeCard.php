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
    // `./images/dinoCardboard/${fileName.jpg`
    $upload_dir = "../images/dinoCardboard/";
    if(! file_exists($upload_dir)){
      mkdir($upload_dir);
    }

    $img = $_POST['hidden_data'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace('', '+', $img);
    
    $data = base64_decode($img);
    $fileName = time().".png";
    $file = $upload_dir.$fileName;
    $success = file_put_contents($file, $data);
    $file2 = substr($file,1);

    $sql = "INSERT INTO `card` (`card_no`, `card_img`,`card_status`,`mem_no`) VALUES (null,'$file2',0,1)";
    $dino = $pdo->exec($sql);
    echo $file2;

   }catch(PDOException $e){ 
    echo $e->getMessage();
    
  }
?>