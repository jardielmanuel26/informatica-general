/* Práctica 30 - JavaScript */

let numeroApostado = 1; // Apuesta inicial por defecto

// Array con las rutas de las imágenes de los dados (del 1 al 6)
const imagenesDados = [
  '',
  "img/dado1.png"
  'img/dado2.png',
  'img/dado3.png',
  'img/dado4.png',
  'img/dado5.png',
  'img/dado6.png'
];

// Función para seleccionar la apuesta al presionar un botón
function seleccionarApuesta(numero) {
  numeroApostado = numero;
  
  // Recorremos los 6 botones usando sus id únicos en un bucle for
  for (let i = 1; i <= 6; i++) {
    let boton = document.querySelector("#btn-dado-" + i);
    if (i === numero) {
      boton.style.backgroundColor = "#4f46e5";
      boton.style.color = "#ffffff";
    } else {
      boton.style.backgroundColor = "#ffffff";
      boton.style.color = "#4f46e5";
    }
  }
}

// Inicializar resaltado visual en el primer botón
seleccionarApuesta(1);

// Función principal para tirar los 5 dados al azar
function tirarDados() {
  let dadosObtenidos = [];
  let contadorCoincidencias = 0; 
  let contenedor = document.querySelector("#dados");
  contenedor.innerHTML = "";

  // Bucle for para tirar 5 dados al azar
  for (let i = 0; i < 5; i++) {
    let valorDado = Math.floor(Math.random() * 6) + 1;
    dadosObtenidos.push(valorDado); 

    // Si coincide con la apuesta, aumentamos el contador
    if (valorDado === numeroApostado) {
      contadorCoincidencias++;
    }

    // Se genera un id único identificando si coincide o no
    let idDado = (valorDado === numeroApostado) ? "dado-" + (i + 1) + "-coincide" : "dado-" + (i + 1);

    // Se inserta la etiqueta <img> dentro del HTML
    contenedor.innerHTML += `
      <div id="idDado">
        <img src="imagenesDados[valorDado]" alt="Dado valorDado">
      </div>
    `;
  }

  // Mostrar mensaje final en el contenedor del id resultados
  let mensaje = document.querySelector("#resultados");
  mensaje.innerText = "Apostaste al" + numeroApostado +. "Coincidieron" + contadorCoincidencias + "de 5 dados.";
}
