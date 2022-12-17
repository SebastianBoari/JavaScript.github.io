// <----------------------------- Repaso de las clases 1 a 5: ------------------------------------------->

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <----------------------------Expresiones Regulare o tambien llamdas: RegEx-------------------------->
// Una expresión regular, o regex (de regular expression), es una secuencia “de caracteres que conforma un patrón de búsqueda”.
// La idea es poder buscar patrones de cadenas de caracteres u operaciones de sustituciones.
// Hay varios metodos de string en JavaScript algunos son

// Ejemplo de  .match:

// declaramos una variable
// let nombre = "Joaquin";

/*
// Hacemos un bucle for que nos va a servir para iterar por toda la cadena de caracteres de la variable
for ( let i = 0; i < nombre.length; i++ ){
    // Hacemos un condicional if en el que vamos a utilizar el metodo .match
    if ( nombre[i].match(/[aeiou]/)){
        console.log("Su nombre tiene las siguientes vocales: " + nombre[i]);
    }
}
*/

// Ejemplo de .charAt

// console.log(nombre.charAt(3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//<-------------------------BACKTICKS--------------------------------->

// Utilizamos estas comillas especiales porque nos permiten añadir y manipular variables dentro de una cadena de caracteres.
// Nos permite añadir template strings ${}

/*
let nombre = "Joaquin";
let edad = 32;

console.log( "Hola ${nombre}!" ); // No se va a mostrar en consola el valor de la variable nombre. 
console.log( "Hola " + nombre + "!"); // Se va a mostrar correctamente pero representa algo de trabajo extra concatenar.
console.log( `Hola ${nombre} su edad es de ${edad} años` ); // Podemos ver que el uso de Backticks nos permite añadir variables a un string sin problemas.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CONSIGNAS

// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio. A través de tres prompts, pídale al usuario los siguientes datos.

/////////// PARA EL CASO LOGIN

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.


// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí. En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".
// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.
// c) Valide con un bucle que el usuario tiene una arroba. De ser así, envíe el mensaje en consola: "Es un mail válido" e interrumpa el ciclo for con break. 
// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no haga nada. De lo contrario, envíe una alerta con el siguiente mensaje: "Su contraseña es insegura."
// e) Valide con un bucle que la contraseña al menos tenga un número. En el caso de que no tenga uno, envíe un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?". Si el usuario dice si, entonces cambie el valor de la contraseña.

/*

function containsNumber ( str ) {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        return true;
      }
    }
    return false;
  }

function registerUser() {
    const askRegister = confirm(`Quiere registrarse a nuestro newsletter?`);
    if (askRegister) {
      let newUserEmail = prompt(`Ingrese su mail: `);
      let newNickName = prompt(`Ingrese un nickname: `);
      let newUserPsw = prompt(`Ingrese una constraseña: `);
      return { askRegister, newUserEmail, newNickName, newUserPsw };
    } else {
      alert(`No hay problema, vuelva pronto!`);
      return false;
    }
  }
  let registerData = registerUser();

function emailChecker ( registerData ){
    if ( registerData.askRegister ){
        for (let i = 0; i < registerData.newUserEmail.length; i++){
            if (registerData.newUserEmail.includes("@") && registerData.newUserEmail.length >= 8 ) {
                break;
            } else {
                registerData.newUserEmail = prompt( "Su mail no contiene arroba, mail invalido. Reasigne un mail nuevo: " );
            }
        }
    } 
}

function pswChecker ( registerData ) { 
    if ( registerData.askRegister ){
        if (containsNumber( registerData.newUserPsw )){
            return true;
        } else {
            registerData.newUserPsw = prompt( `Su contraseña debe contener al menos un numero por favor escriba una nueva contraseña: ` );
        }
    }   
}

function logInUser (){
    const askLogIn = confirm( `Quiere iniciar sesion?` );
    if ( askLogIn ) {
        let userEmail = prompt( `Ingrese su mail: ` );
        let userPsw = prompt( `Ingrese una constrasña: ` );
        return { userEmail, userPsw };
    } else {
        alert( `No hay problema, vuelva pronto!` );
        return false; 
    }
}
let askLogInData = logInUser ();

function logInChecker ( askLogInData, registerData ){
    let attempts = 0;
  
    for(;;){
      if ( askLogInData.userEmail === registerData.newUserEmail && askLogInData.userPsw === registerData.newUserPsw ){
          alert( `Que gusto verte por aca ${ registerData.newNickName }! Mira nuestras novedades: ` );
          break;
      } else if ( askLogInData.userEmail === registerData.newUserEmail && askLogInData.userPsw !== registerData.newUserPsw ){
          alert( `Contraseña invalida: intente nuevamente.` );
          attempts++;
      } else if ( askLogInData.userEmail !== registerData.newUserEmail && askLogInData.userPsw !== registerData.newUserPsw  ){
          alert( `Mail y contraseña invalidos: intente nuevamente.` );
          attempts++;
      }
  
      if(attempts >= 3){
        alert(`Ha alcanzado el límite de intentos. Por favor, intente más tarde.`);
        break;
      }
  
      logInUser();
    }
  }
  

registerUser();
emailChecker ( registerData );
pswChecker ( registerData );
logInUser ();
logInChecker ( askLogInData, registerData )

*/

