/* Práctica 24 - JavaScript*/

//Defino la función para tirar el dado
function tirarDado() {

//Genero un número entero al azar entre 1 y 6
let numeroAzar = Math.floor(Math.random() * 6) + 1;

//Selecciono la etiqueta "img" del HTML
let imgDado = document.querySelector("#imagendado");

//Modifico el atributo "src" de la imagen con el número obtenido
imgDado.src = numeroAzar + ".png"
}

//Defino el evento para llevar a cabo toda la función.

let boton = document.querySelector("#dado");
boton.addEventListener("click", tirarDado);