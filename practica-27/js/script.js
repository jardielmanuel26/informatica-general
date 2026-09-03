//Práctica 27 - Comprando libros

function generarInforme() {
    let contenedorResultados = document.querySelector("#resultados");
    contenedorResultados.innerHTML = ""; //Elimina resultados anteriores del informe.

// 1. Pido y valido la cantidad de libros comprados
    let cantidadLibros = Number(prompt("¿Cuántos libros compraste en la Feria del Libro?"));

    while (isNaN(cantidadLibros) || cantidadLibros <= 0) {
        cantidadLibros = Number(prompt("Dato inválido. Ingrese un número de libros válido (mayor a 0):")); //Se utiliza una estructura while para repetir la consulta mientras la condición de entrada sea errónea.
    }

//Array para almacenar los precios
let precios = [];

// 2. Pido y valido el precio de cada libro mediante un bucle
    for (let i = 0; i < cantidadLibros; i++) {
        let precio = Number(prompt("Ingrese el precio del libro " + (i + 1) + ":"));

        while (isNaN(precio) || precio <= 0) {
            precio = Number(prompt("Precio inválido. Ingrese un precio mayor a 0 para el libro " + (i + 1) + ":"));
        }

        precios.push(precio);
    }

    // 3. Cálculos utilizando las operaciones vistos en clase

    // Total gastado (Suma con acumulador)
    let totalGastado = 0;
    for (let i = 0; i < precios.length; i++) {
        totalGastado += precios[i];
    }

    // Promedio de precio
    let promedioPrecio = totalGastado / precios.length;

    // Precio más caro y precio más barato
    let precioMasCaro = precios[0];
    let precioMasBarato = precios[0];

    for (let i = 1; i < precios.length; i++) {
        if (precios[i] > precioMasCaro) {
            precioMasCaro = precios[i];
        }
        if (precios[i] < precioMasBarato) {
            precioMasBarato = precios[i];
        }
    }

// 4. Muestro los resultados en la página
    contenedorResultados.innerHTML = 
        "<p><strong>Cantidad de libros comprados:</strong> " + precios.length + "</p>" +
        "<p><strong>Total gastado:</strong> $" + totalGastado + "</p>" +
        "<p><strong>Precio del libro más caro:</strong> $" + precioMasCaro + "</p>" +
        "<p><strong>Precio del libro más barato:</strong> $" + precioMasBarato + "</p>" +
        "<p><strong>Promedio por libro:</strong> $" + promedioPrecio + "</p>";
}

// Vinculación del evento desde JavaScript
let botonIngresar = document.querySelector("#btn-ingresar");
botonIngresar.onclick = generarInforme;
