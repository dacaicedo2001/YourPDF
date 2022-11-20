<?php
    require('./Database.php');

    $db = new Database();
    $response = $db->firstEightFiles($_POST['id']);
    echo(json_encode($response));
?>