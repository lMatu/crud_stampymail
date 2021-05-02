// Cargar tabla 

function getUsuarios($nameUser = null) {
  const http = new XMLHttpRequest();
  const url = "controller/usuarios.controller.php";
  const params = {
    controller: "listar",
    name: $nameUser,
  };
  const toSend = "request=" + JSON.stringify(params);

  http.open("POST", url);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const datos = JSON.parse(this.responseText);

      if (datos.success) {
        const long = Object.keys(datos.data).length;

        if (long > 0) {
          let table = document.querySelector("#tbody_users");
          table.innerHTML = "";

          for (let item of datos.data) {
            if (document.getElementById("id_usuario").value != item.id) {
              table.innerHTML += `
              <tr>
              <td>${item.id}</td>
              <td>${item.nombre}</td>
              <td>${item.email}</td>
              <td>${item.username}</td>
              <td>
              <button type="button" class="btn btnEditar btn-small" onClick="modificarUsuario(${item.id})">Editar</button>
              <button type="button" class="btn btnEliminar btn-small" onClick="avisoEliminar(${item.id})">Eliminar</button>
              </td>
              </tr>`
                ;
            } else {
              table.innerHTML += `
              <tr>
              <td>${item.id}</td>
              <td>${item.nombre}</td>
              <td>${item.email}</td>
              <td>${item.username}</td>
              <td>
              <button type="button" class="btn btnEditar btn-small" onClick="modificarUsuario(${item.id})">Editar</button>
              </td>
              </tr>`
                ;
            }
          }
        } else {
          let table = document.querySelector("#tbody_users");
          table.innerHTML = "";
          table.innerHTML += `
            <tr>
            <td class="td-empty" colspan="5">No se encontraron elementos</td>
            </tr>
            `;
        }
      } else {
        alert("Error en la consulta");
      }
    }
  };

  http.send(toSend);
}

//Cargar tabla al iniciar
function onInit() {
  getUsuarios();
}

onInit();

//------Buscar usuario al escribir

const buscarUsuario = (e) => {

  let nameUser = e.target.value;

  getUsuarios(nameUser);

}

document.getElementById("buscar").addEventListener("keyup", buscarUsuario);

//------

//------Muestro aviso eliminar

function avisoEliminar($id) {
  document.getElementById("id_eliminar").value = ''
  document.getElementById("avisoModal").classList.add(isVisible);
  document.getElementById("id_eliminar").value = $id;
}


function avisoModificarOk() {
  document.getElementById("modificarModal").classList.remove(isVisible);
  document.getElementById("avisoModalModificar").classList.add(isVisible);
}


//------Cargo home
function updateHome() {
  window.location = "?p=home";
}

//------Elimino Usuario

function eliminarUsuario() {

  $id = document.getElementById("id_eliminar").value;

  const http = new XMLHttpRequest();
  const url = "controller/usuarios.controller.php";
  const params = {
    controller: "eliminar",
    id: $id,
  };
  const toSend = "request=" + JSON.stringify(params);

  http.open("POST", url);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const datos = JSON.parse(this.responseText);

      if (datos.success) {
        document.getElementById("text_aviso").innerHTML = "Usuario Eliminado con Exito";
        document.getElementById("btnAceptar").remove(isVisible);
        document.getElementById("btnCancelar").remove(isVisible);
        document.getElementById("btnOk").classList.add(isVisible);
        //alert("Eliminado con exito");
        //window.location = "?p=home";
      } else {
        alert("Error en la consulta");
      }
    }
  };

  http.send(toSend);
}

//------Cargo modal con usuario para modificar
function modificarUsuario($id) {
  form.reset();
  limpiarForm();
  cargarUsuario($id);
  document.getElementById("modificarModal").classList.add(isVisible);
  document.getElementById("id_usuario_modif").value = $id;
}

