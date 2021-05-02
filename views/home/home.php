<section class="recent">
    <div>
        <input type="hidden" id="id_usuario" name="id_usuario" value="<?php echo $user->getId(); ?>" />
        <input type="hidden" id="id_eliminar" name="id_eliminar" value="" />

        <div class="conteiner-home">
            <!-- <div class="titulo_principal"> -->
            <h2>Usuarios</h2>
            <div class="input-buscar">
                <div>
                    <input type="search" id="buscar" name="buscar" placeholder="Ingrese Nombre">
                    <span><i class="fa fa-search search-icon"></i></span>

                </div>
            </div>
            <br>
            <br>
            <!-- </div> -->
            <div class="clearfix"></div>
            <div class="conteiner-table">
                <div class="table-responsive">
                    <table id="tabla_users">
                        <thead id="thead_users">
                            <tr>
                                <th>ID</th>
                                <th>Nombre y Apellido</th>
                                <th>Email</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="tbody_users">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="modal-modificar" id="modificarModal">
    <div class="modal-dialog-modificar modal-tam">
        <div class="modal-content-modificar">
            <div class="modal-header-modificar">
                <button type="button" class="close-modificar" data-close>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body-modificar">
                <input type="hidden" id="id_usuario_modif" name="id_usuario_modif" value="" />
                <input type="hidden" id="usuario_modif" name="usuario_modif" value="" />
                <div class="x_panel">
                    <form id="formUser" class="form-user-modif">
                        <!-- Grupos de Div -->
                        <div class="form-group-users" id="usernameGroup">
                            <label for="username" class="form-label">Usuario</label>
                            <div class="form-group-users-input">
                                <input type="text" class="form-input-user" name="username" id="username" placeholder="user123" tabindex="10">
                                <i class="form-validar-estado fa fa-times-circle"></i>
                            </div>
                            <p class="form-input-user-error">El usuario tiene que ser de 4 a 16 digitos y solo puede contener letras y guion bajo.</p>
                            <p class="form-input-user-existe">El Usuario ya existe.</p>
                        </div>

                        <!-- Grupos de Div -->
                        <div class="form-group-users" id="nameGroup">
                            <label for="name" class="form-label">Nombre y Apellido</label>
                            <div class="form-group-users-input">
                                <input type="text" class="form-input-user" name="name" id="name" placeholder="Juan Perez" tabindex="11">
                                <i class="form-validar-estado fa fa-times-circle"></i>
                            </div>
                            <p class="form-input-user-error">Debe usar letras y espacios, pueden llevar acentos.</p>
                        </div>

                        <!-- Grupos de Div -->
                        <div class="form-group-users" id="emailGroup">
                            <label for="email" class="form-label">Email</label>
                            <div class="form-group-users-input">
                                <input type="email" class="form-input-user" name="email" id="email" placeholder="juan@perez.com" tabindex="12">
                                <i class="form-validar-estado fa fa-times-circle"></i>
                            </div>
                            <p class="form-input-user-error">Formato de correo incorrecto</p>
                        </div>


                        <!-- Grupos de Div -->
                        <div class="form-group-users-disabled" id="passGroup">
                            <label for="pass" class="form-label">Contraseña</label>
                            <div class="form-group-users-input">
                                <input type="password" class="form-input-user" name="pass" id="pass" tabindex="13" disabled>
                                <i class="form-validar-estado fa fa-times-circle"></i>
                            </div>
                            <p class="form-input-user-error">Contraseña de 4 a 12 digitos</p>
                        </div>

                        <!-- Grupos de Div -->
                        <div class="form-group-users-disabled" id="pass_reGroup">
                            <label for="pass_re" class="form-label">Reescribir Contraseña</label>
                            <div class="form-group-users-input">
                                <input type="password" class="form-input-user" name="pass_re" id="pass_re" tabindex="14" disabled>
                                <i class="form-validar-estado fa fa-times-circle"></i>
                            </div>
                            <p class="form-input-user-error">Ambas contraseñas deben ser iguales</p>
                        </div>
                        <!-- Grupos de Div -->
                        <div class="btn-password-change">
                            <button type="button" id="btnCambiarPass" class="btn btnPass btn-pass" tabindex="15">Editar Password</button>
                        </div>

                        <div class="form-mensaje-error-modif" id="formMensajeError">
                            <p><i class="fa fa-exclamation-triangle">
                                </i><b> Error: </b>
                                Por favor rellene el formulario correctamente.
                            </p>
                        </div>
                        <div class="form-group-users form-group-users-btn-modificar">
                            <button type="button" id="btnModificar" class="btn btnRegistrar " tabindex="16">Modificar</button>
                            <h1 class="form-mensaje-exito" id="formMensajeExito">Modificacion con EXITO</h1>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
</div>

<div class="modal-modificar" id="avisoModal">
    <div class="modal-dialog-modificar modal-sm">
        <div class="modal-content-modificar">
            <div class="modal-header-modificar">
                <button type="button" class="close-modificar" data-close>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body-modificar">
                <h3 id="text_aviso" class="h3-body">¿Está seguro que desea eliminar este usuario?</h3>
            </div>

            <div class="modal-footer-modificar">
                <button id="btnAceptar" type="button" class="btn btnRegistrar" onclick="eliminarUsuario()">Aceptar</button>
                <button id="btnOk" type="button" class="btn btnCancelar btnOk" onclick="updateHome()">OK</button>
                <button id="btnCancelar" type="button" class="btn btnCancelar" data-close>Cancelar</button>
            </div>
        </div>
    </div>
</div>

<div class="modal-modificar" id="avisoModalModificar">
    <div class="modal-dialog-modificar modal-sm">
        <div class="modal-content-modificar">
            <div class="modal-header-modificar">
                <button type="button" class="close-modificar" data-close>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body-modificar">
                <h3 id="text_aviso" class="h3-body">Modifaciones realizadas con éxito</h3>
            </div>

            <div class="modal-footer-modificar">
                <button id="btnOk" type="button" class="btn btnCancelar btnOkCrear" onclick="updateHome()">OK</button>
            </div>
        </div>
    </div>
</div>