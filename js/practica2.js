// Actividades practicas de repaso a clases anteriores: 


// 1- Crea una función llamada filterOddElements que tome como argumento un array y devuelva sólo los elementos impares del array. Por ejemplo, filterOddElements([1, 2, 3, 4, 5]) debería devolver [1, 3, 5].
// Opcion 1: for
// Opcion 2: Con filter

// 2- Crea una función llamada findMin que tome como argumento un array de números y devuelva el elemento más pequeño del array. Por ejemplo, findMin([34, 15, 88, 2]) debería devolver 2.
//Opcion 1: Math.min
// Opcion 2: sort()
// Opcion 3: for

// 3- Crea una función llamada findAvg que tome como argumento un array de números y devuelva el promedio de todos los elementos del array. Por ejemplo, findAvg([1, 2, 3]) debería devolver 2.
// Opcion 1: forEach
// Opcion 2: reduce

/* SI HASTA EL MOMENTO EL METODO REDUCE NO LO ENTIENDES BIEN PUEDES AGREGAR LOS SIGUIENTES EJERCICIOS PARA PRACTICARLO */
// 3.A- Dado un array de objetos, utiliza reduce para contar cuántos objetos tienen una propiedad "edad" mayor a 18.
// 3.B- Dado un array de números, utiliza reduce para calcular la media aritmética de todos los elementos del array.
// 3.C- Dado un array de números, utiliza reduce para calcular el máximo de todos los elementos del array.
// 3.D- Dado un array de números, utiliza reduce para calcular el mínimo de todos los elementos del array.
// 3.E- Dado un array de palabras, utiliza reduce para concatenar todas las palabras en un único string.
// 3.F- Dado un array de objetos, utiliza reduce para crear un único objeto con todas las propiedades de los objetos del array.
// 3.G- Dado un array de palabras, utiliza reduce para crear un único objeto donde las propiedades sean las palabras del array y los valores sean la longitud de cada palabra.
// 3.H- Dado un array de objetos, utiliza reduce para contar cuántos objetos tienen una propiedad "genero" igual a "femenino".


// 4- Crea una función llamada arrayToObject que tome como argumento un array de parejas de clave-valor y devuelva un objeto con dichas parejas como propiedades. Por ejemplo, arrayToObject([['nombre', 'Juan'], ['edad', 30]]) debería devolver {nombre: 'Juan', edad: 30}.

// 5- Crea una función llamada countVowels que tome como argumento una cadena de texto y devuelva el número de vocales en dicha cadena. Por ejemplo, countVowels('Hola mundo') debería devolver 4.

// 6- Crea una función llamada reverseWords que tome como argumento una cadena de texto y devuelva la misma cadena con las palabras en orden inverso. Por ejemplo, reverseWords('Hola mundo') debería devolver 'mundo Hola'.

// 7- Crea una función llamada sortByLength que tome como argumento un array de cadenas de texto y devuelva el array ordenado de mayor a menor longitud de cadena. Por ejemplo, sortByLength(['Hola', 'Mundo', 'Adiós']) debería devolver ['Adiós', 'Mundo', 'Hola'].

// 8- Crea una función llamada sortByLastLetter que tome como argumento un array de cadenas de texto y devuelva el array ordenado por la última letra de cada cadena. Por ejemplo, sortByLastLetter(['Hola', 'Mundo', 'Adiós']) debería devolver ['Mundo', 'Hola', 'Adiós'].

// 9- Crea una función llamada palindrome que tome como argumento una cadena de texto y devuelva true si la cadena es un palíndromo (es decir, si se lee igual de izquierda a derecha que de derecha a izquierda) y false en caso contrario. Por ejemplo, palindrome('anilina') debería devolver true.

// 10- Crea una función llamada findDuplicates que tome como argumento un array de números y devuelva otro array con los números que se repiten en el array original. Por ejemplo, findDuplicates([1, 2, 3, 2, 3, 4, 5, 3]) debería devolver [2, 3].

// 11- Crea una función llamada findLargest que tome como argumento un array de arrays de números y devuelva el número más grande de todos los arrays. Por ejemplo, findLargest([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) debería devolver 9.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// RESPUESTAS
// Nota:
// Ejercicios propuestos por ChatGPT. 
// Estos ejercicios no fueron corregidos por un profesor, pero como funcionan los tomo como bien hechos. Desconozco si alguno cuenta con alguna mala practica
// o si alguno estaba pensado para resolverse con algua funcion de orden superior en especifico o algo por el estilo, los hice a mi parecer y con las opciones que se em ocurrieron con los conocimientos que tengo actualmente.




// 1- Crea una función llamada filterOddElements que tome como argumento un array y devuelva sólo los elementos impares del array. Por ejemplo, filterOddElements([1, 2, 3, 4, 5]) debería devolver [1, 3, 5].

