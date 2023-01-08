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

// Opcion 1: Metodos de cadenas (split, join y reverse)
// Opcion 2: Bucle for, unsifht y join

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

let geografia = {
    rusia: 'tundra ártica',
    canadá: 'tundra ártica',
    estadosUnidos: 'praderas',
    china: 'desierto',
    australia: 'desierto',
    argentina: 'pampa',
    brasil: 'selva amazónica',
    congo: 'selva tropical',
    indonesia: 'selva tropical',
    india: 'monzones'
};

let armas = {
    revolver: "portátil",
    escopeta: "caza",
    ak47: "asalto",
    sniper: "precisión",
    bomba: "explosiva",
    cuchillo: "cuerpo a cuerpo",
    lanzagranadas: "artillería",
    bazuca: "anti-tanque",
    escudo: "defensa",
    taser: "paralización"
}

let deTodo = [armas, geografia];


function unirObjetos(array){
    let objetosUnidos = array.reduce((acc, cur) => {
        return {
            ...acc,
            ...cur
        }
// Aqui descubri que en vez de 0 va {} para inicializar la acumuladora como un objeto vacio. Con 0 funciona igual porque en cada iteracion se retorna un objeto pero igual creo que debe de ser buena practica dejarlo ya como un objeto vacio.
    }, 0);

    return objetosUnidos;
};

console.log(unirObjetos(deTodo));


// 3G- (REDUCE) Dado un array de palabras, utiliza reduce para crear un único objeto donde las propiedades sean las palabras del array y los valores sean la longitud de cada palabra.

// A mi parecer el ejercicio mas complicado y estuve como 1 hora dando vueltas por internet para saber como hacer que me devuelva un objeto sin spoilearme de como se hace y entenderlo xd.
let arrayDePalabras = ['utiliza', 'reduce',  'para', 'crear', 'un', 'único', 'objeto'];

function objetoUnico(array){
     // Creo una variable que guarde el resultado y le aplicamos reduce al array
    let unicoObjeto = array.reduce((acc, cur) => {
        acc[cur] = cur.length;
        return acc;
    }, {})

    return unicoObjeto;
};

console.log(objetoUnico(arrayDePalabras));


// 3H- (REDUCE) Dado un array de objetos, utiliza reduce para contar cuántos objetos tienen una propiedad "genero" igual a "femenino".

// Creo una clase porque si no me voy a aburrir de crear objetos pero si igual sin esto esta bien
class Profesor {
    constructor(nombre, apellido, edad, sexo) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.sexo = sexo;
    }
};

let profGeografia = new Profesor('Alberto', 'Fernandez', 62, 'masculino');
let profHistoria = new Profesor('Victoria', 'Juarez', 42, 'femenino');
let profMatematica = new Profesor('Ricardo', 'Lopez', 54, 'masculino');
let profFilosofia = new Profesor('Irina', 'Centurion', 27, 'femenino');
let profQuimica = new Profesor('Cecilia', 'Benavides', 35, 'femenino');

let profesores = [profFilosofia, profGeografia, profHistoria, profMatematica, profQuimica];

function buscarGeneroFemenino(array){
    let generoFemenino = array.reduce((acc, cur) => {
        if (cur.sexo == 'femenino'){
            acc++
        }

        return acc;
    }, 0)

    return generoFemenino;
};

console.log(buscarGeneroFemenino(profesores));



// 4- Crea una función llamada arrayToObject que tome como argumento un array de parejas de clave-valor y devuelva un objeto con dichas parejas como propiedades. Por ejemplo, arrayToObject([['nombre', 'Juan'], ['edad', 30]]) debería devolver {nombre: 'Juan', edad: 30}.

// Opcion 1: reduce
function arrayToObjet(array){
    let newObjet = array.reduce((acc, cur) => {
        // Retornamos un objeto
        return {
            // Gracias al spread operator o spread syntax podemos unir todo bajo un nuevo objeto 
            ...acc,
            ...cur
        }
    }, {})

    // Retornamos el objeto que declaramos al principio
    return newObjet;
};

console.log(arrayToObjet(deTodo));

// 5- Crea una función llamada countVowels que tome como argumento una cadena de texto y devuelva el número de vocales en dicha cadena. Por ejemplo, countVowels('Hola mundo') debería devolver 4.

// Esta resolucion es la mas optima pero primero estuve como por 2 horas intentando con el metodo some() porque se me habia metido en la cabeza que se debia resolver con eso no se porqué la verdad.
// Opcion 1: bucle for e includes [ESTA ES LA CORRECTA]
const vocales = ['a', 'e', 'i', 'o', 'u'];

function countVowels(string) {
    let incluyeVocales = 0;
        
    for (let i = 0; i < string.length; i++) {
      if (vocales.includes(string[i])) {
        incluyeVocales++;
      }
    }
  
    return incluyeVocales;
};
  
