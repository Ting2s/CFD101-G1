<?php
    ob_start();
    session_start();

//-----------------
//data:[<mediatype>][;base64],<data>
//-----------------
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
    echo $img;
    $img = str_replace('data:image/png;base64,', '', $img);
    // $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $fileName = date("Ymd");
    $file = $fileName . ".png"; //  " 20210709.png "
    $success = file_put_contents($file, $data); 
    echo $success ? $file : 'Unable to save the file.';

    $sql = "INSERT INTO dino (`dino_no`, `img`) VALUES (null,$file)";

    $dino = $pdo->exec($sql);
    // echo $success ? $file : 'Unable to save the file.';

  }catch(PDOException $e){
    echo $e->getMessage();
  }
?>