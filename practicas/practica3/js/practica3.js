// Actividades practicas de repaso a clases anteriores: 

// DOM y EVENTOS

// Primer nivel (10 ejercicios): 
// 1- Crea una página HTML con una lista de elementos dentro de un elemento "ul" (por ejemplo, "li" con los nombres de frutas). Usa la función "getElementsByTagName" para obtener todos los elementos "li" y guárdalos en una variable.

// 2- Usa un ciclo "for" para recorrer todos los elementos "li" y cambiar el color de fondo de cada uno al hacer clic en ellos.

// 3- Añade un botón a tu página HTML y usa la función "addEventListener" para asignarle un manejador de eventos que muestre un mensaje en la consola cuando se haga clic en el botón.

// 4- Usa la función "getElementById" para obtener un elemento de tu página HTML y cambiar su contenido usando la propiedad "textContent".

// 5- Crea un elemento "div" nuevo y añádelo a tu página HTML usando la función "createElement" y luego la función "appendChild".

// 6- Usa la función "querySelector" para obtener un elemento de tu página HTML por su clase y luego cambiar su estilo usando la propiedad "style".

// 7- Usa la función "querySelectorAll" para obtener todos los elementos de tu página HTML con una determinada clase y luego usa un ciclo "for" para recorrerlos y cambiar su estilo.

// 8- Crea una función que añada un nuevo elemento a tu página HTML cada vez que se ejecute. Usa la función "createElement" y luego la función "appendChild" para añadir el elemento a tu página.

// 9- Crea un formulario en tu página HTML y usa la función "addEventListener" para asignarle un manejador de eventos que valide los datos del formulario cuando se envíe.

// 10- Usa la función "removeChild" para eliminar un elemento de tu página HTML.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Nivel dos (10 ejercicios):

// 1- Crea una página HTML con una tabla (por ejemplo, con nombres de personas y sus edades). Usa la función "getElementsByTagName" para obtener todos los elementos "td" y guárdalos en una variable.

// 2- Usa un ciclo "for" para recorrer todos los elementos "td" y cambiar el color de letra de cada uno al pasar el cursor sobre ellos.

// 3- Añade un botón a tu página HTML y usa la función "addEventListener" para asignarle un manejador de eventos que oculte todos los elementos "td" cuando se haga clic en el botón.

// 4- Usa la función "getElementsByClassName" para obtener varios elementos de tu página HTML y cambiar su contenido usando la propiedad "innerHTML".

// 5- Crea un elemento "input" nuevo y añádelo a tu página HTML usando la función "createElement" y luego la función "insertBefore".

// 6- Usa la función "querySelector" para obtener un elemento de tu página HTML por su id y luego cambiar su estilo usando el método "setAttribute".

// 7- Usa la función "querySelectorAll" para obtener todos los elementos de tu página HTML con una determinada clase y luego usa un ciclo "for" para recorrerlos y eliminarlos de la página usando la función "remove".

// 8- Crea una función que duplique un elemento de tu página HTML cada vez que se ejecute. Usa la función "cloneNode" y luego la función "appendChild" para añadir el elemento duplicado a tu página.

// 9- Crea una lista desplegable en tu página HTML y usa la función "addEventListener" para asignarle un manejador de eventos que muestre un mensaje según la opción seleccionada.

// 10- Usa la función "replaceChild" para reemplazar un elemento de tu página HTML con otro elemento.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Nivel tres (5 ejercicios):

// 1- Crea una página HTML con una galería de imágenes. Usa la función "querySelectorAll" para obtener todas las imágenes y guárdalas en una variable.

// 2- Usa un ciclo "for" para recorrer todas las imágenes y agregar un manejador de eventos "onmouseover" a cada una para mostrar una descripción de la imagen cuando se pase el cursor sobre ella.

// 3- Añade un botón de "play" y un botón de "pause" a tu página HTML y usa la función "addEventListener" para asignar manejadores de eventos que reproduzcan y pausen un video incorporado en tu página al hacer clic en ellos, respectivamente.

// 4- Usa la función "getElementsByName" para obtener varios elementos de un formulario en tu página HTML y cambiar su valor usando la propiedad "value".

// 5- Crea una función que utilice la función "fetch" para recuperar datos de una URL y luego actualice una sección específica de tu página HTML con los datos recuperados.

















// RESPUESTAS



// 1- Crea una página HTML con una lista de elementos dentro de un elemento "ul" (por ejemplo, "li" con los nombres de frutas). Usa la función "getElementsByTagName" para obtener todos los elementos "li" y guárdalos en una variable.

