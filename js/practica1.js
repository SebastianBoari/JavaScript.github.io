// Actividades practicas de repaso a clases anteriores: 

// 1- Escribe una función que tome dos números y devuelva la suma de ellos.

function suma(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
};
console.log(suma(12, 21));

// 2- Escribe una función que tome un número y devuelva su valor absoluto.

function valorAbsoluto(numero){
    return Math.abs(numero);
}
console.log(valorAbsoluto(-12));
console.log(valorAbsoluto(12));

// 3- Escribe una función que tome una cadena de texto y devuelva la cantidad de palabras que contiene.

let textoHistoriaGeneral = "En el año 1453, el Imperio Otomano tomó Constantinopla, lo que puso fin al Imperio Romano de Oriente y marcó el fin del mundo occidental clásico.";

function cuantasPalabras(texto){
    let textoDividido = texto.split(" ");
    return textoDividido.length;
}

console.log(cuantasPalabras(textoHistoriaGeneral));

// 4- Escribe una función que tome una cadena de texto y devuelva la palabra más larga de la cadena.

function palabraMasLarga(texto){
    let textoDividido = texto.split(" ");
    let palabraMasLarga = "";
 
    for (let i = 0; i < textoDividido.length; i++) {
        let palabra = textoDividido[i];
        if (palabra.length > palabraMasLarga.length){
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
};

console.log(palabraMasLarga(textoHistoriaGeneral));

// 5- Escribe una función que tome una lista de números y devuelva el mayor de todos ellos.

let numeros = [122, 240, 560, 999, 2, 411, 1.56, 1270, 20, 1997, 3000, 7566, 156, 278, 1000999];

function numeroMayor(listaDeNumeros){
    let numeroMayor = 0;

    for ( let i = 0; i < listaDeNumeros.length; i++){
        let numeroActual = listaDeNumeros[i];
        if (numeroActual > numeroMayor){
            numeroMayor = numeroActual;
        }
    }

    return numeroMayor;
}

console.log(numeroMayor(numeros));

// 6- Escribe una función que tome una lista de números y devuelva el menor de todos ellos.

function numeroMenor(listaDeNumeros){
    // Decidi aplicarle el valor inicial 'infinity' ya que si inicializaba la variable en 0 podria incurrir en un compartamiento indeseado ya que si la listaDeNumeros no contiene ningun numero menor a 0 se iba a mostrar siempre el valor inicial hardcodeado de la variable numeroMenor.
    let numeroMenor = Infinity;

    for ( let i = 0; i < listaDeNumeros.length; i++){
        let numeroActual = listaDeNumeros[i];
        if (numeroActual < numeroMenor){
            numeroMenor = numeroActual;
        }
    }

    return numeroMenor;
};
console.log(numeroMenor(numeros));

// 7- Escribe una función que tome un número y devuelva true si es par, o false si es impar.

function esPar(numero){
    let esPar ;
    if(numero % 2 == 0){
        esPar = true;
    } else {
        esPar = false;
    }
    return console.log(esPar);
};

esPar(5);
esPar(8);

// 8- Escribe una función que tome una lista de nombres y devuelva la cantidad de nombres que contiene.

let listaAlumnado = ['Jose Almeida', 'Enzo Berelli', 'Facundo Metzer', 'Juan Irigoyen', 'Diego Sack', 'Mario Martinelli', 'Sebastian Ramos', 'Sergio Dominguez', 'Ramiro Olivera', 'Alejandro Diz'];

function cuantosNombres(listaDeNombres){
    return console.log(listaDeNombres.length);
};

cuantosNombres(listaAlumnado);

// 9- Escribe una función que tome una lista de nombres y devuelva la lista de nombres en orden alfabético.


function ordenarAlfabeticamente(listadoDeTexto){
    return console.log(listadoDeTexto.sort());
};

ordenarAlfabeticamente(listaAlumnado);

// 10- Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números a la potencia de 2.

function potenciaDeDos(listaDeNumeros){

    listaDeNumerosElevadosAlCuadrado = [];

    for (let i = 0; i < listaDeNumeros.length; i++) {
        let numeroElevadoAlCuadrado = Math.pow(listaDeNumeros[i], 2);
        listaDeNumerosElevadosAlCuadrado.push(numeroElevadoAlCuadrado);
    }

    return listaDeNumerosElevadosAlCuadrado;
};

console.log(potenciaDeDos(numeros));


// 11- Escribe una función que tome una lista de números y devuelva el promedio de todos los números en la lista.

let notas = [8, 7, 5, 6, 8, 8, 9, 6, 8, 7, 4, 10];

function calcularPromedio(listadoDeNumeros){
    let suma = 0;
    let cantidadDeNumeros = listadoDeNumeros.length;

    for (let i = 0; i < listadoDeNumeros.length; i++) {
        let numeroActual = listadoDeNumeros[i];
        suma = numeroActual + suma;
    }
    
    return suma / cantidadDeNumeros;
};

console.log(calcularPromedio(notas));


// 12- Escribe una función que tome una cadena de texto y devuelva una nueva cadena con todas las palabras en orden inverso.

function ordenarDelReves(array){
    let nuevoArray = array.reverse();
    
    return nuevoArray;
};

console.log(ordenarDelReves(listaAlumnado));

// 13- Escribe una función que tome una lista de nombres y devuelva una lista de todos los nombres con una letra añadida al final.

let directivos =  ['Guillermo', 'Silvia', 'Americo', 'Jorge', 'Virginia', 'Leticia'];


function agregarLetraAlFinal(array, letra){
    let arrayConLetraAgregada = [];

    for (let i = 0; i < array.length; i++) {
        let letraAgregada = array[i] + letra;
        arrayConLetraAgregada.push(letraAgregada);
    }
    return console.log(arrayConLetraAgregada);
};

agregarLetraAlFinal(directivos, 'n');



// 14- Escribe una función que tome una lista de números y devuelva una nueva lista con sólo los números pares.

function listarPares(listaDeNumeros){
   let listaDeNumerosPares = [];
   
   for (let i = 0; i < listaDeNumeros.length; i++) {
    let numeroActual = listaDeNumeros[i];
    if (numeroActual % 2 == 0){
        listaDeNumerosPares.push(numeroActual);
    }
   }
   
   return console.log(listaDeNumerosPares);
};

listarPares(notas);


// 15- Escribe una función que tome una lista de números y devuelva la suma de todos los números múltiplos de 3.

let muchosNumerosCinco = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

function sumarMultiplosDeTres(listaDeNumeros){
    let multiplosDeTres = [];
    let sumaMultiplosDeTres = 0;

    for (let i = 0; i < listaDeNumeros.length; i++) {
        let numeroActual = listaDeNumeros[i];
        if (numeroActual % 3 == 0){
            multiplosDeTres.push(numeroActual);
        }
    };

    for (let i = 0; i < multiplosDeTres.length; i++) {
        let numeroActual = multiplosDeTres[i];
        sumaMultiplosDeTres = sumaMultiplosDeTres + numeroActual;
    };

    if (sumaMultiplosDeTres == 0){
        return console.log('No hay multiplos de 3.');
    } else if (sumaMultiplosDeTres % 3 == 0){
        return console.log(sumaMultiplosDeTres);
    }
}

sumarMultiplosDeTres(notas);
sumarMultiplosDeTres(muchosNumerosCinco);


// 16- Escribe una función que tome una cadena de texto y devuelva una nueva cadena con todas las palabras en mayúsculas.

function pasarAMayus(array){
    let todoEnMayus = [];

    for (let i = 0; i < array.length; i++) {
        let elementoActual = array[i].toUpperCase();
        todoEnMayus.push(elementoActual);
    }

    return console.log(todoEnMayus);
};

pasarAMayus(directivos);


// 17- Escribe una función que tome una lista de nombres y devuelva una lista de todos los nombres con la primera letra en mayúsculas.

let nombresSinMayus = ['brian', 'lucas', 'facundo', 'juan', 'bautista', 'salvador'];

function pasarPrimerLetraAMayus(array){
    let primeraLetraAMayus = [];

    for (let i = 0; i < array.length; i++) {
        let elementoActual = array[i];
        let primeraLetra = elementoActual.charAt(0);
        let restoDeLaPalabra = elementoActual.slice(1);
        let palabraConPrimerLetraAMayus = primeraLetra.toUpperCase() + restoDeLaPalabra;
        primeraLetraAMayus.push(palabraConPrimerLetraAMayus);
    }

    return console.log(primeraLetraAMayus);
}

pasarPrimerLetraAMayus(nombresSinMayus);