// Opcion 1: for
let numeros = [12, 5, 9, 2, 4, 10, 17, 29, 24, 128, 7, 2, 19, 11, 28, 10, 4, 5, 12, 72, 43, 902, 1, 90, 31, 131, 13, 36];
let numerosPares =[6, 12, 10, 20, 128, 64, 8, 2, 42];

function filterOddElementsOp1(array){
    let numerosImpares = [];

    for (let i = 0; i < array.length; i++) {
        let elementoActual = array[i];
        
        if (elementoActual % 2 != 0){
            numerosImpares.push(elementoActual);
        }
    }

    if (numerosImpares.length > 0){
        return console.log(numerosImpares);
    } else if (numerosImpares.length <= 0){
        return console.log('Lo siento, no se han hallado numeros impares.');
    }
};

filterOddElementsOp1(numeros);
filterOddElementsOp1(numerosPares);

// Opcion 2: Con filter

function filterOddElementsOp2 (array){
    const numerosImpares = array.filter(numero => numero % 2 != 0);

    if (numerosImpares.length > 0){
        return console.log(numerosImpares);
    } else if (numerosImpares.length <= 0){
        return console.log('Lo siento, no se han hallado numeros impares.');
    }
    
};

filterOddElementsOp2(numeros);
filterOddElementsOp2(numerosPares);


// 2- Crea una función llamada findMin que tome como argumento un array de números y devuelva el elemento más pequeño del array. Por ejemplo, findMin([34, 15, 88, 2]) debería devolver 2.

//Opcion 1: Math.min
function findMin(array){
    const minNum = Math.min(...array);

    return console.log(minNum);
};

findMin(numeros);
findMin([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 2]);

// Opcion 2: sort()
function findMinOp2(array){
    const newArray = array.sort(function(a, b){
        return a - b;
    });

    const minNum = newArray[0];
    
    return console.log(minNum);
};

findMinOp2(numeros);
findMinOp2([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 2]);

// Opcion 3: for
function findMinOp3(array) {
    let numMin = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < numMin) {
        numMin = array[i];
      }
    }
    return console.log(numMin);
};

findMinOp3(numeros);
findMinOp3([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 2]);




















// 3- Crea una función llamada findAvg que tome como argumento un array de números y devuelva el promedio de todos los elementos del array. Por ejemplo, findAvg([1, 2, 3]) debería devolver 2.

// Opcion 1: forEach
function findAvg(array){
    let suma = 0;

    array.forEach(numero => {
        suma += numero; 
    });

    return console.log(suma / array.length);
};

findAvg(numeros);
findAvg([10, 10, 10, 9, 10, 1, 50, 10, 10, 10, 70]);

// Opcion 2: reduce
function findAvgOp2(array) {
    return array.reduce((suma, numero) => suma + numero, 0) / array.length;
}

findAvgOp2(numeros);
findAvg([10, 10, 10, 9, 10, 1, 50, 10, 10, 10, 70]);

// Aqui paro prara seguir practicando con el metodo reduce para entenderlo mejor:

// Como funciona el reduce?
// Comentarios al margen: El reduce es un buen metodo pero no para todo, casos en los que no se debe usar un reduce son la mayoria ya que son contados los dedos con la mano las veces que vamos a necesitar de un reduce. El ejemplo mas habitual de mal uso del reduce es cuando se usa para encontrar el mayor numero de un array cuando en realidad el Mat.max es mucho mas legible. Desarrolladores Senior de Google como Jake Archibald y Surma no recomiendan su uso excepto sea explicitamente necesario.
// Ejemplo:

let numerosCorto = [0, 1, 2, 3, 4];

numerosCorto.reduce((valorAcumulado, valorActual, indice, array) => {
    return valorAcumulado + valorActual;
})

// 3A- (REDUCE) Dado un array de objetos, utiliza reduce para contar cuántos objetos tienen una propiedad "edad" mayor a 18.
const usuarioUno = {
    nombre: 'Juan Pablo',
    apellido: 'Rodriguez',
    edad: 29
};
const usuarioDos ={
    nombre: 'Agustina',
    apellido: 'Gomez',
    edad: 21
};
const usuarioTres = {
    nombre: 'Tobias',
    apellido: 'Argerich',
    edad: 17
};
let usuarios = [usuarioUno, usuarioDos, usuarioTres];

function avgReduce(array){
   let promedio = array.reduce((mayoresEdad, usuario) => {

        if (usuario.edad >= 18){
            mayoresEdad++;
        } 
    
        return mayoresEdad;
    }, 0);

    return console.log(promedio);
};

avgReduce(usuarios);

