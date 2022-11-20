<?php
    require('./Database.php');

    $id = $_POST['key_id'];

    $db = new Database();
    $respuesta = $db->deleteFile($id);

    echo(json_encode($respuesta));
?>