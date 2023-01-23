// Ajax
// Javascript Asincronico y XML



// API
// Application Programing Interface
// Interfaz de programacion de Aplicaciones
// Nexo entre dos componentes de software que permite la comunicacion entre ellos
// Ej: Javascript y una base de datos
// EJ de API: ""
// Las API tienen endpoints, en donde se organiza la informacion de los recursos



// FETCH
//fetch()
// Metodo asincronico (promesa), que permite hacer peticiones a una base de datos
// fetch(utl, {})
// Con fetch se pueden hacer hasta 5 tipo de peticiones a traves de los siguientes metodos:
// GET: Obtener informacion
// POST: Dar de alta informacion
// PUT o PATCH: Modificar los valores de un elemento preexistente
// DELTE: Borrar un elemento preefistente



///////////////////////////////////////////////////////////////////////



// Peticion GET
// Cuando utilizamos un fetch en peticion GET, el segundo argumento es optativo.

fetch("https://rickandmortyapi.com/api/character")
.then((respuesta) => respuesta.json())
.then((data) => console.log(data))

// En este caso estamos utilizando una API publica pero existen APIs privadas, las cuales nos piden una APIKEY para poder utilizarlas
// Para ello, debemos enviar esta APIKEY, que puede ser a traves de la URL o en un encabezado

// Hay dos tipos de URL
// URL Params
// En donde los parametros van a estar establecidos al finalizar un ENDPOINT, con el siguiente esquema:
// https://rickandmortyapi.com/api/character ---> El numero 100 representa un recurso especifico del servidor
// QUERY Params
//La informacion de la peticion va a estar definida en forma de claver/valor
// '?' se utiliza a parti del endpoint y define el comienzo de los queryparams, los queryparams se separan por el simbolo '&'
// https://newsapi.com/search?q=technology&from=2022-01-01&to=2022-12-31&sort_by=relevance



///////////////////////////////////////////////////////////////////////



// Metodo POST
// A traves de este motodo podemos enviar informacion
// Ej: Podes dar de alta un nuevo usuario
// Este metodo precisa que en el fetch se usen los dos argumentos
// La respuesta de un metodo post sera de 201

fetch("https://63ced1bc6d27349c2b7650e2.mockapi.io/estudiantes")
.then ( res => res.json())
.then( data => console.log(data))

/*fetch("https://63ced1bc6d27349c2b7650e2.mockapi.io/estudiantes", {
    method: "POST",
    body: JSON.stringify({
        name: "Federico Asta"
    }),
    headers: {
        "Content-Type": "application/json"
    }
});*/

// Metodo POST aplicado a un formulario
const form = document.getElementById("form-suscribe");
const formName = document.querySelector("#input-name");

form.addEventListener('sumbit', (e) => {

    e.preventDefault()

    fetch("https://63ced1bc6d27349c2b7650e2.mockapi.io/estudiantes", {
    method: "POST",
    body: JSON.stringify({
        name: formName.value
    }),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then ( res => res.json())
    .then( data => console.log(data))
});



// PUT y PATCH
// Nos permite modificar los valores de un recurso ya existente
// PUT modifica un elemento de manera completa
// PATCH modifica solamente una propiedad del elemento
// La forma de aplicar unos de estos metodos es muy similar al modo de uso del meotodo POST.

fetch("https://63ced1bc6d27349c2b7650e2.mockapi.io/estudiantes/1", {
    method: "PUT",
    body: JSON.stringify({
        name: "Nadia Yamamoto"
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then ( res => res.json())
.then( data => console.log(data))

// Como seria una funcion que me perimta modificar los nombres de los estudiantes? Pues algo asi:
function modificarNameEstudiante(id, nombre){
    fetch(`https://63ced1bc6d27349c2b7650e2.mockapi.io/estudiantes/${id}`, {
    method: "PUT",
    body: JSON.stringify({
        name: nombre
    }),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then ( res => res.json())
    .then( data => console.log(data))
    .catch(() => {
        console.log("No se pudo realizar la modificacion")
    })
};
modificarNameEstudiante(3, "Hernan Hernandez");



// Metodo DELETE
// Este metodo borra un elemento especifico
// Necesita que, en el FETCH, se pasen los dos argumentos, pero sin body ni headers

fetch("https://63ced1bc6d27349c2b7650e2.mockapi.io/estudiantes/6", {
    method: "DELETE"
})
.then( res => res.json())
.then( data => console.log(data))
.catch(() => console.log("No se pudo borrar ese recurso"))



// FETCH a JSON
// Se puede hacer fetch a un archivo alojado en nuestra carpeta
// La forma de hacer fetch y aplicar los metodos es la misma que cuando usamos una API solamente cambia al archvio al que dirigimos el fetch



// El FETCH tiene version SUGAR SYNTAX
// ASYNC AWAIT 
// Es una version simplificada de fetch

// No se puede manipular la informacion fuera de esta funcion
/*
const personajes = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const data = await respuesta.json()
    
};

personajes();
*/

// Como enviar elementos al DOM con la informacion a la que estamos haciendo Fetch si no podemos manipular la data fuera de la funcion?

const cards = (array) => {
    const nodos = array.reduce(( acc, element ) => {
        return acc + `
        <div class="card">
            <div class="card__img">
                <img src=${element.image} alt=${element.name}>
            </div>
            <h2 class="card__title">
                ${element.name}
            </h2>
            <h3 class="card__status">
                ${element.status}
            </h3>
        </div>
        `
    }, "")
    document.getElementById("ejemploFetchDomClase15").innerHTML = nodos
};

const personajes = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const data = await respuesta.json()
    cards(data.results)
    
};

personajes();


const botonAnterior = document.getElementById('anteriorPagina');

let paginaSiguiente = 1

document.getElementById('siguientePagina').onclick = () => {
    if(paginaSiguiente != 42){
        paginaSiguiente++
    }
    
    fetch(`https://rickandmortyapi.com/api/character/?page=2${paginaSiguiente}`)
    .then( res => res.json())
    .then( data => cards(data.results))
    .catch(() => console.log("No se pudo borrar ese recurso"))
};
document.getElementById('anteriorPagina').onclick = () => {
    if(paginaSiguiente > 1){
        paginaSiguiente--
    }
    
    fetch(`https://rickandmortyapi.com/api/character/?page=2${paginaSiguiente}`)
    .then( res => res.json())
    .then( data => cards(data.results))
    .catch(() => console.log("No se pudo borrar ese recurso"))
};
