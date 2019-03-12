<?php

class db{
    private $host="localhost";
    private $db_user="root";
    private $db_password="";
    private $db_name="fmk_game";
    private $mysqli;
    public function __construct(){
        $this->mysqli = new mysqli($this->host,$this->db_user,$this->db_password,$this->db_name);
        if($this->mysqli->connect_errno){
            echo "Couldn't connect to the data base server";
            exit();
        }
        if($this->mysqli->set_charset("utf8")){
            //changed encoding  
        }
    }
    function __destruct(){
        $this->mysqli->close();
    }

    public function query($sql){
        $result = $this->mysqli->query($sql);
        return $result;
    }

    public function get_inserted_id(){
        $result = $this->mysqli->insert_id;
        return $result;
    }
}

?>