<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $input = json_decode(file_get_contents('php://input'),true);

    require_once "data_base.php";

    $db = new db();
    // $sql = "SELECT * FROM characters WHERE id NOT IN(1,2,3) ORDER BY RAND() LIMIT 3";
    $sql = "SELECT * FROM characters WHERE 1 ORDER BY RAND() LIMIT 3";
    $characters = array();
    if($result = $db->query($sql)) {
        while($character = $result->fetch_assoc()) {
            $characters[] = array(
                'id' => $character['id'],
                'name' => $character['name'],
                'imgSrc' => $character['imgSrc'],
                'sex' => $character['sex'],
                'fuckVotes' => $character['fuckVotes'],
                'marryVotes' => $character['marryVotes'],
                'killVotes' => $character['killVotes']
            );
        }
    }
    header('Content-type: application/json');
    $json = json_encode($characters, JSON_NUMERIC_CHECK);
    echo $json; 
?>