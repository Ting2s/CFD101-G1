<?php

//-----------------
//data:[<mediatype>][;base64],<data>
//-----------------
$upload_dir = "images/dinoMall/";
if( ! file_exists($upload_dir )){
  mkdir($upload_dir);
}

$img = $_POST['hidden_data'];
echo $img;
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$fileName = date("Ymd");
$file = $upload_dir . $fileName . ".png"; //"images/20210709.png"
$success = file_put_contents($file, $data); //-----
echo $success ? $file : 'Unable to save the file.';
?>