/*

///////////////////////////////// HEROES

// 2) GENERE 6 VARIABLES PARA DOS CHARACTERS DIFERENTES: tipoDeHeroe, danioBase y vidaBase (para el héroe). Para el enemigo: tipoDeMonstruo, danioMostruoBase y vidaMonstruoBase. tipoDeHeroe y tipoDeMonstruo tiene un string vacío como valor, danioMonstruoBase, danioBase, vidaMonstruoBase y vidaBase valen cero como valor. Use variables que puedan ser reasignadas.

///////////////////////////////// para interactuar con el usuario

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS. UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un mago, guerrero o tanque?". En el caso de que elija mago, la vida que se le asignará a vidaBase será de 225, en el caso de que elija guerrero 300 y tanque 450. Para danioBase: mago --> 150, guerrero ---> 80 y tank ---> 50.
// b) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un gobling, orco o demonio?". Para la variable de vidaMonstruoBase: en el caso de que elija gobling: 180, en el caso de que elija orco 350 y demonio: 450. Para danioMonstruoBase: gobling --> 70, orco ---> 130 y demonio ---> 110.
// c) Con un bucle, genere 3 encuentros entre los contrincantes. Usando las estadísticas de los personajes, se deberán registrar los movimientos mediante cada iteración: `El ${heroe} ha atacado al ${monstruo}, por ${x} de daño. El monstruo ha perdido ${x} puntos de vida`. También en el caso del monstruo: `El ${monstruo} ha atacado al ${heroe}, por ${x} de daño. El heroe ha perdido ${x} puntos de vida`.
// d) mediante una estructura condicional, valide la vida del héroe y del monstruo. Si alguno de ellos llega a 0 o menos de vida, entonces detenga la iteración del ciclo. Eso se puede con el uso de break dentro del bucle. Antes de detener la iteración, envíe un mensaje en consola: `El ${x} ha caído. El ganador del encuentro es: ${y}`
// e) EN EL CASO DE QUE NO MUERA NINGUNO, VERIFICAR QUIÉN ES EL QUE TIENE MÁS VIDA. ENVIAR UN MENSAJE EN CONSOLA QUE AVISE QUIÉN FUE EL GANADOR DEL ENCUENTRO
// F) SI TIENEN LA MISMA VIDA, ENVIAR UN MENSAJE EN CONSOLA QUE MUESTREN QUE EMPATARON.


// Variables de los personajes:
let tipoDeHeroe = "";
let danioBase = 0;
let vidaBase = 0;
// Variables de los enemigos:
let tipoDeMonstruo = "";
let  danioMostruoBase = 0;
let vidaMonstruoBase = 0;

// a) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un mago, guerrero o tanque?". En el caso de que elija mago, la vida que se le asignará a vidaBase será de 225, en el caso de que elija guerrero 300 y tanque 450. Para danioBase: mago --> 150, guerrero ---> 80 y tank ---> 50.

let chooseCharacter = prompt( `Que personaje desea crear? Las opciones son: mago, guerrero o tanque.` );
function createCharacter ( chooseCharacter ){
    if ( chooseCharacter === `mago` ){
        tipoDeHeroe = `mago`;
        danioBase = 150;
        vidaBase = 225;
    } else if ( chooseCharacter === `guerrero` ){
        tipoDeHeroe = `guerrero`;
        danioBase = 80;
        vidaBase = 300;
    } else if ( chooseCharacter === `tanque` ){
        tipoDeHeroe = `tanque`;
        danioBase = 50;
        vidaBase = 450;
    } else {
        chooseCharacter = prompt( `El personaje que ha elegido no existe o no esta disnponible por favor escriba una opcion valida: mago, guerrero o tanque.` );
    }
    
}


createCharacter(  chooseCharacter );

// b) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un gobling, orco o demonio?". Para la variable de vidaMonstruoBase: en el caso de que elija gobling: 180, en el caso de que elija orco 350 y demonio: 450. Para danioMonstruoBase: gobling --> 70, orco ---> 130 y demonio ---> 110.


let chooseEnemy = prompt( `Que enemigo desea combatir? Las opciones son: gobling, orco o demonio` );

function createEnemy ( chooseEnemy ){
    for(;;){
        if ( chooseEnemy === `gobling` ){
            tipoDeMonstruo = `gobling`;
            danioMostruoBase = 70;
            vidaMonstruoBase = 180;
            break
        } else if ( chooseCharacter === `orco` ){
            tipoDeMonstruo = `orco`;
            danioMostruoBase = 130;
            vidaMonstruoBase = 350;
            break
        } else if ( chooseCharacter === `demonio` ){
            tipoDeMonstruo = `demonio`;
            danioMostruoBase = 110;
            vidaMonstruoBase = 450;
            break
        } else {
            chooseCharacter = prompt( `El enemigo que ha elegido no existe o no esta disnponible por favor escriba una opcion valida: gobling, orco o demonio.` );
        }
    }
}


createEnemy( chooseEnemy );

// c) Con un bucle, genere 3 encuentros entre los contrincantes. Usando las estadísticas de los personajes, se deberán registrar los movimientos mediante cada iteración: `El ${heroe} ha atacado al ${monstruo}, por ${x} de daño. El monstruo ha perdido ${x} puntos de vida`. También en el caso del monstruo: `El ${monstruo} ha atacado al ${heroe}, por ${x} de daño. El heroe ha perdido ${x} puntos de vida`.
// d) mediante una estructura condicional, valide la vida del héroe y del monstruo. Si alguno de ellos llega a 0 o menos de vida, entonces detenga la iteración del ciclo. Eso se puede con el uso de break dentro del bucle. Antes de detener la iteración, envíe un mensaje en consola: `El ${x} ha caído. El ganador del encuentro es: ${y}`
// e) EN EL CASO DE QUE NO MUERA NINGUNO, VERIFICAR QUIÉN ES EL QUE TIENE MÁS VIDA. ENVIAR UN MENSAJE EN CONSOLA QUE AVISE QUIÉN FUE EL GANADOR DEL ENCUENTRO
// F) SI TIENEN LA MISMA VIDA, ENVIAR UN MENSAJE EN CONSOLA QUE MUESTREN QUE EMPATARON.


function createBattle ( tipoDeHeroe, danioBase, vidaBase, tipoDeMonstruo, danioMostruoBase, vidaMonstruoBase ){
    for ( let i = 0; i < 3; i++){

        vidaMonstruoBase = vidaMonstruoBase - danioBase;
        alert( `Tu ${ tipoDeHeroe } ha atacado al ${ tipoDeMonstruo }. El monstruo ha perdido ${ danioBase } puntos de vida. Stats: Salud de tu personaje: ${ vidaBase } Salud del enemigo: ${ vidaMonstruoBase }` );

        vidaBase = vidaBase - danioMostruoBase;
        alert( `El ${ tipoDeMonstruo } ha atacado a tu ${ tipoDeHeroe }. Tu ${ tipoDeHeroe } ha perdido ${ danioMostruoBase } puntos de vida. Stats: Salud de tu personaje: ${ vidaBase } Salud del enemigo: ${ vidaMonstruoBase  }` );

        i++
        
        if ( vidaBase < vidaMonstruoBase  || vidaBase <= 0 ){
            alert( `Has fallado, tu ${ tipoDeHeroe } ha sido vencido por el ${ tipoDeMonstruo }. Has perecido en batalla, nadie recordara tu nombre. Tal vez renazcas de las cenizas, tal vez nunca lo consigas.` );
            break
        } else if ( vidaBase > vidaMonstruoBase  || vidaMonstruoBase <= 0 ){
            alert( `Has ganado, tu ${ tipoDeHeroe } ha vencido al ${ tipoDeMonstruo }. Que los dioses te acompañen en tu sendero en busca de la gloria.` );
            break
        } else if ( vidaBase === vidaMonstruoBase ){
            alert( `Ha sido una dura batalla y ambos se rinden, tu ${ tipoDeHeroe } y el ${ tipoDeMonstruo } se han hecho mucho daño. Han acordado paz... una paz no muy duradera` );
            break
        }
    }

}


createBattle( tipoDeHeroe, danioBase, vidaBase, tipoDeMonstruo, danioMostruoBase, vidaMonstruoBase );
*/



