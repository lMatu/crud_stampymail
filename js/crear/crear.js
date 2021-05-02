//Registrar Usuario si todo está OK
function saveUser() {
  const http = new XMLHttpRequest();
  const url = "controller/usuarios.controller.php";
  const params = {
    controller: "registrar",
    dataUser: {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      pass: document.getElementById("pass").value,
      email: document.getElementById("email").value,
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

        document.getElementById('formMensajeExito').classList.add('form-mensaje-exito-activo');
        //setTimeout(() => {
        document.getElementById('formMensajeExito').classList.remove('form-mensaje-exito-activo');
        //window.location = "?p=crear";
        //}, 2000);

        document.querySelectorAll('.form-group-users-correcto').forEach((icono) => {
          icono.classList.remove('form-group-users-correcto');
        });

        document.getElementById('formMensajeError').classList.remove('form-mensaje-error-activo');

        //document.getElementById("formMensajeExito").innerHTML = "Usuario Registrado con el ID: <b>" + datos.id + "</b>";
        avisoRegistrarOk(datos.id);

      } else {
        alert("Error en la consulta");
      }
    }
  };

  http.send(toSend);
}

const isVisible = "is-visible";

function avisoRegistrarOk($id) {

  document.getElementById("text_aviso").innerHTML = "Usuario Registrado con el ID: <b>" + $id + "</b>";
  document.getElementById("avisoModal").classList.add(isVisible);
}

//------Cargo home
function updateCrear() {
  window.location = "?p=crear";
}

//Validar si ya existe el Usuario
function validarUsuarioExiste($username) {
  const http = new XMLHttpRequest();
  const url = "controller/usuarios.controller.php";
  const params = {
    controller: "obtener",
    username: $username,
    username_o: null,
    from: 'create'
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

const form = document.getElementById("formUser");
const inputs = document.querySelectorAll("#formUser input");

//Expresiones regulares de campos aceptadas
const expresiones = {
  username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  pass: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

//Estado de campos para saber si está todo OK
const campos = {
  username: false,
  name: false,
  pass: false,
  email: false,
};

//Chequeo dependiendo el campo
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

//Chequeo por cada teclad levantada y desenfoque
inputs.forEach((input) => {
  input.addEventListener("keyup", validarForm);
  input.addEventListener("blur", validarForm);
});

//Al presionar Registrar chequear y grabar
document.getElementById("btnRegistrar").addEventListener("click", (e) => {
  e.preventDefault();

  if (campos.username && campos.name && campos.pass && campos.email) {
    document.getElementById('btnRegistrar').setAttribute("disabled", "");
    saveUser();
  } else {
    document.getElementById('formMensajeError').classList.add('form-mensaje-error-activo');
  }

});