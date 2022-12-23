// Calculadora que suma, resta, divide y multiplica

// Bajo nivel de abstraccion


const calcular = (a, b, operador) => {
    if(operador === "+"){
        return a + b;
    } else if (operador === "-"){
        return a - b;
    } else if (operador === "*" || operador === "x"){
        return a * b;
    } else if (operador === "/"){
        return a / b;
    } else {
        return alert("Operador o caracter invalido. Introduzca un operador (+ - / *) y dos valores numericos")
    }
}

console.log(calcular(2, 2, "+"));

/* En JavaScript, una función es considerada de "primera clase" cuando se trata como un valor más,
 lo que significa que puede ser asignado a una variable, 
 pasado como argumento a una función o retornado como resultado de una función. 
 Esto es posible debido a que en JavaScript, las funciones son objetos de tipo "function" y tienen propiedades y métodos.*/

 //////////////////////////////////////////////////////////////////////

 // Alta nivel de abstraccion 


// Las funciones de primera clase que se pasan como argumento a otra funcion tambien son conocidas como "Callbacks"
 const suma = (a, b) => {
    return a + b;
 }
 const resta = (a, b) => {
    return a - b;
 }
 const multiplicacion = (a, b) => {
    return a * b;
 }
 const division = (a, b) => {
    return a / b;
 }

 // Funcion de orden superior
 function calculadora (operacion, a, b){
    return operacion(a, b);
 }
 
 console.log(calculadora(suma, 2, 2));

/////////////////////////////////////////////////////////////////////

// Metodos de Arrays (Iteran sobre los Arrays)

// Solo se aplican a Arrays
// Estos metodos obligatoriamente reciben una funcion de primera clase o tambien llamdas "callback"
// Estos métodos reciben hasta 3 parámetros, van a precisar si o si de uqe se mencionen los parámetros anteriores

// forEach
// Itera sobre los elementos que componen a un array ejecutando una instruccion sobre ellos.
// Recibe 3 parametros elementoActual (obligatorio), indice, array
// Indice y Array son optativos
// forEach no devuelve valores solo ejecuta sentencias sobre cada uno de los elementos
// No acepta break ni continue

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((elementoActual) => {
    console.log(elementoActual + 50);
})

console.log(numeros)


// find
// Va a buscar al primer elemento que coincida con la busqueda.
// Una vez lo encuentra corta la ejecucion
// Va a recibir hasta 3 parametros: element(obligatorio), i, array
// Devuelve un lemento en el caso de que haya coincidencia

// Esta funcion va a retornar el valor que va a encontrar en este caso 7.
const numeroBuscado = numeros.find( ( element ) => {
    return element === 7;
})
console.log(numeroBuscado)

// Esta funcion va a retornar undefined ya que no va a encontrar 124 dentro de nuestro array numeros
const numeroBuscadoUndefined = numeros.find( ( element ) => {
    return element === 124;
})
console.log(numeroBuscadoUndefined)

// Esta funcion va a retornar el primer elemento que sea mayor a 8 que encuentre y se corta la ejecucion.
const numeroBuscadoMenor = numeros.find( ( element ) => {
    return element > 8;
})
console.log(numeroBuscadoMenor)

// Filter
// Filtra en base a una condicion
// Recibne hasta tres paramentros: element(obligatorio), i, array
// Nos devuelve un array

const arrFiltrado = numeros.filter( ( curr ) => {
    return curr % 2 === 0;
})

console.log(arrFiltrado);

// some
// Itera sobre todos los elementos de un array
// Retorna un booleano
// Verifica que al menos 1 elemnto del array cumpla con la condicion
// Tambien existe el every() que tambien devuelve un booleano si todos con la condicion.

// Esta funcion va a retornar true porque dentro de nuestro array esta el numero 9, el cual cumple la condicion de ser mayor a 8.
console.log(numeros.some( ( elemento) => {
    return elemento > 8;
}))

// Esta funcion va a retornar false porque no hay ningun elemento dentro de nuestro array mayor a 1000.
console.log(numeros.some( ( elemento) => {
    return elemento > 1000;
}))

// map
// Itera sobre cada uno de los elementos del array y ejecuta una sentencia.
// Hace una copia del array original pero transformada
// No afecta el array original.


const numerosSumados = numeros.map( ( n ) => {
    return n + 50;
})

console.log(numeros);
console.log(numerosSumados);

// reduce
// Reduce todo el valor de un array a un solo valor
// Deja de ser un arrat y se vuelve a un valor unico y primitivo
// Devuelve un string o un number
// Tiene dos argumentos obligatorios CALLBACK y valor inicial
// Esto es similar a una variable acumuladora
// Recibe hasta cuatro parametros: acumuladora. elemento, i, array
// Devuelve un unico valor, no un array



