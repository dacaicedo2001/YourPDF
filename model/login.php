<?php
    
    require('./Database.php');

    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    $db = new Database();
    echo(json_encode($db->login($usuario, $clave)));
?>