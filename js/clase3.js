                                            // <------------ CICLOS E ITERACIONES ------------->

// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################

// <---------CICLO FOR------------->  (ciclo por conteo de principio a fin.)

// Recibe tres parámetros: valor inicial; condición para seguir; incrementador

// Ejemplos:

// <-----CICLO ESTATICO-----> 
 //valor inicial //condicion//incrementador
/* 
for (let i = 0;    i <= 7;    i++){ 
    console.log( "Iteracion numero.", i );
}
*/

// i++ es igual a "i += 1" lo cual significa que "i" es igual a "i + 1" o sea "i = i + 1". Este concepto es heredado del lenguaje C un lenguaje de programación de propósito general​ originalmente desarrollado por Dennis Ritchie entre 1969 y 1972 en los Laboratorios Bell.

// <--------CICLO DINAMICO--------->

/* 
let nro = prompt( "Ingrese un numero." );
   //valor inicial //condicion//incrementador
for ( let i = 0;     i < nro;      i++ ) {
    console.log( "Iteracion numero.", i );
}
*/

// En este caso la condicion para seguir es fijada por el usuario mediante el numero que ingrese en el prompt.

// COMENTARIO: Hoy en dia en la gran mayoria de casos se utiliza un CICLO FOR DINAMICO y los mas raros de encontrar son los casos en los que se use un CICLO FOR ESTATICO.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// NOTA ADICIONAL: (Funciones nativas de JavaScript: parseInt() / parseFloat()) 

// La funcion nativa "prompt( "Ingrese un numero." )" devuelve un dato tipo String (Cadena de caracteres) por ende siempre es mejor agregar otras funciones nativas de JavaScript
// como "parseInt()" y "parseFloat()". Estas funciones nativas de JavaScript sirven para pasar un valor numero dentro de un dato tipo String a valores numericos.

// En resumen:

// parseInt() ---> Convierte el valor a un valor numerico de tipo entero.
// parseFloat() ---> Convierte el valor a un valor numerico de tipo float (Con decimales).
// Ejemplo:
//let nroInt = parseInt(prompt( "Ingrese un numero." ));

/* 
for ( let i = 0; i < nroInt; i++ ) {
    console.log( "Iteracion numero.", i );
}
*/

// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################

// Sentencias BREAK y CONTINUE

//Las sentencias break y continue permiten manipular el comportamiento normal de los bucles for para detener el bucle o para saltarse algunas repeticiones. Concretamente, la sentencia break permite terminar de forma abrupta un bucle y la sentencia continue permite saltarse algunas repeticiones del bucle.

// SENTENCIA BREAK 
// Se utiliza la sentencia BRAK cuando queremos interrumpir el el desarrollo de un ciclo.
// Ejemplo:
/*
let nroIntBreak = parseInt(prompt( "Ingrese un numero." ));

for ( let i = 0; i < nroIntBreak; i++ ) {
    console.log( "Iteracion numero.", i );
    // Cuando el valor de "i" sea estrictamente igual a 25 el ciclo for dinamico se va a detener.
    if ( i === 25 ){
        break;
    }
}
*/

// SENTENCIA CONTINUE
// Se utiliza la sentencia CONTINUE cuando queremos saltear un paso en el cliclo FOR.
// Ejemplo:
/*
let nroIntContinue = parseInt(prompt( "Ingrese un numero." ));

for ( let i = 0; i < nroIntContinue; i++ ) {
    // Cuando el valor de "i" sea estrictamente igual a 7 el ciclo for dinamico va a saltear ese paso.
    if ( i === 7 ){
        continue;
    }
    // En este caso el console.log() debe estar por debajo para respetar el orden en que se resuelven los pasos del ciclo.
    console.log( "Iteracion numero.", i );
}
*/

// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################


// <---------CICLO WHILE------------->  (Ciclo por repeticion.)

// La estructura WHILE permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada.
// El funcionamiento del bucle WHILE se resume en: mientras se cumpla la condición indicada, repite las instrucciones incluidas dentro del bucle.
// Cuando usamos while, asumimos que en algún momento la repetición va a finalizar; si la comparación no se realiza adecuadamente podemos generar el llamado "bucle infinito".

