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

/*
const resta = function ( a, b ) {
    return a - b
}
*/

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

/*
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
*/


// <---------RETURN--------------->

// Solo se puede utilizar RETURN dentro de una FUNCION. 
// Si un metodo o elemento se encuentra dentro de una funcion se puede utilizar el RETURN.
// Por ejemplo: IF y FOR si no se encuentran dentro de una funcion el uso de RETURN esta PROHIBIDO.
// Todo lo que escribas debajo de un RETURN la funcion lo va a ignorar y nunca se va a ejecutar.

// Ejemplo:
/*
function multiplicarPorTres( a ){
    return a * 3;
    console.warn( "Multiplicacion por tres" );
    prompt( "Ingrese otro numero" );
    alert( "Esto es una alerta debajo de un return" );
    console.error( "Todo esto esta siendo ignorado" )
}

console.log( multiplicarPorTres(7) );
*/

// SALTOS DE LINEA EN UN RETURN

// Como vimos en el punto anterior todo lo que pongamos debajo de un RETURN sera ignorado. Por lo tanto no podemos retornar varios valores de esta forma:
    // return "Datos del usuario: "
    // return "Nombre: ${nombre}"
    // return "Apellido: ${ apellido }""

// Para poder hacer saltos de linea dentro de un return se utiliza "\n"

// Ejemplo:
/*
const datosDelUsuario = ( nombre, apellido, edad, direccion ) => {
    return `Datos del Usuario:\n Nombre: ${ nombre }\n Apellido: ${ apellido }\n Edad: ${ edad }\n Direccion: ${ direccion }`
}

console.log( datosDelUsuario( "Santiago", "Lukaku", 72, "Chaquenio Palavecino 9192") );
*/

// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################
// ################################################################################################################################################################################


// <---------------CONSIGNAS / EJERCICIOS ------------------>

// 1) Crear 4 funciones que reciban 2 parámetros numéricos de cualquier tipo, distinto a 0:
// Para cada uno de los llamados de las funciones, pasar los dos argumentos numéricos y visualizar el retorno en consola.

// a) la función debe retornar la suma de los dos operandos (Agrego un ejemplo de cada tipo de funcion que vimos hoy):

// Funcion Declarativa:
function sumaDeclarativa (a, b){
    return a + b;
}

console.log( sumaDeclarativa(7, 7) );

// Funcion Anonima:
const sumaAnonima = function (a, b){
    return a + b;
}

console.log( sumaAnonima(7, 7) );


// Funcion Arrow:
const sumaArrow = ( a, b ) => { 
    return a + b;
} 

console.log( sumaArrow(7, 7) );

// Funcion Arrow Simplificada:
const sumaArrowSimplificada = ( a, b ) => a + b;

console.log( sumaArrowSimplificada(7, 7) );

// b) la función debe retornar la resta de los dos opernados (Agrego un ejemplo de cada tipo de funcion que vimos hoy):

// Funcion Declarativa:
function restaDeclarativa ( a, b ) {
    return a - b;
}

console.log( restaDeclarativa(32, 8) );

// Funcion Anonima:
const restaAnonima = function ( a, b ) {
    return a - b;
}

console.log( restaAnonima(32, 8) );

// Funcion Arrow:
const restaArrow = ( a, b ) => {
    return a - b;
}

console.log( restaArrow(32, 8) );

// Funcion Arrow Simplificada:
const restaArrowSimplificada = ( a, b ) => a - b;

console.log( restaArrowSimplificada( 32, 8) );

// c) la función debe retornar la multiplicación de los dos operandos (Agrego un ejemplo de cada tipo de funcion que vimos hoy):

// Funcion Declarativa:
function multiplicacionDeclarativa ( a, b ) {
    return a * b;
}

console.log( multiplicacionDeclarativa( 6, 6 ) );

// Funcion Anonima:
const multiplicacionAnonima = function ( a, b ) {
    return a * b;
}

console.log( multiplicacionAnonima( 6, 6 ) );

// Funcion Arrow:
const multiplicacionArrow = ( a, b ) => {
    return a * b;
}

console.log( multiplicacionArrow(6, 6 ) );

// Funcion Arrow Simplificada:
const multiplicacionArrowSimplificada = ( a, b ) => a * b;

console.log( multiplicacionArrowSimplificada(6, 6 ) );

// d) la función debe retornar la división de los dos operandos (Agrego un ejemplo de cada tipo de funcion que vimos hoy):

// Funcion Declarativa:
function divisionDeclarativa ( a, b ) {
    return a / b;
}

console.log( divisionDeclarativa(32, 8) );

// Funcion Anonima:
const divisionAnonima = function ( a, b ) {
    return a / b;
}

console.log( divisionAnonima(32, 8) );

// Funcion Arrow:
const divisionArrow = ( a, b ) => {
    return a / b;
}

console.log( divisionArrow(32, 8) );

// Funcion Arrow Simplificada:
const divisionArrowSimplificada = ( a, b ) => a / b;

console.log( divisionArrowSimplificada(32, 8) );

// ################################################################################################################################################################################
// ################################################################################################################################################################################

// 2) Crear una función que reciba los siguientes parámetros: nombre, apellido, edad, direccion y telefono.
// Retornar como cadena de caracteres, la información del usuario. Podés usar \n para generar saltos de línea.
// Luego al llamar a la función, pase los 5 argumentos y visualice en consola el dato retornado.

// Ejemplo de la visualización:
// Los datos del cliente son:
// Nombre: Carolina,
// Apellido: Lerner,
// Edad: 28,
// Dirección: Calle falsa 123,
// Teléfono: 11221122.

// Funcion Declarativa:
function datosDeclarativa ( nombre, apellido, edad, direccion, telefono ) {
    return `Los datos del cliente son: \n Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}\n Direccion: ${direccion}\n Telefono: ${telefono}`;
}

console.log( datosDeclarativa("Carolina", "Lerner", 28, "Calle Falsa 123", 11221122) );

// Funcion Anonima:
const datosAnonima = function ( nombre, apellido, edad, direccion, telefono ) {
    return `Los datos del cliente son: \n Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}\n Direccion: ${direccion}\n Telefono: ${telefono}`;
}

console.log( datosAnonima("Carolina", "Lerner", 28, "Calle Falsa 123", 11221122) );

// Funcion Arrow:
const datosArrow = ( nombre, apellido, edad, direccion, telefono ) => {
    return `Los datos del cliente son: \n Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}\n Direccion: ${direccion}\n Telefono: ${telefono}`;
}

console.log( datosArrow("Carolina", "Lerner", 28, "Calle Falsa 123", 11221122) );

// Funcion Arrow Simplificada:
const datosArrowSimplificada = ( nombre, apellido, edad, direccion, telefono ) => `Los datos del cliente son: \n Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}\n Direccion: ${direccion}\n Telefono: ${telefono}`;

console.log( datosArrowSimplificada("Carolina", "Lerner", 28, "Calle Falsa 123", 11221122) );