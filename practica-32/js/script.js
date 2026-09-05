//JavaScript - Práctica 32

// Selección de elementos del DOM 
const inputUsuario = document.querySelector("#numeroUsuario");
const btnAdivinar = document.querySelector("#btnAdivinar");
const elemMensaje = document.querySelector("#mensaje");
const elemIntentos = document.querySelector("#intentosRestantes");
const btnReiniciar = document.querySelector("#btnReiniciar");

// Variables globales del juego
let numeroSecreto;
let intentos;

// Función para inicializar o reiniciar el juego
function iniciarJuego() {
    // 1. Generar número al azar entre 1 y 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // 2. Definir los 10 intentos iniciales
    intentos = 10;

    // 3. Resetear interfaz y mensajes
    elemMensaje.innerText = "";
    elemIntentos.innerText = "Intentos restantes: " + intentos;
    inputUsuario.value = "";
    inputUsuario.disabled = false;
    btnAdivinar.disabled = false;
    btnReiniciar.style.display = "none";
}

// Función que procesa el intento del usuario
function probarSuerte() {
    
    let numeroIngresado = Number(inputUsuario.value);

    // Validación
    if (!numeroIngresado || numeroIngresado < 1 || numeroIngresado > 100) {
        elemMensaje.innerText = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    // Descontar intento
    intentos--;

    // Comprobación
    if (numeroIngresado === numeroSecreto) {
        elemMensaje.innerText = " ¡Felicidades! ¡Adivinaste el número (" + numeroSecreto + ")!";
        finalizarJuego();
    } else if (intentos === 0) {
        elemMensaje.innerText = " ¡Perdiste! Se te acabaron los intentos. El número era " + numeroSecreto + ".";
        finalizarJuego();
    } else {
        if (numeroIngresado < numeroSecreto) {
            elemMensaje.innerText = "El número a adivinar es MAYOR que " + numeroIngresado + ".";
        } else {
            elemMensaje.innerText = "El número a adivinar es MENOR que " + numeroIngresado + ".";
        }
        elemIntentos.innerText = "Intentos restantes: " + intentos;
        inputUsuario.value = "";
    }
}

// Función para deshabilitar controles al finalizar
function finalizarJuego() {
    elemIntentos.innerText = "Intentos restantes: " + intentos;
    inputUsuario.disabled = true;
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = "inline";
}

// Asignación de eventos mediante addEventListener
btnAdivinar.addEventListener("click", probarSuerte);
btnReiniciar.addEventListener("click", iniciarJuego);

// Iniciar el juego automáticamente al cargar el script
iniciarJuego();