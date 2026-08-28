/*Práctica 21 - Javascript*/

/*Selecciono el mensaje de bienvenida por su ID*/
let mensajeBienvenida = document.querySelector("#bienvenida");

/*Pregunto sobre la personalización del mensaje de bienvenida*/
let respuesta = confirm("¿Desea personalizar la bienvenida?");

/* Uso la estructura if + else para agregar o no el nombre al mensaje de bienvenida*/
if (respuesta) {
    let nombre = prompt("Ingresar nombre", "aquí");
    if (nombre) {
        mensajeBienvenida.innerText = "Saludos "  + nombre + "! Te doy la bienvenida a mi página. En esta ocasión se presentarán los pasos para preparar una deliciosa taza de café con espuma.";
    }
} else {
    mensajeBienvenida.innerText = "Saludos! Te doy la bienvenida a mi página. En esta ocasión se presentarán los pasos para preparar una deliciosa taza de café con espuma.";
};

/*Selecciono las instrucciones del café por su ID*/
let instruccionesCafe = document.querySelector("#instrucciones");

/*Pregunto sobre el estilo de las instrucciones*/
let respuestaDarkMode = confirm("¿Prefiere leer las instrucciones en dark mode?");

/*Uso la estructura if + else para cambiar o no el estilo de las instrucciones*/
if (respuestaDarkMode) {
    instruccionesCafe = document.querySelector("#instrucciones");
    instruccionesCafe.style.color = "white";
    instruccionesCafe.style.backgroundColor = "black";
} else {
    instruccionesCafe = document.querySelector("#instrucciones");
    instruccionesCafe.style.color = "black";
    instruccionesCafe.style.backgroundColor = "white";
};

/*Selecciono el mensaje de despedida por su ID*/
let mensajeDespedida = document.querySelector("#despedida");

/*Pregunto sobre la hora del dia*/
let respuestaHora = prompt("Ingresar hora del día (Ingresar un numero de 0 a 23) ", "aquí");

/*Uso la estructura if + else if + else para desear buenos dias, tardes o noches*/
if (respuestaHora >= 6 && respuestaHora < 12) {
    mensajeDespedida.innerText = "Espero que hayas podido seguir los pasos para probar una riquísima taza de café con espuma. Gracias por visitar la página y que comiences el día con mucha energía!!! Buenos dias";
} else if (respuestaHora >= 12 && respuestaHora < 20) {
    mensajeDespedida.innerText = "Espero que hayas podido seguir los pasos para probar una riquísima taza de café con espuma. Gracias por visitar la página y que comiences el día con mucha energía!!! Buenas tardes";
} else {
    mensajeDespedida.innerText = "Espero que hayas podido seguir los pasos para probar una riquísima taza de café con espuma.  Gracias por visitar la página y que comiences el día con mucha energía!!! Buenas noches";
}