const numero = numeros.reduce( (acumuladora, element) => {
    return acumuladora + element;
}, 0)

console.log(numero);

const frutas = ["banana", "manzana", "naranja", "durazno", "melon"]

// Si no agregamos el valor inicial, al primer elemento del array no se le van a aplicar las instrucciones
const fruta = frutas.reduce( (acumuladora, elemento) => {
    return acumuladora + elemento.toUpperCase();
}, /*Aqui falta el valor inicial*/ )

console.log(fruta);

// sort
// Es un metodo que ordena el contenido de un array
// Es un metodo inestable
// Sort ordena teniendo en cuenta la posicion unicode del elemento
// Sort ordena tanto numbers como strings, pero lo hace de manera diferente
// Recibe como parametros dos valores: a, b
// Sort MODIFICA EL ARRAY ORIGINAL
// No devuelve un valor, solo ordena el array con el cual se liga el metodo

// Como copiar arrays de manera segura????


const random = [5000, 1209323, 3, 33, -Infinity, 100000, 8217380, 77777]


// Sort: Para ordenar de menor a mayor (ascendente)

// para ordenar numbers podemos hacer lo siguiente:

                    // spread operators
const numerosOrdenados = [...random].sort( ( a, b) => {
    return a - b;
})

// Se va a mostrar el array original tal cual esta sin modificaciones
console.log(random);

// Se va mostrar con la modificacion sin afectar al array original gracias al spread operators
console.log(numerosOrdenados);



// Sort: Para ordenar de mayor a menor (descendente)

                        // spread operators
const numerosDescendentes = [...random].sort( ( a, b) => {
    return b - a;
})

// Se va mostrar con la modificacion sin afectar al array original gracias al spread operators
console.log(numerosDescendentes);


// Sort: Para prdenar alfabeticamente de A a la Z.

const abcedario = ['q', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'l', 'z', 'a', 'ñ', 'o', 'p', 'n', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'm']

/*
abcedario.sort( (a, b) => {
    if ( a < b){
        return -1
    } else if (a > b){
        return 1
    } else {
        return 0
    }
})

console.log(abcedario)
*/

// Sort: Para prdenar alfabeticamente de Z a la A.

abcedario.sort( (a, b) => {
    if ( a < b){
        return 1
    } else if (a > b){
        return -1
    } else {
        return 0
    }
})

console.log(abcedario)


// math
// Es un meotod envolvente para numbers
// Siempre en mayos la primera letra

console.log(Math.E) // valor constante de Euler
console.log(Math.PI) // Valor de pi
console.log(Math.min(9, 23, 5, 254, 16, 2.234, 9965)) // Devuelve el menor numero que se pase como argumento
console.log(Math.max(9, 23, 5, 254, 16, 2.234, 9965)) // Devuelve el mayor numero que se pase como argumento
console.log(Math.sqrt(32)) // Devuelve la raiz cuadrada del numero que se pase como argumento
console.log(Math.random()) // Devuelve un numero aleatorio entre 0 y 1

// Para obtener un numero random se suele utilizar la siguiente sintaxis

// Math.random() * (max - min) + min
console.log(Math.random() * (100 - 1) + 1)

// Para quitar los decimales se puede usar los metodos de redondeo
console.log(Math.floor(1.99)) // Redondea hacia abajo
console.log(Math.ceil(1.1)) // Redondea hacia arriba

console.log(Math.floor(Math.random() * (9 - 1) + 1));

// new Date
// Genera una nueva fecha en horario UTC
// No es un string, es tipo fecha (es un objeto)

// Los meses en JS se procesan de 0 a 11. Donde 0 es enero y 11 diciembre
console.log(new Date(1999, 10, 30))

// Se pueden guardar en una variable
const fecha = new Date()

// Metodos de Date

// getMoth
// Se obtiene el mes de una fecha
console.log(fecha.getMonth())

// getDate
// Se obtiene el dia
console.log(fecha.getDate());

// getFullYear
// Se obtiene el año
console.log(fecha.getFullYear());

// toDateString
// Se visualiza la fecha en formato americano
console.log(fecha.toDateString());

// toLocalDateString
// Se visualiza la fecha en formato local
console.log(fecha.toLocaleDateString());

// toLocalString
// Se visualiza la fecha y la hora en formato local
console.log(fecha.toLocaleString());

// toTimeString
// Se visualiza la hora en formato local
console.log(fecha.toTimeString());