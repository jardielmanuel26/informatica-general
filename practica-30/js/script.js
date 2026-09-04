/* Práctica 30 - JavaScript */

let numeroApostado = 1; // Apuesta inicial por defecto

// Array con las rutas de las imágenes de los dados (del 1 al 6)
const imagenesDados = [
  '',
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png',
  'img/6.png'
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
      <div id="${idDado}">
        <img src="${imagenesDados[valorDado]}" alt="Dado ${valorDado}">
      </div>
    `;

  }

  // Mostrar mensaje final en el contenedor del id resultados
  let mensaje = document.getElementById("resultados");
  mensaje.innerText = "Apostaste al " + numeroApostado + ". Coincidieron " + contadorCoincidencias + " de 5 dados.";
}

// Asignamos el evento click a los 6 botones de apuesta usando un ciclo for
for (let i = 1; i <= 6; i++) {
  let boton = document.querySelector("#btn-dado-" + i);
  boton.addEventListener("click", function() {
    seleccionarApuesta(i);
  });
}

// Asignamos el evento click al botón de tirar los dados
let btnTirar = document.querySelector("#btn-tirar");
btnTirar.addEventListener("click", tirarDados);

// Inicializar resaltado visual en el primer botón al cargar la página
seleccionarApuesta(1);