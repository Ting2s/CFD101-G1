<?php 
ob_start();
session_start();

if(isset($_SESSION["mem_id"])){ //已登入
	//送出登入者的資料
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
}else{
  echo "{}";
}
?>