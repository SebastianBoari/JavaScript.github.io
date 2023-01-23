const mainPath = "https://sebastianboari.github.io/JavaScript.github.io/"
const clases = [`${mainPath}/clases/clase1.html`, `${mainPath}/clases/clase2.html`, `${mainPath}/clases/clase3.html`, `${mainPath}/clases/clase4.html`, `${mainPath}/clases/clase5.html`, `${mainPath}/clases/clase6.html`, `${mainPath}/clases/clase7.html`, `${mainPath}/clases/clase8.html`, `${mainPath}/clases/clase9.html`, `${mainPath}/clases/clase10.html`, `${mainPath}/clases/clase11.html`, `${mainPath}/clases/clase12.html`, `${mainPath}/clases/clase13.html`, `${mainPath}/clases/clase14.html`, `${mainPath}/clases/clase15.html`, `${mainPath}/clases/clase16.html`, ];

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