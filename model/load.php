<?php
    require('./Database.php');

    $db = new Database();
    $response = $db->loadAllFiles($_POST['id']);
    echo(json_encode($response));
?>