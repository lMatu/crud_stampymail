<section class="recent">
    <div>
        <div class="conteiner-home">
            <h2>Nuevo Usuario</h2>
            <br>
            <form id="formUser" class="form-user">

                <!-- Grupos de Div -->
                <div class="form-group-users" id="usernameGroup">
                    <label for="username" class="form-label">Usuario</label>
                    <div class="form-group-users-input">
                        <input type="text" class="form-input-user" name="username" id="username" placeholder="user123" tabindex="1">
                        <i class="form-validar-estado fa fa-times-circle"></i>
                    </div>
                    <p class="form-input-user-error">El usuario tiene que ser de 4 a 16 digitos y solo puede contener letras y guion bajo.</p>
                    <p class="form-input-user-existe">El Usuario ya existe.</p>
                </div>

                <!-- Grupos de Div -->
                <div class="form-group-users" id="nameGroup">
                    <label for="name" class="form-label">Nombre y Apellido</label>
                    <div class="form-group-users-input">
                        <input type="text" class="form-input-user" name="name" id="name" placeholder="Juan Perez" tabindex="2">
                        <i class="form-validar-estado fa fa-times-circle"></i>
                    </div>
                    <p class="form-input-user-error">Debe usar letras y espacios, pueden llevar acentos.</p>
                </div>

                <!-- Grupos de Div -->
                <div class="form-group-users" id="passGroup">
                    <label for="pass" class="form-label">Contraseña</label>
                    <div class="form-group-users-input">
                        <input type="password" class="form-input-user" name="pass" id="pass" tabindex="3">
                        <i class="form-validar-estado fa fa-times-circle"></i>
                    </div>
                    <p class="form-input-user-error">Contraseña de 4 a 12 digitos</p>
                </div>

                <!-- Grupos de Div -->
                <div class="form-group-users" id="pass_reGroup">
                    <label for="pass_re" class="form-label">Reescribir Contraseña</label>
                    <div class="form-group-users-input">
                        <input type="password" class="form-input-user" name="pass_re" id="pass_re" tabindex="4">
                        <i class="form-validar-estado fa fa-times-circle"></i>
                    </div>
                    <p class="form-input-user-error">Ambas contraseñas deben ser iguales</p>
                </div>

                <!-- Grupos de Div -->
                <div class="form-group-users" id="emailGroup">
                    <label for="email" class="form-label">Email</label>
                    <div class="form-group-users-input">
                        <input type="email" class="form-input-user" name="email" id="email" placeholder="juan@perez.com" tabindex="5">
                        <i class="form-validar-estado fa fa-times-circle"></i>
                    </div>
                    <p class="form-input-user-error">Formato de correo incorrecto</p>
                </div>
                <br>
                <div class="form-mensaje-error" id="formMensajeError">
                    <p><i class="fa fa-exclamation-triangle">
                        </i><b> Error: </b>
                        Por favor rellene el formulario correctamente.
                    </p>
                </div>
                <div class="form-group-users form-group-users-btn-registrar">
                    <button type="button" id="btnRegistrar" class="btn btnRegistrar " tabindex="6">Registrar</button>
                    <h1 class="form-mensaje-exito" id="formMensajeExito">Registro con EXITO</h1>
                </div>

            </form>
        </div>
    </div>
</section>

<div class="modal-modificar" id="avisoModal">
    <div class="modal-dialog-modificar modal-sm">
        <div class="modal-content-modificar">
            <div class="modal-header-modificar">
                <button type="button" class="close-modificar" data-close>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body-modificar">
                <h3 id="text_aviso" class="h3-body"></h3>
            </div>

            <div class="modal-footer-modificar">
                <button id="btnOk" type="button" class="btn btnCancelar btnOkCrear" onclick="updateCrear()">OK</button>
            </div>
        </div>
    </div>
</div>