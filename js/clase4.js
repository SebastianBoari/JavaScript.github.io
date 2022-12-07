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

// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################

// <------FUNCIONES--------->

// FUNCIONES POR DECLARACION
// Son elementos que nos permiten reutilizar código, evitando la repetición sin sentido.
// Palabra reservada: function
// Identificador.
// Parentesis.
// Llaves.

/*
const permisoPadres = confirm( "Si tiene permiso de sus padres haga click en Aceptar caso contrario haga click en Cancelar" );
let edadCliente = prompt( "Ingrese su edad: " );


function validarCliente (permisoPadres, edadCliente) {

    if (permisoPadres === true || edadCliente >= 18 ){
        console.log( "Usted puede entrar al cine." );
    } else {
        console.warn( "Usted no puede entrar al cine." );
    }
}
*/

// Una vez declarada la funcion para poder ejecutar las sentencias que contiene 

// validarCliente(permisoPadres, edadCliente);

// Ejemplo de una funcion: FUNCION SALUDAR

/*
function saludar(){
    console.log( "Hola extraño" );
}

saludar();
*/

// Bien, ahora hagamos esta funcion reutilizable para poder saludar a cualquier usuario.
// Para que nuestra funcion sea reutilizable vamos a hacer uso de los PARAMETROS.

/*
function saludarACualquierUsuario ( nombre ){
    // En esta sentencia console.log estamos realizando una promesa en la funcion. La promesa de que va a recibir un valor de tipo string. 
    console.log( `Hola ${nombre}.`);
}
*/

// NO SE CUMPLIO EL CONTRATO DE LA FUNCION
// Cuando no se cumple el contrato de la función. la función asigna valores undefined para cubrir los argumentos que no fueron dados.

// saludarACualquierUsuario();

// Invocar una funcion de forma correcta implica pasarle el ARGUMENTO o ARGUMENTOS que la funcion necesite.
// Si una funcion tiene parametros, por consecuencia tiene argumentos. 

// saludarACualquierUsuario( "Martina" );
// saludarACualquierUsuario( "Florencio" );
// saludarACualquierUsuario( "Augusto" );
// saludarACualquierUsuario( "Marta" );

// Las funciones pueden recibir variables como argumentos.

// const nombreDeLaProfesora = "Carolina"

// saludarACualquierUsuario( nombreDeLaProfesora );


// VALOR POR DEFECTO DE LAS FUNCIONES
// El valor por defecto de una funcion es UNDEFINED.
// Se puede modificar ese valor con la palabra reservada RETURN.

/*
function suma ( a, b ) {
    return ( a + b );
}

suma(10, 799); // La suma se va a realizar pero no se va a visualizar en consola.
*/

// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################

// <----------FUNCIONES ANONIMAS--------->

// No tienen la capacidad de llamarse antes de ser inicializadas.
// No tienen identificador propio.
// Su identificador está ligado a la variable que lo contiene.

const resta = function ( a, b ) {
    return a - b
}

// Si quiero llamar y/o ejecutar o invocar a la función, debo utilizar el identificador + paréntesis.
// En el caso de que tenga parámetros, se pasan los argumentos.

// console.log(resta(12, 6));

// console.log(resta); // Esta sentencia va a dar como resultado que podamos ver el contenido de la funcion en consola.


// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################

// <----------FUNCIONES ARROW (Flecha)--------->

// No se requiere del contexto THIS. (Cuando veamos objetos lo vamos a entender mejor).
// Tiene una sintaxis simplificada.
// No precisa de la palabra reservada FUNCTION.
// Podes hacer retorno implicito.
// Los parentesis son optativos cuando solo hay un solo parametro.

// Version normal:
const division = (a, b) => {
    return a / b;
}
console.log( division( 25, 5 ) );

// Version simplificada:
const divisionSimplificada = ( a, b ) => a / b;
console.log( divisionSimplificada( 21, 7 ) );

// Version simplificada con un solo parametro:
const multiplicarPorDos = a => a * 2;
console.log( multiplicarPorDos( 21 ) );