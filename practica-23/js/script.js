//Práctica 23 - JavaScript

//Declaro una función para agrupar el código y evitar que se ejecute al cargar la página
//function calcularPupitres(){

//Capturo los elementos
let a001 = document.querySelector("#salon001");
let a101 = document.querySelector("#salon101");
let a201 = document.querySelector("#salon201");
let a301 = document.querySelector("#salon301");
let a501 = document.querySelector("#salon501");

//Determino el salon con más pupitres y cuántos tiene.
let maxPupitres = a001;
    let salonMax = "Salon 001";

    if (a101 > maxPupitres) {
        maxPupitres = a101;
        salonMax = "Salon 101";
    }
    if (a201 > maxPupitres) {
        maxPupitres = a201;
        salonMax = "Salon 201";
    }
    if (a301 > maxPupitres) {
        maxPupitres = a301;
        salonMax = "Salon 301";
    }
    if (a501 > maxPupitres) {
        maxPupitres = a501;
        salonMax = "Salon 501";
    }

//Determino el salon con menos pupitres y cuántos tiene.
let minPupitres = a001;
    let salonMin = "Salon 001";

    if (a101 < minPupitres) {
        minPupitres = a101;
        salonMin = "Salon 101";
    }
    if (a201 < minPupitres) {
        minPupitres = a201;
        salonMin = "Salon 201";
    }
    if (a301 < minPupitres) {
        minPupitres = a301;
        salonMin = "Salon 301";
    }
    if (a501 < minPupitres) {
        minPupitres = a501;
        salonMin = "Salon 501";
    }

// Calculo cuántos pupitres hay que comprar para llegar a 80 por aula.
    let faltantesA001 = 0;
    let faltantesA101 = 0;
    let faltantesA201 = 0;
    let faltantesA301 = 0;
    let faltantesA501 = 0;

    if (a001 < 80) {
        faltantesA001 = 80 - a001;
    }
    if (a101 < 80) {
        faltantesA101 = 80 - a101;
    }
    if (a201 < 80) {
        faltantesA201 = 80 - a201;
    }
    if (a301 < 80) {
        faltantesA301 = 80 - a301;
    }
    if (a501 < 80) {
        faltantesA501 = 80 - a501;
    }

    let totalAComprar = faltantesA001 + faltantesA101 + faltantesA201 + faltantesA301 + faltantesA501;

//Muestro los resultados en la página
    let contenedorResultado = document.querySelector("#resultado");
    contenedorResultado.innerHTML = 
        "<p><strong>Salon con más pupitres:</strong> " + salonMax + " (" + maxPupitres + " pupitres)</p>" +
        "<p><strong>Salon con menos pupitres:</strong> " + salonMin + " (" + minPupitres + " pupitres)</p>" +
        "<p><strong>Pupitres a comprar:</strong> Se deben comprar " + totalAComprar + " pupitres en total para completar 80 en todos los salones.</p>";
//}


