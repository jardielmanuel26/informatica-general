//Práctica 31 - JavaScript

// Arrays paralelos para guardar la información
let nombres = [];
let montos = [];

// Selección de elementos 
let inputNombre = document.querySelector("#nombre");
let inputMonto = document.querySelector("#monto");
let btnAgregar = document.querySelector("#btnAgregar");
let btnCalcularPromedio = document.querySelector("#btnCalcularPromedio");
let btnDescuento = document.querySelector("#btnDescuento");
let divResultados = document.querySelector("#resultados");

// Evento 1: Agregar cliente al hacer clic
btnAgregar.addEventListener("click", function() {
    let nombreIngresado = inputNombre.value;
    let montoIngresado = Number(inputMonto.value);

    // Validación básica con elementos de la clase
    if (nombreIngresado !== "" && montoIngresado > 0) {
        nombres.push(nombreIngresado);
        montos.push(montoIngresado);

        divResultados.innerHTML = "<p>Cliente registrado: " + nombreIngresado + " - Monto: $" + montoIngresado + "</p>";

        // Limpiar cajas de texto
        inputNombre.value = "";
        inputMonto.value = "";
    } else {
        alert("Por favor, ingrese un nombre válido y un monto mayor a 0.");
    }
});

// Evento 2: Calcular total y promedio
btnCalcularPromedio.addEventListener("click", function() {
    let cantidadClientes = nombres.length;

    if (cantidadClientes === 0) {
        divResultados.innerHTML = "<p>No hay clientes registrados aún.</p>";
    } else {
        // Patrón clásico de suma acumulada con estructura for
        let sumaTotales = 0;
        for (let i = 0; i < montos.length; i++) {
            sumaTotales = sumaTotales + montos[i];
        }

        let promedio = sumaTotales / cantidadClientes;

        divResultados.innerHTML = "<p><strong>Cantidad total de clientes:</strong> " + cantidadClientes + "</p>" +
                                  "<p><strong>Promedio de compra por cliente:</strong> $" + promedio + "</p>";
    }
});

// Evento 3: Buscar cliente con mayor compra y aplicar descuento
btnDescuento.addEventListener("click", function() {
    if (montos.length === 0) {
        divResultados.innerHTML = "<p>No hay clientes registrados para procesar.</p>";
    } else {
        // Patrón clásico para hallar el valor máximo
        let maximoMonto = montos[0];
        let indiceMaximo = 0;

        for (let i = 1; i < montos.length; i++) {
            if (montos[i] > maximoMonto) {
                maximoMonto = montos[i];
                indiceMaximo = i;
            }
        }

        let clienteMayor = nombres[indiceMaximo];
        let porcentajeDescuento = 0;

        // Estructura condicional para calcular el porcentaje
        if (maximoMonto > 50000) {
            porcentajeDescuento = 0.30;
        } else {
            porcentajeDescuento = 0.15;
        }

        let montoDescuento = maximoMonto * porcentajeDescuento;
        let montoFinal = maximoMonto - montoDescuento;

        divResultados.innerHTML = "<p><strong>Cliente con mayor compra:</strong> " + clienteMayor + "</p>" +
                                  "<p><strong>Monto original:</strong> $" + maximoMonto + "</p>" +
                                  "<p><strong>Descuento aplicado:</strong> $" + montoDescuento + "</p>" +
                                  "<p><strong>Monto final a pagar:</strong> $" + montoFinal + "</p>";
    }
} );
