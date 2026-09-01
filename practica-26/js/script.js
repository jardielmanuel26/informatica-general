//Práctica 26 - JavaScript

//1. Selección de elementos en HTML
let formulario = document.querySelector("#formPresupuesto");
let mensajeResultado = document.querySelector("#resultado");

function calcularPresupuesto(event) {
  event.preventDefault();

  // 2. Precios diarios por equipo según la consigna
  const PRECIO_PROYECTOR = 45000;
  const PRECIO_COMPUTADORA = 50000;
  const PRECIO_PANTALLA = 35000;

  // 3. Captura y conversión de los valores del formulario
  let cantProyectores = Number(document.querySelector("#proyectores").value) || 0;
  let cantComputadoras = Number(document.querySelector("#computadoras").value) || 0;
  let cantPantallas = Number(document.querySelector("#pantallas").value) || 0;
  let dias = Number(document.querySelector("#dias").value) || 0;

  // 4. Cálculo del costo subtotal diario y total por los días
  let costoDiario = (cantProyectores * PRECIO_PROYECTOR) + 
                    (cantComputadoras * PRECIO_COMPUTADORA) + 
                    (cantPantallas * PRECIO_PANTALLA);

  let totalSinDescuento = costoDiario * dias;
  let totalFinal = totalSinDescuento;
  let mensajeDescuento = "";

  // 5. Evaluación de la condición para aplicar el 10% de descuento
  if (totalSinDescuento > 500000) {
    let descuento = totalSinDescuento * 0.10;
    totalFinal = totalSinDescuento - descuento;
    mensajeDescuento = `<p>¡Aplica un 10% de descuento! (Ahorro: $${descuento.toLocaleString("es-AR")})</p>`;
  }

  // 6. Muestra el resultado en el HTML
  mensajeResultado.innerHTML = `
    <h3>Presupuesto Estimado</h3>
    <p>Subtotal: $${totalSinDescuento.toLocaleString("es-AR")}</p>
    ${mensajeDescuento}
    <p><strong>Total a pagar: $${totalFinal.toLocaleString("es-AR")}</strong></p>
  `;
}

// Vinculación del evento submit al formulario
formulario.addEventListener("submit", calcularPresupuesto);

/*
  Declaración de uso de IA:
  - Se consultó sobre la estructura del cálculo de presupuesto y el condicional para el descuento.
  - Se utilizó la lógica de descuento multiplicando por 0.90 para restar directamente el 10%.
  - Se descartó el uso de funciones complejas fuera de lo visto en clase.
*/