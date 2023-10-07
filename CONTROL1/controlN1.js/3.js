/*Desarrollar un programa que solicite al usuario un nombre de usuario (nickname) y verifique si cumple con ciertos criterios
de validez. El nombre de usuario debe cumplir con los siguientes requisitos para considerarse válido:
*/

//Debe comenzar con una letra y terminar con un número.

/*El programa debe mostrar un mensaje en el navegador indicando si el nombre de usuario ingresado es válido o no,
según los criterios mencionados. Si el nombre de usuario cumple con todos los criterios, se mostrará un mensaje que indica
que el nombre de usuarui no cumple con los requisitos solicitados.
*/

let nickname = prompt("Ingrese un nombre de usuario: ");

function verificarNombreUsuario(nickname) {
    //Debe contener al menos 6 caracteres de longitud
  if (nickname.length < 6) {
    return "El nombre de usuario debe tener al menos 6 caracteres";
  }
  
  if (!/^[a-zA-Z]/.test(nickname)) {
    return "El nombre de usuario debe comenzar con una letra";
  }

  if (!/\d$/.test(nickname)) {
    return "El nombre de usuario debe terminar con un número";
  }

  //Debe contener letras (mayúsculas o minusculas) además de ser números.
  if (!/^[a-zA-Z0-9]+$/.test(nickname)) {
    return "El nombre de usuario debe contener solo letras (mayúsculas o minúsculas) y números";
  }

  return "El nombre de usuario es válido";
}

let resultado = verificarNombreUsuario(nickname);

document.write(resultado);