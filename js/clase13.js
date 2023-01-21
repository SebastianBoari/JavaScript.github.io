// LIBRERIAS
// Las librerias proporcionan funcionalidades que pueden ser incorporadas en nuestro codigo
// Para poder utilizar una libreria deber leer la documentacion del creador
// Tener cuidado con librerias que no tengan soporte

// Pasos para inlcuir una libreria

// 1) Buscar en la documentacion la forma en la cual se instala en nuestro proyecto
// Si instalamos una libreria por CDN debemos vigilar que el archivo principal de JS este a lo ultimo antes de la etiqueta de cierre del body

// 2) Leer la documentacion sobre como funciona la libreria



//////////////////////////////////////////////////////////////////////////////////////////////



// Libreria: SWEET ALERT
// Su presencia se ejerce como una promesa (mas adelante en las clases vamos a entenderlo)

// Funcion creada por Sweet Alert:
// swal();

// Parametros que recibe la funcion swal();
// Puede recibir como parametros strings o un objeto

// string
// swal("Hola soy una cadena de caracteres");

// Dos strings (titulo y subtitulo)
// swal("Hola chicos", "soy una cadena de caracteres");

// Implementar iconos
// nombres de iconos: success, warning, error, info, question, heart, custom
// swal("titulo", "subtitulo", "error");

// Podemos pasar un objeto como argumento
/*swal({
    title: "Hola, soy un titulo.",
    text: "Soy un texto.",
    icon: "warning",
    button: "Soy un boton"
});*/

// Tambien se pueden utilizar los iconos de font awesome, especificando el nombre del icono deseado, o tambien se puede utilizar una URL para una imagen personalizada.
/*swal({
    title: "Custom icon",
    icon: "../img/jslogo.webp",
    text: "This is a custom icon",
});*/

// Esta libreria interactuca a traves de botones, y tambien podemos agregar botones 
/*swal({
    title: "Custom icon",
    icon: "../img/jslogo.webp",
    text: "This is a custom icon",
    buttons: true, // Agrega otro boton que por defecto es "cancel"
});*/
// Para incorporar mas de un boton y cambiar sus valores por defecto
/*swal({
    buttons: ["Cancelar", "Aceptar"]
});*/
// Para incorporar mas de un boton y cambiar solo un valor y al otro dejarlo con su valor default
/*swal({
    buttons: [true, "Texto que no es el default"]
});*/
// Otra forma de incorporar mas de un boton
/*swal({
    buttons: {
        cancel: "no",
        aquiPuedesInventar: "Y aqui tambien",
        miraSoyUnTercerBoton: "Y yo otro texto cualquiera"
    }
});*/
// Sweet alert utiliza promesas para realizar un seguimiento de como el usuario interactua con la alerta.
// Me permite saber que valor estoy teniendo como respuesta
/*swal("Haga click en ok o fuera del modal")
.then( value => {
    swal(`Este es el valor de lo que eligio el usuario: ${value}`)
});*/

// Sweet alert devuelve null siempre que el usuario interactue con cualquier cosa menos con el boton azul que generalmente es el de aceptar, si hace click fuera de la alerta o en cancelar el valor que devuevle es null, si hace click en aceptar devuelve true.

//  Como manipular el input del usuario?
// Ejemplo:

/*swal("Un animal desconocido se curza en tu camino, parece enfadado. Que haces?", {
    buttons: {
        cancel: "Tengo miedo, huir",
        acariciar: "Trato de acariciarlo❤️",
        golpear: "Debe ser hostil, mejor lo golpeo😡"
    }
}).then( value => {
    if(value === "acariciar"){
        swal("Es un perrito algo extraño pero es amigable y solo queria que le rasques la pancita😊")
    } else if(value === "golpear"){
        swal("Por suerte es un animal muy rapido y miedoso, huyo de ti inmediatamente")
    } else {
        swal("Es un animal salvaje muy rapido, te alcanza y te obliga a que le rasques la pancita, era un perrito😊")
    }
});*/

// Implementar Sweet Alert a un elemento:
const form = document.querySelector('form');
form.onsubmit = (e) => {
    e.preventDefault()
    swal("Su formulario ha sido enviado")
}



//////////////////////////////////////////////////////////////////////////////////////////////



// Libreria: TOASTIFY
// Es una libreria que nos permite implementar notificaciones

/*Toastify({
    text: "prueba 1", // Cambiar texto 
    duration: 1000, // Cambia la duracion
    close: true, // Agrega una cruz para cerrar la notificacion
}).showToast()*/

// Para encontrar mas valores y cambiarlos leer la documentacion en github.

// Implementar toastify en un boton creado por nosotros:
// Lo mejor es crear una funcion para notificar y llamarla directamente en el addEventListener para tener un mayor nivel de abstraccion
const botonPruebaToastify = document.getElementById('toasty');
botonPruebaToastify.addEventListener('click', () => {
    Toastify({
        text: "Al parecer anda todo bien, todo correcto👍",
        duration: 2000,
        close: true,
    }).showToast()
});

