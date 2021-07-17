<?php
    ob_start();
session_start();

    $mem = $_SESSION['mem_no'];
    $article_cate = isset($_POST["type"])?$_POST["type"]:""; 
    $title = isset($_POST["title"])?$_POST["title"]:"";
    $content = isset($_POST["text"])?$_POST["text"]:"";
    // $dirr = "./images/disscus";
    // $img = $_FILES['file']['name'];
    // echo $_POST["test"];

    switch ( $_FILES["file"]["error"]){
        case 0:
            $dir = "./images/disscus";
            //檢查資夾是否存在
            if(file_exists($dir) === false){
                mkdir($dir);
            }
            $from = $_FILES['file']['tmp_name']; 
            $to = "$dir/{$_FILES['file']['name']}";
            copy($from, $to);
        break;
    };
    print_r([$mem,$article_cate,$title,$content,$to]);

    $type = $_POST["type"];
            if ($type == "恐龍創作") {
                $article_cate = "恐龍創作";
            } else if ($type == "恐龍分享") {
                $article_cate = "恐龍分享";
            } else {
                $article_cate = "恐龍知識";
            };
    //------------------
try{
    require_once("../connect_cfd101g1.php");
    $sql = "INSERT INTO article(
                MEM_NO,ART_CATEGORY,ART_TITLE,ART_CONTENT,ART_PICTURE,ART_STATUS
            ) 
            VALUES(
                :MEM_NO, :ART_CATEGORY,:ART_TITLE,:ART_CONTENT,:ART_PICTURE,1)";
    
    $article = $pdo->prepare($sql);
    $article->bindValue(":MEM_NO", $mem);
    $article->bindValue(":ART_CATEGORY", $article_cate);
    $article->bindValue(":ART_TITLE", $title);
    $article->bindValue(":ART_CONTENT", $content);
    $article->bindValue(":ART_PICTURE", $to);
    $article->execute(); 
// -------------------------------------------------------------------------------------------------


}catch(PDOException $e){
    $error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>