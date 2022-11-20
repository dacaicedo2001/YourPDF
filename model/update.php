<?php
    require('./Database.php');

    $nombre = $_FILES['archivo']['name'];
    $temp = $_FILES['archivo']['tmp_name'];
    $id = $_POST['id'];

    $db = new Database();
    $respuesta = $db->updateFile($nombre, $temp, $id);
    echo(json_encode($respuesta));
?>