/////////////////////////////////////////////////////////////////////////////////////////////



// Libreria: SWIPER
// Nos permite implementar carruseles de todo tipo
// Para implementar Swiper en JavaScript vanilla se debe incluir el contenido HTML con las clases correspondientes, los estilos correspondientes y la inicializacion en javascript para que funcione correctamente todo. Los estilos, html, javascript son modificables hasta cierto punto pero se pueden romper. Leer documentacion para personalizar


// Swiper Initialize
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});



//////////////////////////////////////////////////////////////////////////



// Libreria: LUXON
// Nos permite simplificar el trabajar con fechas y horas en JavaScript
// Luxon se controla con una clase llamada DateTime, esto representa un milisegundo especifico en el tiempo, junto con una zona horaria y una configuracion regional.


// Forma tradicional:
const fechaActual = new Date()
console.log(fechaActual);


// Con Luxon:
// Para poder empezar a trabajar con fechas, precisamos crear la clase DateTime
// Asignamos a una variable el contenido luxon.DateTime

const DateTime =  luxon.DateTime;
console.log(DateTime);

// Para obtener la fecha actual utilizamos .now()
const fechaActualLuxon = DateTime.now();
console.log(fechaActualLuxon);

// Como trabajar con una fecha diferente a la actual
// Utilizamos el atributo .local()
const fechaEspecificaLuxon = DateTime.local(1900, 6, 24);
console.log(fechaEspecificaLuxon);

// Se puede instanciar fechas pasando como argumento dos objetos
// El primer objeto va a estar referido al tiempo
// El segundo objeto va a estar referido a la zona horaria y tipo de numeracion
// Para esto debemos utilizar .fromObject()

const fechaDesdeObjetosLuxon = DateTime.fromObject(
    {
        day: 10,
        hour: 15,
        month: 5,
        year: 1960
    },
    {
        zona: "America/Buenos_Aires",
        numberingSystem: 'beng'
    }
);
console.log(fechaDesdeObjetosLuxon);

// Podemos utilizar toString() o toLocaleString() para visualizar una forma local de la fecha
console.log(fechaDesdeObjetosLuxon.toString());
console.log(fechaDesdeObjetosLuxon.toLocaleString());

// Como acceder a un valor en especifico?

console.log(fechaDesdeObjetosLuxon.year);
console.log(fechaDesdeObjetosLuxon.month);
console.log(fechaDesdeObjetosLuxon.day);
console.log(fechaDesdeObjetosLuxon.second);
console.log(fechaDesdeObjetosLuxon.weekday);
console.log(fechaDesdeObjetosLuxon.zoneName);
console.log(fechaDesdeObjetosLuxon.daysInMonth);

// Para visualizar las fechas de diferentes maneras, luxon ofrece una lista de pre-sets que van a permitirnos elegir la forma deseada

// Para poder utilizar los pre-sets es necesarios pasarlos como argumentos al toLocaleString() 
console.log(fechaActualLuxon.toLocaleString(DateTime.DATE_SHORT)); // 21/1/2023
console.log(fechaActualLuxon.toLocaleString(DateTime.DATE_MED)); // 21 ene 2023
console.log(fechaActualLuxon.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)); // sáb, 21 ene 2023
console.log(fechaActualLuxon.toLocaleString(DateTime.DATE_FULL)); // 21 de enero de 2023
console.log(fechaActualLuxon.toLocaleString(DateTime.DATE_HUGE)); // sábado, 21 de enero de 2023
console.log(fechaActualLuxon.toLocaleString(DateTime.DATE_SIMPLE)); // 21/1/2023

// Si concatenamos el metodo .setLocale podemos cambiar el idioma de presentacion
console.log(fechaActualLuxon.setLocale('en').toLocaleString(DateTime.DATE_HUGE));

// Los objetos en luxon son inmutables. Eso significa que los metodos de transformacion (operaciones) retornar instancias nuevas alteradas  de esos valores, es decir fechas.

// PLUS
// Se puede sumar tiempo a fechas
const milAniosEnElFuturo = fechaActualLuxon.plus({
    years: 1000
});
console.log(fechaActualLuxon);
console.log(milAniosEnElFuturo);

// MINUS
// Se puede restar tiempo a fechas
const milAniosEnElPasado = fechaActualLuxon.minus({
    years: 1000
});
console.log(fechaActualLuxon);
console.log(milAniosEnElPasado);

// Clase Interval
// Podemos enviar dos fechas y nos devuelve el intervalo de tiempo entre ellas

const Interval = luxon.Interval;

const entrePasadoYFuturo = Interval.fromDateTimes(milAniosEnElPasado, milAniosEnElFuturo);

console.log(entrePasadoYFuturo.length("seconds")); // 63113900820

console.log(entrePasadoYFuturo.length("days")); // 730485

console.log(entrePasadoYFuturo.length("years")); // 2000
