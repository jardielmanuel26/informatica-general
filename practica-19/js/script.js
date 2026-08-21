/*Javascript Práctica 19*/

let imagen = document.querySelector("img");
imagen.addEventListener("click", function(){
    imagen.style.display = "none";
});

let titulo = document.querySelector("h1");
titulo.addEventListener("click", function() {
    titulo.style.color = "red";
});

let subtitulo = document.querySelector("h2");
subtitulo.addEventListener("click", function() {
    subtitulo.style.color = "red";
});

let parrafo = document.querySelector("#primerpárrafo");
parrafo.addEventListener("click", function() {
    parrafo.style.color = "red";
});

let segundoParrafo = document.querySelector("#segundopárrafo");
segundoParrafo.addEventListener("click", function() {
    segundoParrafo.style.color = "red";
});

let articulo = document.querySelector("#discografia");
articulo.addEventListener("click", function() {
    articulo.style.color = "red";
});

let pieDePagina = document.querySelector("footer");
pieDePagina.addEventListener("click", function(){
    pieDePagina.style.color = "red";
});
