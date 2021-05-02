<!DOCTYPE html>
<html lang="es">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>CRUD STAMP</title>

    <!-- Icono -->
    <link rel="shortcut icon" href="images/logo.png">

    <!-- Custom Theme Style -->
    <link href="css/crud.css" rel="stylesheet">
</head>

<body class="login_stamp">
    <div>
        <div class="login_w">
            <div class="form login_form">
                <section class="login_content">
                    <div><img class="login_image" src="images/logo.png">
                    </div>
                    <form name="loginform" id="loginform" action="" method="post" autocomplete="off">
                        <h1>Acceso</h1>
                        <div>
                            <input name="username" type="text" class="form-input-user" placeholder="Usuario" required="" />
                        </div>
                        <div>
                            <input name="password" type="password" class="form-input-user" placeholder="Contraseña" required="" />
                        </div>
                        <div>
                            <button type="submit" class="btn btnCommon submit">Ingresar</button>
                        </div>

                        <br>

                        <?php

                        if (isset($errorLogin)) {
                            echo '<h4 class="msg-error">' . $errorLogin . '</h4>';
                        }
                        ?>

                        <div class="clearfix"></div>
                    </form>
                </section>
            </div>
        </div>
    </div>
</body>

</html>