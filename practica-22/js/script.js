/* Práctica 22 - JavaScript*/

//Capturo los elementos 

let botonCalcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

//Defino el evento para el botón de cálculo

botonCalcular.addEventListener("click", function cálculo() {
    let dato1 = document.querySelector("#num1").value;
    let dato2 = document.querySelector("#num2").value;
    
    //Hago el calculo para obtener el precio con descuento

    let montoDescuento = (dato1 * dato2) / 100;
    let precioCondescuento = dato1 - montoDescuento;

    //Resultado del cálculo

    resultado.value = precioCondescuento;
});
