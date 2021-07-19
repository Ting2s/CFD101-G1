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
    $sql = "INSERT INTO MSG_ART(
                MEM_NO,ART_NO,MSG_CONTENT,MSG_STATUS
            ) 
            VALUES(
                :MEM_NO,:ART_NO,:MSG_CONTENT,1)";
    
    $msgart = $pdo->prepare($sql);
    $msgart->bindValue(":MEM_NO", $mem);
    $msgart->bindValue(":MSG_CONTENT", $content);
    $msgart->bindValue(":ART_NO", $cop);
    $msgart->execute(); 
// -------------------------------------------------------------------------------------------------


}catch(PDOException $e){
    $error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>