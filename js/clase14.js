// ASYNC

// Javascript es un lenguaje sincronico
// La forma que tiene javascript de procesar sus algoritmos es secuencial y bloqueante
// Un codigo sincrono es aquel codigo donde cada instruccion espera a la anterior para ejecutarse
// Estos mensajes se ejecutan en base a su orden
console.log('Primer Mensaje');
console.log('Segundo Mensaje');
console.log('Tercer Mensaje');
// Funcion de orden superior
const suma = (a, b) => {
    return a + b;
};
const multiplicarLoSumado = (a, b) => {
    return suma(a, b) * 2;
};
console.log(multiplicarLoSumado(10, 10));
// Call stack: Es la pila de ejecucion de Javascript
// LIFO: Last in, first out (Ultimo en entrar, primero en salir).
console.log("Este es el primer mensaje");



// setTimeout()
// setTimeout() es un metodo asincronico que ejecuta un callback luego de que se cumplan la cantidad de milisegundos especifica
// Este metodo recibe dos argumentos obligatorios, que seria el callback y la cantidad de tiempo
setTimeout(() => {
    console.log("Este es el segundo mensaje")
}, 0);

console.log("Este es el tercer mensaje");

// Se puede saturar el callstack
function romperTodo(){
     romperTodo();
};
// romperTodo();



// clearTimeout
// Permite interrumpir el proceso asincronico setTimeout
// Se le debe pasar el identificador que contenga el metodo asincronico
const cadaCincoSegundos = setTimeout( () => {
    console.log("Te recuerdo lavar la ropa");
}, 1000);

clearTimeout(cadaCincoSegundos);



// setInterval()
// Ejecuta codigo ccada cierta cantidad de tiempo en loop
const intervalo = setInterval( () => {
    console.log("Estoy atrapado en un intervalo de tiempo");
}, 2000);

// clearInterval
// Permite interrumpir el proceso asincronico setInterval
// Se le debe pasar el identificador que contenga el metodo asincronico
clearInterval(intervalo);



///////////////////////////////////////////////////////////////////



// PROMISES

// Las promesas representan un evento a futuro
// Representan la resolucion de un evento
// Las promesas tienen tres estados posibles: Resolved, Pending, Unfedined

// pending: Estado por defecto que se atribuye a una promesa que no ha sido concluida
// fullfilled: estado que expresa que una promesa ya se concluyo
// rejected: Estado que expresa que uan promesa no tuvo resolucion

// Las promesas en algun momento se manifiestan como resueltas o rechazadas
const promesa = new Promise((resolve, reject) => {
    
});
console.log(promesa);

// Funcion que contiene una promesa
// Los parametors resolve y reject son callbacks propios de la funcion ejecutora
const evaluarNota = (nota) => new Promise((resolve, reject) => {
    if (nota >= 7){
        resolve("Usted aprobo")
    } else {
        reject("Usted desaprobo")
    }
});
// La resolucion de esta promesa cambio el estado de pending a fulfilled y paso a estar en estado resolve ya que se cumplio el caso estructurado en el if
//console.log(evaluarNota(10));

// Para poder extraer los valores hayados en el resolve/reject de una promesa, debo utilizar los metodos then y catch

evaluarNota(5)
// .then sirve para manipular el resultado de una promesa resuelta en resolve, se puede acceder al valor que retorna su callback
.then((value) => {
    console.log(`Este es el valor resolve de la promesa: ${value}`)
})
// .catch sirve para manipular el error de una promesa resuelta en reject, se puede acceder al valor que retorna su callback
.catch((error) => {
    console.log(`Este es el valor reject de la promesa: ${error}`)
})
// .finally es el metodo que siempre se ejecuta, independientemente del resultado de la promesa
.finally(() => {
    console.log("Gracias por participar de los examenes")
});

// Si intento manipular los datos que retorna una promesa, sin uso de then y catch, obtengo como resultado el mensaje [Object promise]
// alert(`La resolucion es: ${evaluarNota(5)}`);

