/* Práctica 29 - JavaScript */

//Selecciono el botón para comenzar la prueba.
let btnPrueba = document.querySelector("#btnPrueba")

btnPrueba.addEventListener("click", function(){

// Arrays con los enunciados y sus respectivas respuestas correctas. 
let preguntas = [
        "1. ¿En qué año se fundó la UBA?",
        "2. ¿Cuánto es 5 + 5?",
        "3. ¿Cuál es la capital de Argentina?",
        "4. ¿De qué color es el cielo despejado?",
        "5. ¿Cuál es el idioma oficial de Argentina?",
        "6. ¿Cuántos días tiene un año bisiesto?",
        "7. ¿Qué bucle se ejecuta al menos una vez? (for, while, do-while)",
        "8. ¿Qué propiedad indica la longitud de un array?",
        "9. ¿Con qué palabra clave declaramos una variable?",
        "10. ¿Cuál es el índice de la primera posición de un array?"
    ];

    let respuestasCorrectas = [
        "1821",
        "10",
        "Buenos Aires",
        "azul",
        "español",
        "366",
        "do-while",
        "length",
        "let",
        "0"
    ];

    // Contador de respuestas correctas
    let contadorCorrectas = 0;

    // Recorrido con estructura for basada en la cantidad de preguntas
    for (let i = 0; i < preguntas.length; i++) {
        let respuestaUsuario = prompt(preguntas[i]);

        // Validación si el usuario presiona Cancelar o envía vacío
        if (respuestaUsuario === null) {
            respuestaUsuario = "";
        }

        // Comparación de la respuesta ingresada con la correcta
        if (respuestaUsuario == respuestasCorrectas[i]) {
            alert("¡Respuesta Correcta!");
            contadorCorrectas++;
        } else {
            alert("Respuesta Incorrecta. La respuesta correcta era: " + respuestasCorrectas[i]);
        }
    }

    // Mostrar el resultado final en el HTML
    let Resultados = document.querySelector("#resultados");
    Resultado.innerHTML = "Has contestado correctamente " + contadorCorrectas + " de " + preguntas.length + " preguntas.";
})
