/* Práctica 18 Modificar Dom*/

alert("Al aceptar cambia todo");

let titulo = document.querySelector("h1");
titulo.style.backgroundColor = "violet";
titulo.style.color = "red";
titulo.innerText = "Caspar Fiedrich: El romanticismo y la naturaleza";

let parrafo = document.querySelector("p");

parrafo.style.backgroundColor = "orange";
parrafo.style.color = "yellow";
parrafo.innerHTML += "Para mí, la obra intenta capturar el sentimiento del autor tras contemplar ese paisaje en uno de sus viajes."

let pieDePagina = document.querySelector("#pie-pagina");

pieDePagina.innerText = "Jardiel Salazar";

let segundoParrafo= document.querySelector("#observación")

segundoParrafo.style.backgroundColor = "brown"
segundoParrafo.style.color = "blue"