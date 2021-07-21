<?php
try {
    require_once "../connect_cfd101g1.php";
    $sql = "UPDATE `article` SET `art_status`=:art_status WHERE art_no =:art_no";
    $article = $pdo->prepare($sql);
    $data = json_decode(file_get_contents("php://input"), true);
    $article->bindValue(':art_no', $_POST['art_no']);
    $article->bindValue(':art_status', $_POST['art_status']);
    $article->execute();

} catch (PDOException $e) {
    //echo $e->getMessage();
    exit("系統暫時不能提供服務");
}