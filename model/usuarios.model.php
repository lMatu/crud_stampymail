<?php
class Usuario
{
    private $_dbc;

    public function __construct($dbc)
    {
        $this->_dbc = $dbc;
    }

    public function listarUsuarios($name)
    {
        if (is_null($name) && empty($name)) {
            $query = $this->_dbc->prepare('SELECT id, nombre, username, email FROM usuarios;');
        } else {
            $query = $this->_dbc->prepare('SELECT id, nombre, username, email FROM usuarios WHERE nombre LIKE "%' . $name . '%";');
        }

        if ($query->execute()) {
            $users = $query->fetchAll(PDO::FETCH_ASSOC);
            $response = array('success' => true, 'data' => $users);
        } else {
            $response = array('success' => false, 'data' => '');
        }

        return $response;
    }

    public function obtenerUsuario($username, $username_o, $from)
    {
        if ($from == 'edit') {
            $query = $this->_dbc->prepare('SELECT * FROM usuarios WHERE username = :username AND username != :username_o;');
            $execute = array('username' => $username, 'username_o' => $username_o);
        } else {
            $query = $this->_dbc->prepare('SELECT * FROM usuarios WHERE username = :username;');
            $execute = array('username' => $username);
        }

        if ($query->execute($execute)) {
            $countUser = $query->rowCount();
            $response = array('success' => true, 'data' => $countUser);
        } else {
            $response = array('success' => false, 'data' => '');
        }

        return $response;
    }

    public function cargarUsuario($id)
    {
        $query = $this->_dbc->prepare('SELECT * FROM usuarios WHERE id = :id;');

        if ($query->execute(['id' => $id])) {
            $user = $query->fetchAll(PDO::FETCH_ASSOC);
            $response = array('success' => true, 'data' => $user);
        } else {
            $response = array('success' => false, 'data' => '');
        }

        return $response;
    }

    public function eliminarUsuario($id)
    {
        $query = $this->_dbc->prepare("DELETE FROM usuarios WHERE id = :id");

        if ($query->execute(['id' => $id])) {
            $response = array('success' => true, 'data' => '');
        } else {
            $response = array('success' => false, 'data' => '');
        }

        return $response;
    }

    public function modificarUsuario($dataUser)
    {

        if ($dataUser['from'] == 'no-password') {
            $query = $this->_dbc->prepare("UPDATE usuarios SET nombre = ?, username = ?, email = ? 
            WHERE id = ?");
            $array = array(
                ucwords(strtolower($dataUser['name'])),
                $dataUser['username'],
                $dataUser['email'],
                $dataUser['id']
            );
        } else {
            $query = $this->_dbc->prepare("UPDATE usuarios SET nombre = ?, username = ?, password = ?, email = ? 
            WHERE id = ?");
            $array = array(
                ucwords(strtolower($dataUser['name'])),
                $dataUser['username'],
                md5($dataUser['pass']),
                $dataUser['email'],
                $dataUser['id']
            );
        }

        if ($query->execute($array)) {
            $response = array('success' => true);
        } else {
            $response = array('success' => false);
        }

        return $response;
    }

    public function registrarUsuario($dataUser)
    {

        $query = $this->_dbc->prepare('INSERT INTO usuarios (nombre,username,password,email) 
        VALUES (?, ?, ?, ?)');

        if ($query->execute(array(
            ucwords(strtolower($dataUser['name'])),
            $dataUser['username'],
            md5($dataUser['pass']),
            $dataUser['email']
        ))) {
            $id = $this->_dbc->lastInsertId();
            $response = array('success' => true, 'id' => $id);
        } else {
            $response = array('success' => false, 'id' => '');
        }

        return $response;
    }
}