//---Limpio el formulario
function limpiarForm() {
  document.getElementById(`usernameGroup`).classList.add("form-group-users");
  document.getElementById(`usernameGroup`).classList.remove("form-group-users-incorrecto");
  document.getElementById(`usernameGroup`).classList.remove("form-group-users-correcto");
  document.querySelector(`#usernameGroup i`).classList.remove("fa-check-circle");
  document.querySelector(`#usernameGroup i`).classList.remove("fa-times-circle");
  document.querySelector(`#usernameGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");

  document.getElementById(`nameGroup`).classList.add("form-group-users");
  document.getElementById(`nameGroup`).classList.remove("form-group-users-incorrecto");
  document.getElementById(`nameGroup`).classList.remove("form-group-users-correcto");
  document.querySelector(`#nameGroup i`).classList.remove("fa-check-circle");
  document.querySelector(`#nameGroup i`).classList.remove("fa-times-circle");
  document.querySelector(`#nameGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");

  document.getElementById(`passGroup`).classList.add("form-group-users");
  document.getElementById(`passGroup`).classList.remove("form-group-users-incorrecto");
  document.getElementById(`passGroup`).classList.remove("form-group-users-correcto");
  document.querySelector(`#passGroup i`).classList.remove("fa-check-circle");
  document.querySelector(`#passGroup i`).classList.remove("fa-times-circle");
  document.querySelector(`#passGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");

  document.getElementById(`pass_reGroup`).classList.add("form-group-users");
  document.getElementById(`pass_reGroup`).classList.remove("form-group-users-incorrecto");
  document.getElementById(`pass_reGroup`).classList.remove("form-group-users-correcto");
  document.querySelector(`#pass_reGroup i`).classList.remove("fa-check-circle");
  document.querySelector(`#pass_reGroup i`).classList.remove("fa-times-circle");
  document.querySelector(`#pass_reGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");

  document.getElementById(`emailGroup`).classList.add("form-group-users");
  document.getElementById(`emailGroup`).classList.remove("form-group-users-incorrecto");
  document.getElementById(`emailGroup`).classList.remove("form-group-users-correcto");
  document.querySelector(`#emailGroup i`).classList.remove("fa-check-circle");
  document.querySelector(`#emailGroup i`).classList.remove("fa-times-circle");
  document.querySelector(`#emailGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");

  document.getElementById('formMensajeError').classList.remove('form-mensaje-error-modif-activo');

}

//---Para cerrar Modal

const isVisible = "is-visible";
const closeEls = document.querySelectorAll("[data-close]");

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// ---------------Formulario modificar---------------//

function cargarUsuario($id) {
  const http = new XMLHttpRequest();
  const url = "controller/usuarios.controller.php";
  const params = {
    controller: "cargar",
    id: $id
  };
  const toSend = "request=" + JSON.stringify(params);

  http.open("POST", url);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const datos = JSON.parse(this.responseText);

      if (datos.success) {

        document.getElementById('username').value = datos.data[0].username;
        document.getElementById('usuario_modif').value = datos.data[0].username;
        document.getElementById('name').value = datos.data[0].nombre;
        document.getElementById('email').value = datos.data[0].email;
        ;
        document.getElementById(`usernameGroup`).classList.add("form-group-users-correcto");
        document.querySelector(`#usernameGroup i`).classList.add("fa-check-circle");
        campos["username"] = true;

        document.getElementById(`nameGroup`).classList.add("form-group-users-correcto");
        document.querySelector(`#nameGroup i`).classList.add("fa-check-circle");
        campos["name"] = true;

        document.getElementById(`emailGroup`).classList.add("form-group-users-correcto");
        document.querySelector(`#emailGroup i`).classList.add("fa-check-circle");
        campos["email"] = true;

      } else {
        alert("Error en la consulta");
      }
    }
  };

  http.send(toSend);
}

//---Habilitar edicion de password al hacer click en boton

let pass_click = true;

document.getElementById("btnCambiarPass").addEventListener("click", (e) => {
  if (pass_click) {
    pass_click = false;
    document.getElementById('pass').removeAttribute("disabled");
    document.getElementById('pass_re').removeAttribute("disabled");
    document.getElementById('btnCambiarPass').classList.remove("btnPass");
    document.getElementById('btnCambiarPass').classList.add("btnPass-activo");

    document.getElementById(`passGroup`).classList.add("form-group-users");
    document.getElementById(`passGroup`).classList.remove("form-group-users-disabled");
    document.getElementById(`pass_reGroup`).classList.add("form-group-users");
    document.getElementById(`pass_reGroup`).classList.remove("form-group-users-disabled");
  } else {
    pass_click = true;
    document.getElementById('pass').value = '';
    document.getElementById('pass_re').value = '';
    document.getElementById('pass').setAttribute("disabled", "");
    document.getElementById('pass_re').setAttribute("disabled", "");

    document.getElementById(`passGroup`).classList.add("form-group-users");
    document.getElementById(`passGroup`).classList.remove("form-group-users-incorrecto");
    document.getElementById(`passGroup`).classList.remove("form-group-users-correcto");
    document.querySelector(`#passGroup i`).classList.remove("fa-check-circle");
    document.querySelector(`#passGroup i`).classList.remove("fa-times-circle");
    document.querySelector(`#passGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");

    document.getElementById(`pass_reGroup`).classList.add("form-group-users");
    document.getElementById(`pass_reGroup`).classList.remove("form-group-users-incorrecto");
    document.getElementById(`pass_reGroup`).classList.remove("form-group-users-correcto");
    document.querySelector(`#pass_reGroup i`).classList.remove("fa-check-circle");
    document.querySelector(`#pass_reGroup i`).classList.remove("fa-times-circle");
    document.querySelector(`#pass_reGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");

    document.getElementById('formMensajeError').classList.remove('form-mensaje-error-modif-activo');

    document.getElementById('btnCambiarPass').classList.add("btnPass");
    document.getElementById('btnCambiarPass').classList.remove("btnPass-activo");

    document.getElementById(`passGroup`).classList.remove("form-group-users");
    document.getElementById(`passGroup`).classList.add("form-group-users-disabled");
    document.getElementById(`pass_reGroup`).classList.remove("form-group-users");
    document.getElementById(`pass_reGroup`).classList.add("form-group-users-disabled");

  }
});

//Registrar Usuario si todo está OK
function editUser($from) {
  const http = new XMLHttpRequest();
  const url = "controller/usuarios.controller.php";
  const params = {
    controller: "modificar",
    dataUser: {
      id: document.getElementById("id_usuario_modif").value,
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      pass: document.getElementById("pass").value,
      email: document.getElementById("email").value,
      from: $from
    },
  };
  const toSend = "request=" + JSON.stringify(params);

  http.open("POST", url);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const datos = JSON.parse(this.responseText);

      if (datos.success) {
        form.reset();

        // document.getElementById('formMensajeExito').classList.add('form-mensaje-exito-activo');
        //setTimeout(() => {
        document.getElementById('formMensajeExito').classList.remove('form-mensaje-exito-activo');
        //  window.location = "?p=home";
        //}, 3000);

        document.querySelectorAll('.form-group-users-correcto').forEach((icono) => {
          icono.classList.remove('form-group-users-correcto');
        });

        document.getElementById('formMensajeError').classList.remove('form-mensaje-error-modif-activo');

        avisoModificarOk();

      } else {
        alert("Error en la consulta");
      }
    }
  };

  http.send(toSend);
}

//---Verificar que el usuario no exista

function validarUsuarioExiste($username) {
  const http = new XMLHttpRequest();
  const url = "controller/usuarios.controller.php";
  const params = {
    controller: "obtener",
    username: $username,
    username_o: document.getElementById(`usuario_modif`).value,
    from: 'edit'
  };
  const toSend = "request=" + JSON.stringify(params);

  http.open("POST", url);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const datos = JSON.parse(this.responseText);

      if (datos.success) {

        if (datos.data == 0) {
          document.getElementById(`usernameGroup`).classList.remove("form-group-users-incorrecto");
          document.getElementById(`usernameGroup`).classList.add("form-group-users-correcto");
          document.querySelector(`#usernameGroup i`).classList.add("fa-check-circle");
          document.querySelector(`#usernameGroup i`).classList.remove("fa-times-circle");
          document.querySelector(`#usernameGroup .form-input-user-existe`).classList.remove("form-input-user-existe-activo");
          campos["username"] = true;
        } else {
          document.getElementById(`usernameGroup`).classList.add("form-group-users-incorrecto");
          document.getElementById(`usernameGroup`).classList.remove("form-group-users-correcto");
          document.querySelector(`#usernameGroup i`).classList.add("fa-times-circle");
          document.querySelector(`#usernameGroup i`).classList.remove("fa-check-circle");
          document.querySelector(`#usernameGroup .form-input-user-existe`).classList.add("form-input-user-existe-activo");
          campos["username"] = false;
        }

      } else {
        alert("Error en la consulta");
      }
    }
  };

  http.send(toSend);
}

//---Cargo formulario a una variable y los inputs para validacion de campos

const form = document.getElementById("formUser");
const inputs = document.querySelectorAll("#formUser input");

//---Expresiones regulares de campos aceptadas
const expresiones = {
  username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  pass: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

//---Estado de campos para saber si está todo OK
const campos = {
  username: false,
  name: false,
  pass: false,
  email: false,
};

//---Chequeo dependiendo el campo

const validarForm = (e) => {
  switch (e.target.name) {
    case "username":
      validarCampo(expresiones.username, e.target, "username");

      if (campos["username"]) {
        validarUsuarioExiste(e.target.value);
      }
      break;
    case "name":
      validarCampo(expresiones.name, e.target, "name");
      break;
    case "pass":
      validarCampo(expresiones.pass, e.target, "pass");
      validarPassword2();
      break;
    case "pass_re":
      validarPassword2();
      break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`${campo}Group`).classList.remove("form-group-users-incorrecto");
    document.getElementById(`${campo}Group`).classList.add("form-group-users-correcto");
    document.querySelector(`#${campo}Group i`).classList.add("fa-check-circle");
    document.querySelector(`#${campo}Group i`).classList.remove("fa-times-circle");
    document.querySelector(`#${campo}Group .form-input-user-error`).classList.remove("form-input-user-error-activo");
    campos[campo] = true;
  } else {
    document.getElementById(`${campo}Group`).classList.add("form-group-users-incorrecto");
    document.getElementById(`${campo}Group`).classList.remove("form-group-users-correcto");
    document.querySelector(`#${campo}Group i`).classList.add("fa-times-circle");
    document.querySelector(`#${campo}Group i`).classList.remove("fa-check-circle");
    document.querySelector(`#${campo}Group .form-input-user-error`).classList.add("form-input-user-error-activo");
    campos[campo] = false;
  }
};

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById("pass");
  const inputPassword2 = document.getElementById("pass_re");

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`pass_reGroup`).classList.add("form-group-users-incorrecto");
    document.getElementById(`pass_reGroup`).classList.remove("form-group-users-correcto");
    document.querySelector(`#pass_reGroup i`).classList.add("fa-times-circle");
    document.querySelector(`#pass_reGroup i`).classList.remove("fa-check-circle");
    document.querySelector(`#pass_reGroup .form-input-user-error`).classList.add("form-input-user-error-activo");
    campos["pass"] = false;
  } else {
    document.getElementById(`pass_reGroup`).classList.remove("form-group-users-incorrecto");
    document.getElementById(`pass_reGroup`).classList.add("form-group-users-correcto");
    document.querySelector(`#pass_reGroup i`).classList.remove("fa-times-circle");
    document.querySelector(`#pass_reGroup i`).classList.add("fa-check-circle");
    document.querySelector(`#pass_reGroup .form-input-user-error`).classList.remove("form-input-user-error-activo");
    campos["pass"] = true;
  }
};

//---Chequeo por cada tecla levantada y desenfoque
inputs.forEach((input) => {
  input.addEventListener("keyup", validarForm);
  input.addEventListener("blur", validarForm);
});

//---Al presionar Modificar, chequear y actualizar

document.getElementById("btnModificar").addEventListener("click", (e) => {
  e.preventDefault();

  const isPassDisabled = document.getElementById('pass').getAttribute("disabled");

  if (isPassDisabled == '') {
    if (campos.username && campos.name && campos.email) {
      document.getElementById('btnModificar').setAttribute("disabled", "");
      editUser('no-passoword');
    } else {
      document.getElementById('formMensajeError').classList.add('form-mensaje-error-modif-activo');
    }
  } else {
    if (campos.username && campos.name && campos.pass && campos.email) {
      document.getElementById('btnModificar').setAttribute("disabled", "");
      editUser('passoword');
    } else {
      document.getElementById('formMensajeError').classList.add('form-mensaje-error-modif-activo');
    }
  }

});