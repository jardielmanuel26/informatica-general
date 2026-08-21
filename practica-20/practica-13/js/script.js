/*Interacciones guiadas por IA para la práctica 20*/

//1. Mensaje de bienvenida inicial (index.html)
alert('¡Bienvenido al sitio de Río de Janeiro!');

// 2. Modificar el título principal al hacer clic
let tituloPrincipal = document.querySelector('h2');

tituloPrincipal.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});

//2.1 Mofico los títulos y subtitulos de las playas.

let titulo1 = document.querySelector("#Flamengo");

titulo1.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});

let titulo2 = document.querySelector("#Botafogo");

titulo2.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});

let titulo3 = document.querySelector("#Copacabana");

titulo3.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});

let titulo4 = document.querySelector("#Ipanema");

titulo4.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});

let titulo5 = document.querySelector("#Barra");

titulo5.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});

let titulo6 = document.querySelector("#Leblon");

titulo6.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});

let titulo7 = document.querySelector("#Reserva");

titulo7.addEventListener('click', function() {
    this.innerText = '✨ ' + this.innerText + ' ✨';
    this.style.color = '#0066cc';
});




// 3. Resaltar el primer párrafo al pasar el cursor
let primerParrafo = document.querySelector('p');

primerParrafo.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#ffffcc';
});

primerParrafo.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// 4. Ocultar la primera imagen al hacer clic sobre ella
let primeraImagen = document.querySelector('main img');

primeraImagen.addEventListener('click', function() {
    this.style.display = 'none';
});

//5.Ocultar las imagenes de las playas al hacer clic sobre ellas
let imagenFlamengo = document.querySelector('#flan');

imagenFlamengo.addEventListener('click', function() {
    this.style.display = 'none';
});

let imagenBotafogo = document.querySelector('#bota');

imagenBotafogo.addEventListener('click', function() {
    this.style.display = 'none';
});

let imagenCopacabana = document.querySelector('#copa');

imagenCopacabana.addEventListener('click', function() {
    this.style.display = 'none';
});

let imagenIpanema = document.querySelector('#ipa');

imagenIpanema.addEventListener('click', function() {
    this.style.display = 'none';
});

let imagenBarra = document.querySelector('#bar');

imagenBarra.addEventListener('click', function() {
    this.style.display = 'none';
});

let imagenLeblon = document.querySelector('#lebl');

imagenLeblon.addEventListener('click', function() {
    this.style.display = 'none';
});

let imagenReserva = document.querySelector('#reser');

imagenReserva.addEventListener('click', function() {
    this.style.display = 'none';
});