console.log(countVowels(profFilosofia.apellido)); 
  
// Pero despues de mucho dar vueltas lo resolvi con el some tambien para desquitarme
// Opcion 2: forEach y some() [TAMBIEN SE PUEDE HACER MAS FACIL CON UN INCLUDES PERO IGUAL ESTA FORMA ES MUY REBUSCADA]
function countVowels(string){
    let incluyeVocales = 0;
    // Como forEach() es un metodo para iterar arrays primero debemos pasar el string por split para pasarlo a un array  
    string.split('').forEach((letra) => {
        if (['a', 'e', 'i', 'o', 'u'].some((vocal) => vocal === letra)){
            incluyeVocales++
        }
    })

    return incluyeVocales;
};

console.log(countVowels(profHistoria.apellido));


// 6- Crea una función llamada reverseWords que tome como argumento una cadena de texto y devuelva la misma cadena con las palabras en orden inverso. Por ejemplo, reverseWords('Hola mundo') debería devolver 'mundo Hola'.

// Opcion 1: Metodos de cadenas (split, join y reverse) [CREO QUE ES LA MAS CORRECTA Y LEGIBLE QUE LA OTRA OPCION]
function reverseWords(string){
    // Guardo en una variable el string convertido a array 
    let palabras = string.split(' ');

    // Una vez hecho un array puedo aplicarle reverse() para que invierta el orden de las palabras dentro del array
    palabras.reverse();

    // Y devuelvo las palabras en una cadena de texto como habia entrado
    return palabras.join(' ');
};
    
console.log(reverseWords(textoGeografiaArgentina)); 

// Opcion 2: Bucle for, unsifht y join
function reverseWordsOp2(string) {
    // Guardo en una variable el string convertido a array 
    let palabras = string.split(' ');
    let palabrasInvertidas = [];

    // hago que el ciclo for empiece por el final (googleado obvio porque no me la sabia esa xd)
    // Y con el unsift pusheamos cada palabra al nuevo array que habia declarado mas arriba
    for (let i = palabras.length - 1; i >= 0; i--) {
      palabrasInvertidas.unshift(palabras[i]);
    }

    // Y devuelvo las palabras en una cadena de texto como habia entrado
    return palabrasInvertidas.join(' ');
};
  
console.log(reverseWordsOp2(textoGeografiaArgentina)); 
  
// 7- Crea una función llamada sortByLength que tome como argumento un array de cadenas de texto y devuelva el array ordenado de mayor a menor longitud de cadena. Por ejemplo, sortByLength(['Hola', 'Mundo', 'Adiós']) debería devolver ['Adiós', 'Mundo', 'Hola'].

function sortByLength(array) {
    // Primero, ordena el array de manera que los elementos con mayor longitud estén al principio
    array.sort((a, b) => b.length - a.length);
    return array;
};
  
console.log(sortByLength(arrayDePalabras));

// 8- Crea una función llamada sortByLastLetter que tome como argumento un array de cadenas de texto y devuelva el array ordenado por la última letra de cada cadena. Por ejemplo, sortByLastLetter(['Hola', 'Mundo', 'Adiós']) debería devolver ['Mundo', 'Hola', 'Adiós'].
// No entendi la consigna

// 9- Crea una función llamada palindrome que tome como argumento una cadena de texto y devuelva true si la cadena es un palíndromo (es decir, si se lee igual de izquierda a derecha que de derecha a izquierda) y false en caso contrario. Por ejemplo, palindrome('anilina') debería devolver true.

function palindrome(string) {
    // Divide la cadena en un array de caracteres, luego invierte el orden de los caracteres y vuelve a unir la cadena
    let invertido = string.split('').reverse().join('');
    
    // Compara la cadena original con su inverso
    return string === invertido;
};

console.log(palindrome('anilina'));
console.log(palindrome('hola'));

// 10- Crea una función llamada findDuplicates que tome como argumento un array de números y devuelva otro array con los números que se repiten en el array original. Por ejemplo, findDuplicates([1, 2, 3, 2, 3, 4, 5, 3]) debería devolver [2, 3].

function findDuplicates(array) {
    const duplicados = [];
    for (let i = 0; i < array.length; i++) {
      const currentNumber = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (currentNumber === array[j]) {
          if (!duplicados.includes(currentNumber)) {
            duplicados.push(currentNumber);
          }
        }
      }
    }

    return duplicados;
};
  
console.log(findDuplicates([1, 2, 3, 2, 3, 4, 5, 3]));  

// 11- Crea una función llamada findLargest que tome como argumento un array de arrays de números y devuelva el número más grande de todos los arrays. Por ejemplo, findLargest([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) debería devolver 9.

function findLargest(array) {
    let elMasGrande= array[0][0];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] > elMasGrande) {
          elMasGrande = array[i][j];
        }
      }
    }
    
    return elMasGrande;
};

console.log(findLargest([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));