/*
let login = confirm( "¿Desea Identificarse?" );

while(login){
    let usuario = prompt( "Ingrese su usuario:" );
   
    if ( usuario === "coderhouse" ){
        console.log( "Bienvenid@", usuario )
        // FUNCIONA CON LOGIN === FALSE         
        login = false
    } else {
        console.warn( "No se reconoce al usuario ingresado." )
    }
}
*/

/*
let login = confirm( "¿Desea Identificarse?" );

while(login){
    let usuario = prompt( "Ingrese su usuario:" );
   
    if ( usuario === "coderhouse" ){
        console.log( "Bienvenid@", usuario );
        // FUNCIONA CON BREAK             
        break
    } else {
        console.warn( "No se reconoce al usuario ingresado." )
    }
}
*/

// Anteriormente trabajamos con alert() y prompt(). Ahora agregamos confirm() el cual es un cuadro de dialogo que se abre en el navegador al igual que alert() y prompt() pero en este caso confirm() contiene dos opciones "Aceptar" o "Cancelar" que automaticamente reciben el valor BOOLEANO de True y False respectivamente.
// El CICLO WHILE se va a estar ejecutando siempre y cuando la variable "login" represente el valor Booleano de True. Cuando sea False no se va a estar ejecutando el ciclo. 
// Podriamos especificar "while(login === true){}" pero es inecesario ya que los unicos dos valores que puede adoptar login son solo true y false a menos que nosotros le asignemos otro valor.
// Definimos la variable usuario a traves de un prompt() y automaticamente la estructura condicional if empezara a comprarlo.
// En el caso de que el usuario ingrese el usuario "coderhouse" se va a mostrar en pantalla el mensaje de bienvenida
// En el caso de que ingrese el nombre de usuario correcto debemos indicarle que el valor a login pasa a ser false para no incurrir en un ciclo infinito.

// COMENTARIO DEL PROFESOR: Hoy en dia el uso del ciclo WHILE no esta muy extendido. En los casos en los que el ha trabajo no ha visto que se implemente mucho el ciclo WHILE excepto en programas con mas de 20 años.

// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################

// <---------CICLO DO.. WHILE------------->

// La estructura do...while permite crear bucles que se ejecutan una o más veces, dependiendo de la condición indicada.
// A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, porque la condición se evalúa al final.

/*
let intentos = 1
let identificarme = true

do{
    let usuario = prompt( "Ingresa tu nombre de usuario:" )

    if( usuario === "coderhouse" && intentos <= 3) {
        alert( "✅Bienvenid@", usuario )
        break // o tambien podemos utilizar "identeificarme = false"

    } else {
        alert( "⛔ El usuario " + usuario + " no puede identificarse." )
        intentos++

        if ( intentos > 3){
            console.error( "Usted a superado los tres intentos de identificarse." )
            break
        }
    }
} while(identificarme)
*/

// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################
// #############################################################################################################################################################################

// <--------- SWITCH ------------->

// La estructura switch está especialmente diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable
// (técnicamente se podría resolver con un if, pero el uso de switch es más ordenado).
// Su definición formal puede parecer confusa, pero veamos un ejemplo para entender su simpleza.

// Cada condición se evalúa y, si se cumple, se ejecuta lo que esté indicado dentro de cada case.
// Normalmente, después de las instrucciones de cada case se incluye la sentencia break para terminar la ejecución del switch, aunque no es obligatorio.
// En el caso de que ningun valor coincida con los valores definidos en los case se utiliza el valor default para indicar las instrucciones que se ejecutan cuando ninguna condición anterior se cumplió.


/*
console.log( "Bienvenido a tienda de ropa: 'El Placard Desbordado'" );
let consulta = confirm( "¿Te puedo ayudar con lo que buscas?" );

if (consulta){
    let prenda = prompt( "¿Que prenda estas buscando? {pantalon - camisa - vestido - zapatos}" );
    let color = prompt( "Ingresa el color de la prenda:" );

    switch (color){
        case "blanco":
            console.log( "Si, tenemos " + prenda + " en color " + color );
            break
        case "naranja":
            console.log( "Si, tenemos " + prenda + " en color " + color );
            break
        case "verde":
            console.log( "Si, tenemos " + prenda + " en color " + color );
            break
        case "azul":
            console.log( "Si, tenemos " + prenda + " en color " + color );
            break
        default:
            console.warn( "No, no tenemos " + prenda + " en color " + color );
    }
}
*/