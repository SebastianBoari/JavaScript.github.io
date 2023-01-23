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