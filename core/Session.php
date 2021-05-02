<?php

class Session
{

    public function __construct()
    {
        if (!isset($_SESSION)) {
            session_start();
        }
    }

    public function setCurrentSession($user)
    {
        $_SESSION['user'] = $user;
    }

    public function getCurrentSession()
    {
        return $_SESSION['user'];
    }

    public function closeSession()
    {
        session_unset();
        session_destroy();
    }
}