//Variable (guarda un HTMLCollection) para ambos opciones:
const liElement = document.getElementsByTagName("li");

// Opcion 1: Ciclo for

// Inicializo una variable vacía
let frutas = '';

// Creo un ciclo for que reccore el HTMLCollection, la condicion de bucle es la longitud del mismo
for (let i = 0; i < liElement.length; i++) {
    // Aqui en cada iteracion asigno el valor anterior de frutas mas el texto contenido dentro de liElement en la iteracion acutal gracias al operador de 'asignación de suma'(+=);
    frutas +=  liElement[i].textContent + " ";
}

console.log(frutas);

// Opcion 2: map

// Utilizo el metodo 'Array.from' para convertir el HTMLCollection a un array y le aplicamos un map que nos devuelve un nuevo array agregando un '.textContent' a cada elemento del array dado
const textContents = Array.from(liElement).map(li => li.textContent);
// Luego utilizo join que une todos los elementos del array en una cadena de caracteres y lo guardo en la variable frutas2
const frutas2 = textContents.join(" ");

console.log(frutas2)




// 2- Usa un ciclo "for" para recorrer todos los elementos "li" y cambiar el color de fondo de cada uno al hacer clic en ellos.

function cambiarColorFondo(){
    this.style.backgroundColor = 'red';
};

for (let i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener('click', cambiarColorFondo);
};



// 3- Añade un botón a tu página HTML y usa la función "addEventListener" para asignarle un manejador de eventos que muestre un mensaje en la consola cuando se haga clic en el botón.

const botonQueMuestra = document.getElementById('boton-que-muestra');

// Con arrow function
botonQueMuestra.addEventListener('click', () => console.log('Le haz hecho click!'))

// Con funcion declarativa
function avisoClick(){
    console.log('Le haz hecho click pero con una funcion declarativa!');
};

botonQueMuestra.addEventListener('click', avisoClick);



// 4- Usa la función "getElementById" para obtener un elemento de tu página HTML y cambiar su contenido usando la propiedad "textContent".

const tagVacia = document.getElementById('hey-estoy-vacio');

tagVacia.textContent = 'Pues ya no estas vacia';



// 5- Crea un elemento "div" nuevo y añádelo a tu página HTML usando la función "createElement" y luego la función "appendChild".

const nuevoDiv = document.createElement('div'); // Creo un nuevo div
nuevoDiv.textContent = 'Esto es un div muy genial.'; // Agrego contenido al div
nuevoDiv.classList.add('una-clase-pero-con-js'); // Le doy una clase al div por si necesito llamarlo en algun momento

const article = document.getElementById("un-article-cualquiera"); // Selecciono el contenedor que quiero que aloje al nuevo div
article.appendChild(nuevoDiv); // Finalmente agrego el nuevo div al contenedor



// 6- Usa la función "querySelector" para obtener un elemento de tu página HTML por su clase y luego cambiar su estilo usando la propiedad "style".

const tituloDudoso =  document.querySelector('.titulo-dudoso');

tituloDudoso.style.fontSize = '32px';



// 7- Usa la función "querySelectorAll" para obtener todos los elementos de tu página HTML con una determinada clase y luego usa un ciclo "for" para recorrerlos y cambiar su estilo.

const asignaturasVarias = document.querySelectorAll('.asignatura');

for (let i = 0; i < asignaturasVarias.length; i++) {
    asignaturasVarias[i].style.color = 'green';
    asignaturasVarias[i].style.fontSize = '22px';
};



// 8- Crea una función que añada un nuevo elemento a tu página HTML cada vez que se ejecute. Usa la función "createElement" y luego la función "appendChild" para añadir el elemento a tu página.

const alerta = document.createElement('p'); // Creo la etiqueta p
alerta.classList.add('texto-de-alerta') // Le pongo una clase para darle estilos
alerta.textContent = 'ESTO ES UNA ALERTA QUE ALERTA!!'; // Le agrego contenido
const divAlerta = document.getElementById('div-alerta'); // Identifico el contenedor padre

function alertaQueAlerta(){ // Creo la funcion que agrega la etiqueta p al contenedor
    divAlerta.appendChild(alerta);
};

alertaQueAlerta();



// 9- Crea un formulario en tu página HTML y usa la función "addEventListener" para asignarle un manejador de eventos que valide los datos del formulario cuando se envíe.

let error = 0;
const formulario = document.getElementById('form');
const email = document.getElementById('email');


function validarMail(email){

    let contieneArroba;

    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@'){
            contieneArroba = true;
        }
    }

    if (contieneArroba && email.length > 8){
        return true;
    }
};