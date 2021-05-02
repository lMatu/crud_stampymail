<?php

    include_once 'Session.php';

    $session = new Session();
    $session->closeSession();

    header("location: ../index.php");
