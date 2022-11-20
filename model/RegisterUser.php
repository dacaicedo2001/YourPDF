<?php
    
    require('./Database.php');
        
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];
    
    $db = new Database();
    $response = $db->registerUser($nombre, $apellido, $usuario, password_hash($clave, PASSWORD_DEFAULT));
    
    echo(json_encode($response));
?>