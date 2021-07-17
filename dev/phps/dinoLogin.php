<?php
ob_start();
session_start();


try{
  require_once("../connect_cfd101g1.php");
  $sql = " SELECT * from `member` where mem_id=:mem_id && mem_pw=:mem_pw";
  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_id", $_POST["mem_id"]);
  $member->bindValue(":mem_pw", $_POST["mem_pw"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
  '{}';
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //寫入session
    $_SESSION["mem_no"] = $memRow["mem_no"];
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_nicname"] = $memRow["mem_nicname"];
    $_SESSION["mem_email"] = $memRow["mem_email"];
    $_SESSION["mem_img"] = $memRow["mem_img"];
    $_SESSION["mem_status"] = $memRow["mem_status"];
    $_SESSION["game_point"] = $memRow["game_point"];



    //送出登入者的姓名資料
    $result = [
    "mem_no"=>$_SESSION["mem_no"], 
    "mem_id"=>$_SESSION["mem_id"],
    "mem_nicname"=>$_SESSION["mem_nicname"],
    "mem_email"=>$_SESSION["mem_email"],
    "mem_img"=>$_SESSION["mem_img"],
    "mem_status"=>$_SESSION["mem_status"],
    "game_point"=>$_SESSION["game_point"]
  ];
    echo  json_encode($result); 
} 
}catch(PDOException $e){
  echo $e->getMessage();  

}

?>
