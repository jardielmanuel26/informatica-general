
//Declaracación de variables
let precioSindescuento = 10000

let porcentajeDescuento = 50

//Cálculo del total a pagar con el descuento.

let montoDescuento = (precioSindescuento * porcentajeDescuento) / 100;
let precioCondescuento = precioSindescuento - montoDescuento;

//Consola con resultados
console.log("Precio sin descuento es $ " + precioSindescuento);
console.log("El descuento es " + porcentajeDescuento + "%");
console.log("Precio con descuento es $ " + precioCondescuento);
