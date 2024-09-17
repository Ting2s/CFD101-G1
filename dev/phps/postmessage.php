<?php
    ob_start();
session_start();

    $mem = $_SESSION['mem_no'];
    // $article_cate = isset($_POST["type"])?$_POST["type"]:""; 
    // $title = isset($_POST["title"])?$_POST["title"]:"";
    $content = isset($_POST["text"])?$_POST["text"]:"";
    $cop = isset($_POST["no"])?$_POST["no"]:"";
    // print_r([$mem]);
    echo $cop;
    // echo $content;
    // echo $mem;
    //------------------
try{
    require_once("../connect_cfd101g1.php");
    $sql = "INSERT INTO msg_art(
                mem_no,art_no,msg_content,msg_status
            ) 
            VALUES(
                :mem_no,:art_no,:msg_content,1)";
    
    $msgart = $pdo->prepare($sql);
    $msgart->bindValue(":mem_no", $mem);
    $msgart->bindValue(":msg_content", $content);
    $msgart->bindValue(":art_no", $cop);
    $msgart->execute(); 
// -------------------------------------------------------------------------------------------------


}catch(PDOException $e){
    $error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>