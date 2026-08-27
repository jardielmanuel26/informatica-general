/*Práctica 21 - Javascript*/

/*Selecciono el mensaje de bienvenida por su ID*/
let mensajeBienvenida = document.querySelector("#bienvenida");

/*Pregunta sobre la personalización del mensaje de bienvenida*/
let respuesta = confirm("¿Desea personalizar la bienvenida?");

/* Uso de la estructura if + else para agregar o no el nombre al mensaje de bienvenida*/
if (respuesta) {
    let nombre = prompt("Ingresar nombre", "aquí");
    if (nombre) {
        mensajeBienvenida.innerText = "Saludos "  + nombre + "! Te doy la bienvenida a mi página. En esta ocasión se presentarán los pasos para preparar una deliciosa taza de café con espuma.";
    }
} else {
    mensajeBienvenida.innerText = "Saludos! Te doy la bienvenida a mi página. En esta ocasión se presentarán los pasos para preparar una deliciosa taza de café con espuma.";
};