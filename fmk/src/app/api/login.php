
<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $_POST = json_decode(file_get_contents('php://input'),true);

    if(isset($_POST) && !empty($_POST)){
        $username = $_POST['username'];
        $password = $_POST['password'];
        if($username == 'admin' && $password == 'admin'){
            ?>
            {
                "succes": true,
                "secret": "Eloszka"
            }
            <?php

        } else {
            ?>
            {
                "succes": false,
                "secret": "Nie masz dostępu"
            }
            <?php
        }
    } else {
        ?>
        {
            "succes": false,
            "secret": "cos poszlo nie tak"
        }
        <?php
    }
?>