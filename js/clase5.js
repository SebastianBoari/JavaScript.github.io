// Objetos


// Objetos Literales

// Se encuentran implementados en JavaScript desde 1996


// Con las variables que conocemos hasta el momento podemos guardar datos de personas, pero cuando empezamos a sumar mas personas las variables son cada vez mas
// y los nombres cada vez son mas rebuscados.

/*
let nombre1 = "Homero";
let apellido1= "Simpson";
let direccion1 = "Av. Siempreviva 742";
let telefono1 = "123123123123";

let nombre2 = "Marge";
let apellido2 = "Simpson";
let direccion2 = "Av. Siempreviva 742";
let telefono2 = "123123123123";
*/

// En cambio con un objeto literal podemos guardar una coleccion de propiedades dentro de un objeto. 
// Las variables dentro de un objeto se llaman "propiedades" no variables.

/*
const persona1 = {
     nombre: "Homero",
     apellido: "Simpson",
     direccion: "Av. Siempreviva 742",
     telefono: "123123123123"
 }
 const persona2 = {
    nombre: "Marge",
    apellido: "Simpson",
    direccion: "Av. Siempreviva 742",
    telefono: "123123123123"
 }
*/


// Funciones Constructoras 

// Se encuentran implementadas en JavaScript desde los años 2000/1
// En PHP tambien encontramos estas funciones.
// En JS, el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.
//  Con esta "función constructora" podemos inicializar las propiedades del objeto al momento de ser instanciado con new.
// Es una especia de "plantilla"

/*
function Persona ( nombre, apellido, domicilio ) {
    this.nombre = nombre;
    this.apellido = apellido; 
    this.domicilio = domicilio;
}

const persona1 = new Persona( "Homero", "Simpson", "Av. Siempreviva 742" );
const persona2 = new Persona( "Marge", "Simpson", "Av. Siempreviva 742" );
*/

/*
const IVA = 1.21;

function Producto ( codigo, descripcion, importe, stock ) {
    this.codigo = codigo,
    this.descripcion = descripcion,
    this.importe = importe,
    this.stock = stock,
    this.importeConIVA = function () {
        return this.importe * IVA
    }
}

const producto1 = new Producto ( 711, "Asrock 580gb 8gb", 24999, 32 );
const producto2 = new Producto ( 102, "Zotac AMP Omega 970 4gb", 13729, 2 );
const producto3 = new Producto ( 941, "Asus Dual OC RTX 3060 12gb", 88650, 53 );

alert(`El importe del producto ${producto1.descripcion} mas IVA es $ ${producto1.importeConIVA()}`);
alert(`El importe del producto ${producto2.descripcion} mas IVA es $ ${producto2.importeConIVA()}`);
alert(`El importe del producto ${producto3.descripcion} mas IVA es $ ${producto3.importeConIVA()}`);
*/

// Clases JS
// Se encuentran implementadas en JavaScript desde el año 2015 ES6
// Se implemento este "Sugarcode" para que los programadores que venian de lenguajes fuertemente tipados puedan reconocer la estructura de las clases.
// Internamente JavaScript replica una funcion constructora pero a ojos del programador muestra una estructura tipo "clase" que se pueden encontrar en JAVA y C#
// Las funciones constructoras cayeron en desuso, es de uso generalizado utilizar clases en JavaScript.
// En otros lenguajes es obligatorio escribir nuestras clases en archivos separados. En JavaScript no es obligatorio pero el profesor nos aconseja hacer uso de esa costumbre 
// para poder reutilizar las clases que hagamos en otros proyectos.

/*
const IVA = 1.21;

class Producto {
    constructor(codigo, descripcion, importe, stock) {
        this.codigo = codigo,
        this.descripcion = descripcion,
        this.importe = importe,
        this.stock = stock
    }
    importeConIVA() {
        return this.importe * IVA;
    }
}

const producto1 = new Producto ( 711, "Asrock 580gb 8gb", 24999, 32 );
const producto2 = new Producto ( 102, "Zotac AMP Omega 970 4gb", 13729, 2 );
const producto3 = new Producto ( 941, "Asus Dual OC RTX 3060 12gb", 88650, 53 );
*/