//////////////////////////////////////

// 3) Genere 2 prompt: uno que guarde el nombre del usuario y otro que permita al usuario ingresar una nota de menos de 30 caracteres.

/////// PARA EL CASO BLOG

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Verifique que la entrada del usuario sea menor a 30 caracteres. En el caso de que no lo sea, envíe una alerta con la siguiente frase: "Esta entrada excede la cantidad de caracteres disponibles."
// b) En el caso de que el ingreso sea correcto, envíe una alerta que muestre el nombre del usuario y la nota que acaba de ingresar.
// c) Realice un bucle que envíe tres cuadros de diálogo confirm que sean las solicitudes de amistad de nuevos contactos. En cada iteración se debe poder visualizar el mensaje: "El usuario ${i} te envió una solicitud de amistad". 

/*
let userName = prompt( `Ingrese su nombre de usuario: ` );
let userPost = prompt( `Ingrese una nota de menos de 30 caracteres: ` );

function postChecker( userPost ){
    if ( userPost.length > 30 ){
        userPost = prompt( `Esta entrada excede la cantidad de caracteres disponibles.` );
    } 
}

function publicPost ( userPost ){
    if ( userPost.length >= 1 && userPost.length <= 30 ){
        alert( `${ userName }: "${ userPost }".` );
    }
}

let user1 = "Martin Martinez";
let user2 = "Fernando Fernandez";
let user3 = "Martina Martinelli";

let users = [user1, user2, user3];

function friendRequest ( users ){
    for( let i = 0; i < users.length; i++ ){
        let result = confirm(`El usuario ${users[i]} te envió una solicitud de amistad`);
        if ( result ) {
            alert(`Has añadido exitosamente a ${users[i]} a tu lista de amigos.`);
        } else {
            alert(`Solicitud de amistad rechazada.`);
        }
    }
}

postChecker( userPost );
publicPost ( userPost );
friendRequest ( users );
*/