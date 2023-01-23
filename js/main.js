const mainPath = "https://sebastianboari.github.io/JavaScript.github.io/"
const clases = [`${basePath}/clases/clase1.html`, `${basePath}/clases/clase2.html`, `${basePath}/clases/clase3.html`, `${basePath}/clases/clase4.html`, `${basePath}/clases/clase5.html`, `${basePath}/clases/clase6.html`, `${basePath}/clases/clase7.html`, `${basePath}/clases/clase8.html`, `${basePath}/clases/clase9.html`, `${basePath}/clases/clase10.html`, `${basePath}/clases/clase11.html`, `${basePath}/clases/clase12.html`, `${basePath}/clases/clase13.html`, `${basePath}/clases/clase14.html`, `${basePath}/clases/clase15.html`, `${basePath}/clases/clase16.html`, ];

const botonAnterior = document.querySelectorAll(".nav__botonAnterior");
const botonSiguiente = document.querySelectorAll(".nav__botonSiguiente");

let currentClass = 0;

botonAnterior.forEach((elementoActual) => {
    elementoActual.addEventListener('click', () => {
        if (currentClass > 0) {
            currentClass--;
            location.href = clases[currentClass];
        }
    });
});

botonSiguiente.forEach((elementoActual) => {
    elementoActual.addEventListener('click', () => {
        if (currentClass < clases.length - 1) {
            currentClass++;
            location.href = clases[currentClass];
        }
    });
});