// EJEMPLO DE LO QUE SOLUCIONAN LAS FUNCIONES

// Este tipo de codigo no es performante.
// Genera que se repita una y otra vez las mismas sentencias.
// No se deberian de haber tanto hardcodeo.

/*
const permisoPadres = false;
let edadCliente = 15;

if (permisoPadres === true || edadCliente >= 18 ){
    console.log( "Usted puede entrar al cine." );
} else {
    console.warn( "Usted no puede entrar al cine." );
}

const permisoPadres2 = false;
let edadCliente2 = 29;

if (permisoPadres2 === true || edadCliente2 >= 18 ){
    console.log( "Usted puede entrar al cine." );
} else {
    console.warn( "Usted no puede entrar al cine." );
}

const permisoPadres3 = true;
let edadCliente3 = 17;

if (permisoPadres3 === true || edadCliente3 >= 18 ){
    console.log( "Usted puede entrar al cine." );
} else {
    console.warn( "Usted no puede entrar al cine." );
}
*/

// ##########################################################################################################################################################
// ##########################################################################################################################################################
// ##########################################################################################################################################################
// ##########################################################################################################################################################

// <------FUNCIONES--------->

// FUNCIONES POR DECLARACION
// Son elementos que nos permiten reutilizar código, evitando la repetición sin sentido.
// Palabra reservada: function
// Identificador.
// Parentesis.
// Llaves.

const permisoPadres = false;
let edadCliente = 15;

function validarCliente (permisoPadres, edadCliente) {
    if (permisoPadres === true || edadCliente >= 18 ){
        console.log( "Usted puede entrar al cine." );
    } else {
        console.warn( "Usted no puede entrar al cine." );
    }
}

// Una vez declarada la funcion para poder ejecutar las sentencias que contiene 

validarCliente(false, 21)