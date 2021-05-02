<?php
include_once '../core/DB.php';
include_once '../model/usuarios.model.php';

$database = new DB();
$dbc = $database->connect();
$users = new Usuario($dbc);

$request = json_decode($_POST['request'], true);

switch ($request['controller']) {
    case 'listar':
        $response = $users->listarUsuarios($request['name']);
        break;
    case 'obtener':
        $response = $users->obtenerUsuario($request['username'],$request['username_o'],$request['from']);
        break;
    case 'cargar':
        $response = $users->cargarUsuario($request['id']);
        break;
    case 'eliminar':
        $response = $users->eliminarUsuario($request['id']);
        break;
    case 'modificar':
        $response = $users->modificarUsuario($request['dataUser']);
        break;
    case 'registrar':
        $response = $users->registrarUsuario($request['dataUser']);
        break;
}

echo json_encode($response);
