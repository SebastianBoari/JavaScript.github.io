/// DOM

const nodemon = require("nodemon");

// DOM: MODELO DE OBJETOS DEL DOCUMENTO || DOCUMENT OBJECTS MODEL
// DOM es una estructura de objetos generada por el navegador
// El navegador nos permite acceder a estos objetos a través del document
// document es la representación del árbol DOM

/* El DOM (Modelo de Objetos del Documento) es una estructura de objetos que representa el contenido y la estructura de un documento HTML o XML. Nos permite acceder y modificar el contenido y la estructura del documento a través de código JavaScript utilizando el objeto global "document". Con el DOM podemos seleccionar elementos HTML específicos, crear, eliminar o modificar elementos del DOM y controlar eventos del usuario. 

El DOM nos ofrece una gran cantidad de métodos y propiedades para interactuar con los elementos del documento y crear aplicaciones web más dinámicas y avanzadas, como cambiar el contenido de una página web sin recargarla completamente o realizar peticiones a un servidor sin tener que recargar la página. En resumen, el DOM es fundamental para la creación de aplicaciones web dinámicas y avanzadas. */














// getElementById
/* El método "getElementById" nos permite acceder a un nodo del DOM a través de su identificador. Para hacer uso de este método, debemos pasar como argumento el identificador del nodo que queremos seleccionar. */
// Accede a un nodo a través de su identificador
// Recibe un argumento que es el identificador del nodo

const caja = document.getElementById("caja");
console.log(caja);

// getElementByTagName
/* El método "getElementsByTagName" nos permite acceder a uno o varios nodos del DOM a través de su etiqueta HTML. Para hacer uso de este método, debemos pasar como argumento el nombre de la etiqueta que queremos seleccionar. */
// Accede a todos los nodos que tengan ese nombre de etiqueta
// No es un array, por lo tanto los métodos no lo van a iterar
// Se puede iterar con for

const div = document.getElementsByTagName("div");
console.log(div);

// getElementsByClassName
/* Nos permite acceder a uno o varios nodos del DOM a través de su clase CSS. Para hacer uso de este método, debemos pasar como argumento el nombre de la clase que queremos seleccionar. Este método nos devuelve una lista de elementos, aunque sólo exista uno con la clase seleccionada. */
// Accede a todos los nodos que compartan la misma clase
// No es un array, por lo tanto los métodos no lo van a iterar
// Se puede iterar con for

const contenedor = document.getElementsByClassName("contenedor");
console.log(contenedor);

// querySelector
/* Nos permite acceder al primer nodo del DOM que coincida con un selector CSS específico. Para hacer uso de este método, debemos pasar como argumento el selector CSS que queremos utilizar. Este método nos devuelve el primer elemento que coincida con el selector especificado, o "null" si no existe ningún elemento que coincida.*/
// Te permite acceder a un nodo a través de su etiqueta
// Le tenés que pasar como argumento la sintaxis de selector

console.log(document.querySelector("div"));
console.log(document.querySelector(".contenedor"));
console.log(document.querySelector("#caja"));

// querySelectorAll
// Es similar a "querySelector", pero en lugar de devolver sólo el primer elemento que coincida con el selector CSS especificado, nos devuelve una lista de todos los elementos que coincidan.
// Trae a todos los nodos que coincidan con el argumento, que puede ser etiqueta o clase
// No es un array, por lo tanto los métodos no lo van a iterar
// Se puede iterar con for

console.log(document.querySelectorAll("div"));












// createElement
/* Nos permite crear un nuevo elemento del DOM y asignarle una etiqueta específica. Para hacer uso de este método, debemos pasar como argumento la etiqueta del elemento que queremos crear. Este método nos devuelve una referencia al elemento creado, que podemos guardar en una variable o utilizar inmediatamente.*/
// Nos permite crear un nodo desde js
// Este nodo si bien está creado, no forma parte del árbol DOM
// Para que forme parte, se debe relacionar a este elemento con otros métodos

const section = document.createElement("footer");
console.log(section);

// className
/*"className" es una propiedad que nos permite acceder o asignar la clase CSS de un elemento del DOM. Podemos obtener la clase actual de un elemento utilizando la sintaxis "elemento.className", o asignarle una nueva clase utilizando la sintaxis "elemento.className = 'nueva-clase'".*/
// Añade una clase a un nodo

section.className = "pie-de-pagina";

// textcontent
/*"textContent" es una propiedad que nos permite acceder o asignar el contenido de texto de un elemento del DOM. Podemos obtener el contenido actual de un elemento utilizando la sintaxis "elemento.textContent", o asignarle un nuevo contenido utilizando la sintaxis "elemento.textContent = 'nuevo contenido' */
// Nos permite acceder al contenido de una etiqueta

console.log(caja.textContent);

// También podemos modificar el contenido de un nodo

console.log(caja);

div.textContent = "Este es un nuevo contenido";

console.log(caja);

// Podemos modificar todos los contenidor de un HTMLCOLLECTION a través de un for que iterará sobre los nodos

// for ( let i = 0; i < div.length; i++){
//     div[i].textContent = "jejejeje"
// }











// append
/* Es un método que nos permite añadir un nodo o contenido de texto a otro nodo del DOM. Para hacer uso de este método, debemos pasar como argumento el nodo o el contenido de texto que queremos añadir. Este método se utiliza generalmente para añadir contenido de texto, pero también podemos utilizarlo para añadir nodos completos. */
// Añadir un nodo desde js a otro nodo
// Append generalmente se utiliza para contenido de texto
// Se pueden añadir nodos

const tarjeta = document.createElement("div");
tarjeta.className = "tarjeta";
console.log(tarjeta);
// Precisa del identificador del nodo al cual se va a añadir
// Sintaxis de append: identificadorDelNodo.metodo(nodoAIncorporar)
caja.append(tarjeta);


// appendChild
/* Es un método que nos permite añadir un nodo a otro nodo del DOM como hijo. Para hacer uso de este método, debemos pasar como argumento el nodo que queremos añadir. Este método no acepta contenido de texto, sólo acepta nodos de etiqueta. */
// appendChild incorpora un nodo a un nodo padre
// appendChild no acepta nodos de texto, solo nodos de etiqueta

const parrafo = document.createElement("p");
caja.appendChild(parrafo);

// innerHTML
/* Es una propiedad que nos permite insertar nodos o contenido de texto en un elemento del DOM. Podemos utilizar esta propiedad para reemplazar el contenido actual de un elemento por uno nuevo. Para hacer uso de esta propiedad, debemos asignarle una cadena de texto con el nuevo contenido que queremos insertar. */
// Inserta nodos

tarjeta.innerHTML = `
    <div class="container-img">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sailor-moon-1534851774.png?crop=1xw:0.8909574468085106xh;center,top&resize=640:*" alt="sailor moon">
    </div>
`

console.log(tarjeta)

// Ocultamos el div de ejemplo:

let divEjemplo = document.getElementById('ejemplo');
divEjemplo.style.display = 'none';