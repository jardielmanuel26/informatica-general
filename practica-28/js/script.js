/* Práctica 28 - JavaScript */

// Selección del botón del menú
let btnOrganizar = document.querySelector("#btn-organizar");

btnOrganizar.addEventListener("click", function () {
  // Inicializamos contadores para cada opción de menú
  let contPasta = 0;
  let contPollo = 0;
  let contEnsalada = 0;

  // Ciclo for para registrar los 12 invitados (por lo tanto habrán 12 iteraciones en total)
  for (let i = 1; i <= 12; i++) {
    let opcion = prompt("Invitado " + i + " de 12:\nIngrese el menú elegido:\n1: Pasta\n2: Pollo\n3: Ensalada");

    // Validación de datos mediante estructura while.
    while (opcion !== "1" && opcion !== "2" && opcion !== "3") {
      alert("Opción no válida. Ingrese 1, 2 o 3.");
      opcion = prompt("Invitado " + i + " de 12:\nIngrese el menú elegido:\n1: Pasta\n2: Pollo\n3: Ensalada");
    }

    // Sumar al contador según el menú seleccionado (acumulación)
    if (opcion === "1") {
      contPasta++;
    } else if (opcion === "2") {
      contPollo++;
    } else if (opcion === "3") {
      contEnsalada++;
    }
  }

  // Cálculo de porcentajes. Dividimos la cantidad de personas que eligieron ese menú por la cantidad total de invitados (12) y lo multiplicamos por 100.
  let porcPasta = (contPasta / 12) * 100;
  let porcPollo = (contPollo / 12) * 100;
  let porcEnsalada = (contEnsalada / 12) * 100;

  // Determinar el menú más elegido comparando valores
  let menuMasElegido = "";

  if (contPasta >= contPollo && contPasta >= contEnsalada) {
    menuMasElegido = "Pasta";
  } else if (contPollo >= contPasta && contPollo >= contEnsalada) {
    menuMasElegido = "Pollo";
  } else {
    menuMasElegido = "Ensalada";
  }

  // Mostrar los resultados en la página
  let resultados = document.querySelector("#resultados");
  resultados.innerHTML = 
    "<h2>Resultados de la Cena</h2>" +
    "<p>Porcentaje de Pasta: " + porcPasta + "%</p>" +
    "<p>Porcentaje de Pollo: " + porcPollo + "%</p>" +
    "<p>Porcentaje de Ensalada: " + porcEnsalada + "%</p>" +
    "<p><strong>Menú más elegido:</strong> " + menuMasElegido + "</p>";
});