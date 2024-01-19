



/*let parrafo = document.querySelector("p") //parrafo del html
parrafo.innerHTML = "Escoge un numero entre el 1 & 10, por favor :)" */

//declaración de funcion que haga una acción{}

let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
//console.log(numeroSecreto); revelador del numero secreto en consola


function asignarTextoElemento(elemento, texto) {  //(parametros para reutilizar la función)
 
    let titulo = document.querySelector(elemento); //Puente entre html y Javascript
    titulo.innerHTML = texto; //aparece el titulo en el HTML
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    //validaciones de datos

    //console.log(typeof(numeroDeUsuario));
    
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);

    //Condicionales 

    console.log(numeroDeUsuario === numeroSecreto); //boleano // === tipo y valdiacion para que de true validar lo que es con lon que es

    console.log(numeroIntentos);

    if(numeroDeUsuario == numeroSecreto){

        asignarTextoElemento("p", `¡Muy bien acertaste el numero, tu cantidad de intentos fue de ${numeroIntentos} ${(numeroIntentos == 1 ) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // el usuario acierta o no acierta

        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es Menor, cuidado");
        } else{
            asignarTextoElemento("p", "El numero secreto es Mayor, cuidado amigo");
        }
        numeroIntentos++;
        limpiarCajita();
        
    }


    return;

}
//funciones siempre afuera

function limpiarCajita(){
    let valorCajita = document.querySelector('#valorUsuario').value = ""; 
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si el numero ghenerado esta incluido en la lista si esta en la lista realizar operacion si no realizar otra
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numerito secreto");
    asignarTextoElemento("p","¡Por favor indicame un numero entre 1 y 10!");
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;

}
function reiniciarJuego() {
    //Limpiar la caja
    limpiarCajita();
    //indicar mensaje de inicio intervalo
    //generar numero aleatorio
    //intentos
   condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciarJuego").setAttribute("disable","true");
    
}

condicionesIniciales();












