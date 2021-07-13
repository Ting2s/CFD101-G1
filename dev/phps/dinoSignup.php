<?php
ob_start();
session_start();


try{
  require_once("../connect_cfd101g1.php");
  $sql = "insert into member(mem_id,mem_pw,mem_email) values ('$newAct','$newPsw','$newEmail')";

  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_id", $_POST["newAct"]);
  $member->bindValue(":mem_pw", $_POST["newPsw"]);
  $member->bindValue(":mem_email", $_POST["newEmail"]);
  $member->execute();

  $exist= "SELECT * FROM member where mem_id = `$newAct`";
  $exist_result = mysql_num_rows($exist);

  if($exist_result){ //已有資料則不通過
  echo "{}";
  }else{ //註冊成功

    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //寫入session
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_pw"] = $memRow["mem_pw"];
    $_SESSION["mem_email"] = $memRow["mem_email"];



    //送出註冊的資料
    $result = [
    "mem_id"=>$_SESSION["mem_id"],
    "mem_pw"=>$_SESSION["mem_pw"],
    "mem_email"=>$_SESSION["mem_email"],
  ];
    echo  json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>