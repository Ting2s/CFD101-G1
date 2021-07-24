<?php
    ob_start();
    session_start();

try{
    require_once("../connect_cfd101g1.php");


    $upload_dir = "../images/dinoMall/";
    if(! file_exists($upload_dir)){
    mkdir($upload_dir);
    }

    $img = $_POST['hidden_data'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $data = base64_decode($img);
    $fileName = time().".png";
    $file = $upload_dir.$fileName;
    $success = file_put_contents($file, $data);
    $file2 = substr($file,1);
    
    // $sql = "INSERT INTO `dino` (`dino_no`, `img`) VALUES (null,'$file2')";
    $sql = "INSERT INTO `dino`(`DINO_NO`, `img`, `MYDINO_NO`) VALUES ('0','$file2',null)";
    $dino = $pdo->exec($sql);
    echo $file2;


  }catch(PDOException $e){
    echo $e->getMessage();
  }
?>