// 3B- (REDUCE) Dado un array de números, utiliza reduce para calcular la media aritmética de todos los elementos del array.
// Esta solucion ya la habia hecho en findAvg2

function findAvgOp3(array){
    return array.reduce((suma, numero) => suma + numero, 0) / array.length;
};
console.log(findAvgOp3(numeros));

// 3C- (REDUCE) Dado un array de números, utiliza reduce para calcular el máximo de todos los elementos del array.
// Esto era lo que habiamos aclarado que es mala practica existiendo el Math.max

function numeroMayor (array){
    let = elMayor = array.reduce((acc, cur) => {
        if (cur > acc){
            acc = cur;
        }

        return acc;
    }, 0);

    return elMayor;
};

console.log(numeroMayor(numeros));

// 3D- (REDUCE) Dado un array de números, utiliza reduce para calcular el mínimo de todos los elementos del array.

function numeroMenor(array){
    let elMenor = array.reduce((acc, cur) => {
        if (cur < acc){
            acc = cur;
        }

        return acc;
    }, 0);

    return elMenor;
};

console.log(numeroMenor(numeros));

// 3E- (REDUCE) Dado un array de palabras, utiliza reduce para concatenar todas las palabras en un único string.

let textoHistoriaGeneral = "En el año 1453, el Imperio Otomano tomó Constantinopla, lo que puso fin al Imperio Romano de Oriente y marcó el fin del mundo occidental clásico.";
let textoGeografiaArgentina = "Su territorio está compuesto por una amplia llanura en el centro y en el este, y por montañas y altiplano en el oeste.";

let textos = [textoGeografiaArgentina, textoHistoriaGeneral];

function unirTexto(array){
    let textoUnido = array.reduce((acc, cur) => {
        return cur + ' ' + acc;
    }, 0);

    return textoUnido;
}

console.log(unirTexto(textos));

// 3F- (REDUCE) Dado un array de objetos, utiliza reduce para crear un único objeto con todas las propiedades de los objetos del array.



// 3G- (REDUCE) Dado un array de palabras, utiliza reduce para crear un único objeto donde las propiedades sean las palabras del array y los valores sean la longitud de cada palabra.

// 3H- (REDUCE) Dado un array de objetos, utiliza reduce para contar cuántos objetos tienen una propiedad "genero" igual a "femenino".















// 4- Crea una función llamada arrayToObject que tome como argumento un array de parejas de clave-valor y devuelva un objeto con dichas parejas como propiedades. Por ejemplo, arrayToObject([['nombre', 'Juan'], ['edad', 30]]) debería devolver {nombre: 'Juan', edad: 30}.

// 5- Crea una función llamada countVowels que tome como argumento una cadena de texto y devuelva el número de vocales en dicha cadena. Por ejemplo, countVowels('Hola mundo') debería devolver 4.

// 6- Crea una función llamada reverseWords que tome como argumento una cadena de texto y devuelva la misma cadena con las palabras en orden inverso. Por ejemplo, reverseWords('Hola mundo') debería devolver 'mundo Hola'.

// 7- Crea una función llamada sortByLength que tome como argumento un array de cadenas de texto y devuelva el array ordenado de mayor a menor longitud de cadena. Por ejemplo, sortByLength(['Hola', 'Mundo', 'Adiós']) debería devolver ['Adiós', 'Mundo', 'Hola'].

// 8- Crea una función llamada sortByLastLetter que tome como argumento un array de cadenas de texto y devuelva el array ordenado por la última letra de cada cadena. Por ejemplo, sortByLastLetter(['Hola', 'Mundo', 'Adiós']) debería devolver ['Mundo', 'Hola', 'Adiós'].

// 9- Crea una función llamada palindrome que tome como argumento una cadena de texto y devuelva true si la cadena es un palíndromo (es decir, si se lee igual de izquierda a derecha que de derecha a izquierda) y false en caso contrario. Por ejemplo, palindrome('anilina') debería devolver true.

// 10- Crea una función llamada findDuplicates que tome como argumento un array de números y devuelva otro array con los números que se repiten en el array original. Por ejemplo, findDuplicates([1, 2, 3, 2, 3, 4, 5, 3]) debería devolver [2, 3].

// 11- Crea una función llamada findLargest que tome como argumento un array de arrays de números y devuelva el número más grande de todos los arrays. Por ejemplo, findLargest([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) debería devolver 9.

// Nota:
// Ejercicios propuestos por ChatGPT. 
// Estos ejercicios no fueron corregidos por un profesor, pero como funcionan los tomo como bien hechos. Desconozco si alguno cuenta con alguna mala practica
// o si alguno estaba pensado para resolverse con algua funcion de orden superior en especifico o algo por el estilo, los hice a mi parecer y con las opciones que se em ocurrieron con los conocimientos que tengo actualmente.