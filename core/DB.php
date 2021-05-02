<?php

class DB
{

    private $_driver;
    private $_host;
    private $_port;
    private $_schema;
    private $_username;
    private $_password;

    public function __construct()
    {
        $this->_driver = 'mysql';
        $this->_host = 'localhost';
        $this->_port = '3306';
        $this->_schema = 'db_crud';
        $this->_username = 'admin';
        $this->_password  = 'admin';
    }

    public function connect()
    {
        try {
            
            $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::MYSQL_ATTR_FOUND_ROWS => true);

            $dbc = new PDO(
                "mysql:host=$this->_host;port=$this->_port;dbname=$this->_schema",
                $this->_username,
                $this->_password,
                $options
            );

            return $dbc;
        } catch (PDOException $e) {
            echo "Error en la conexión: " . $e->getMessage();
        }
    }
}
