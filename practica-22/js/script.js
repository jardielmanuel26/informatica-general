/* Práctica 22 - JavaScript*/

//Capturo los elementos 

let botonCalcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

//Defino el evento para el botón de cálculo

botonCalcular.addEventListener("click", function calcularPrecio() {
    let dato1 = document.querySelector("#num1").value;
    let dato2 = document.querySelector("#num2").value;
    
    //Hago el calculo para obtener el precio con descuento

    let montoDescuento = (Number (dato1) * Number(dato2)) / 100;
    let precioCondescuento = dato1 - montoDescuento;

    //Resultado del cálculo

    resultado.value = precioCondescuento;
});

/*Declaración de uso de IA: Se utilizó la herramienta Gemini para pedirle que revise y valide el código de los archivos HTML, CSS y JavaScript, diciéndome que tienen una estructura base funcional

pero presentan errores críticos de lógica, tipos de datos y maquetación CSS que afectan el cálculo y la visualización. De entre las idicaciones que me dio, añadí nuevos estilos al archivo CSS para el formulario y el

botón de cálculo, de esta forma se ve más prolijo. En el arhcivo JavaScript, reemplazé el nombre de la función y en el cálculo del montoDescuento puse a los datos como parámetros de la función Number

para convertirlos en valores numéricos y así evitar errores de concatenación. 
 
 Lo que descarté fue básicamente lo que aún no vimos como el atributo step de input y la función parseFloat.*/
 