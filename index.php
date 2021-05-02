<?php
include_once 'core/Auth.php';
include_once 'core/Session.php';
include_once 'core/Routes.php';

$session = new Session;
$user = new Auth();

if (isset($_SESSION['user'])) {
    //echo "hay sesion";
    $paramUrl = $_REQUEST;
    $p = (isset($paramUrl['p']) ? $paramUrl['p'] : 'home');
    $data_pages = $pages[$p];

    $user->setUser($session->getCurrentSession());
    include_once 'views/common/main.php';
    
} else if (isset($_POST['username']) && isset($_POST['password'])) {

    $userForm = $_POST['username'];
    $passForm = $_POST['password'];

    //$user = new Auth();

    if ($user->userExists($userForm, $passForm)) {
        //echo "Existe el usuario";
        $paramUrl = $_REQUEST;
        $p = (isset($paramUrl['p']) ? $paramUrl['p'] : 'home');
        $data_pages = $pages[$p];

        $session->setCurrentSession($userForm);
        $user->setUser($userForm);

        include_once 'views/common/main.php';
    } else {
        //echo "No existe el usuario";
        $errorLogin = "Nombre de usuario y/o password incorrecto";
        include_once 'views/common/login.php';
    }
} else {
    include_once 'views/common/login.php';
}
