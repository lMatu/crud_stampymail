<!DOCTYPE html>
<html lang="es">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>CRUD | StampyMail</title>

    <!-- Icono -->
    <link rel="shortcut icon" href="images/logo.png">

    <!-- Font Awesome -->
    <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <!-- My Styles -->
    <link href="css/crud.css" rel="stylesheet">

    <?php if (isset($data_pages['urlcss'])) { ?>
        <!-- Custom By Pages -->
        <link href="<?php echo $data_pages['urlcss']; ?>" rel="stylesheet">
    <?php } ?>
</head>

<body>
    <input type="checkbox" id="sidebar-toggle">
    <div class="sidebar">
        <!-- Header Sidebar -->
        <div class="sidebar-header">
            <h3 class="brand">
                <span><img src="images/logo.png" class="img-header"></span>
                <span> StampyMail</span>
            </h3>
            <!-- <label for="sidebar-toggle"><i class="fa fa-bars"></i></label> -->
        </div>
        <!-- Header Sidebar -->

        <!-- Body Sidebar -->
        <div class="sidebar-menu">
            <?php include 'views/common/menu_sidebar.php'; ?>
        </div>
        <!-- Body Sidebar -->
    </div>

    <div class="main-content">
        <header>
            <!-- Nav Bar -->
            <div class="input-buscar">
            </div>
            <div class="btn-salir">
                <?php include 'views/common/navigation_top.php'; ?>
            </div>
            <!-- Nav Bar -->
        </header>
        <main>
            <!-- Dinamic Conteiner -->
            <div>
                <?php include $data_pages['url']; ?>
            </div>
            <!-- Dinamic Conteiner -->
        </main>

        <!-- Footer  -->
        <?php include 'views/common/content_footer.php'; ?>
        <!-- Footer -->
    </div>

    <?php
    if (isset($data_pages['urljs'])) {
        if (count($data_pages['urljs']) > 0) {
            echo "<!--Scripts for pages-->";
            for ($i = 0; $i < count($data_pages['urljs']); $i++) {
    ?>
                <script src="<?php echo $data_pages['urljs'][$i] . '?v=' . date("YmdHis"); ?>"></script>
            <?php
            }
        } else {
            ?>
            <!--Scripts for pages-->
            <script src="<?php echo $data_pages['urljs'] . '?v=' . date("YmdHis"); ?>"></script>
    <?php
        }
    }
    ?>
</body>

</html>