//Práctica 25 - JavasScript

// Seleccionamos el formulario y el contenedor del resultado
let formulario = document.querySelector("#formSeries");
let mensajeResultado = document.querySelector("#resultado");

// Función para procesar la recomendación
function recomendarSerie(event) {
  // Evitamos que la página se recargue al enviar el formulario
  event.preventDefault();

  // Capturamos los valores de los campos
  let nombre = document.querySelector("#nombre").value;
  let edad = document.querySelector(Number("#edad")).value;
  let genero = document.querySelector("#generoSerie").value;

  let serieSugerida = "";

  // Evaluación condicional según edad y género
  if (genero === "comedia") {
    if (edad < 18) {
      serieSugerida = "El Chavo del 8";
    } else {
      serieSugerida = "Game of Thrones";
    }
  } else if (genero === "accion") {
    if (edad < 18) {
      serieSugerida = "Cobra Kai";
    } else {
      serieSugerida = "Stranger Things";
    }
  } else if (genero === "romance") {
    if (edad < 18) {
      serieSugerida = "Heartstopper";
    } else {
      serieSugerida = "Bridgerton";
    } 
  } else if (genero === "terror") {
    if (edad < 18) {
      serieSugerida = "Wednesday";
    } else {
      serieSugerida = "IT: Welcome to Derry";
    }
  } else if (genero === "documental") {
    if (edad < 18) {
      serieSugerida = "Our Planet";
    } else {
      serieSugerida = "No te metas con los gatos: Un asesino en internet"
    }
  }

  // Mostramos el mensaje con el saludo y la sugerencia
  mensajeResultado.textContent = "¡Hola " + nombre + "Según tu edad" + edad + "y tu género preferido, te sugerimos ver: " + serieSugerida ;
}

// Escuchamos el evento button del formulario
formulario.addEventListener("button", recomendarSerie);