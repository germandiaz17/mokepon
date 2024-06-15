let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("btn-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador); 

    let ocultarAtaques = document.getElementById("seleccionar-ataque");
    ocultarAtaques.style.display = "none";

    let ocultarBtnReiniciar = document.getElementById("reiniciar");
    ocultarBtnReiniciar.style.display = "none";

    //ataques
    let btnFuego = document.getElementById("btn-fuego");
    btnFuego.addEventListener("click", ataqueFuego);

    let btnAgua = document.getElementById("btn-agua");
    btnAgua.addEventListener("click", ataqueAgua);

    let btnTierra = document.getElementById("btn-tierra");
    btnTierra.addEventListener("click", ataqueTierra);

    let btnReiniciar = document.getElementById("btn-reiniciar");
    btnReiniciar.addEventListener("click", reiniciarJuego);
};

function seleccionarMascotaJugador() {
    let ocultarMascotas = document.getElementById("seleccionar-mascota");
    ocultarMascotas.style.display = "none";

    let ocultarAtaques = document.getElementById("seleccionar-ataque");
    ocultarAtaques.style.display = "flex";

    //variables de las mascotas
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");

    //span de mascotas
    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "HIPODOGE";
    }else if(inputCapipepo.checked) { 
        spanMascotaJugador.innerHTML = "CAPIPEPO";
    }else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "RATIGUEYA";
    }else{
        alert("Selecciona una mascota")
    };

    seleccionarMascotaEnemigo();
};

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "HIPODOGE"
    }else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "CAPIPEPO"
    }else{
        spanMascotaEnemigo.innerHTML = "RATIGUEYA"
    };
}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    }else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    };

    combate();
}

//funcion combate

function combate() {
    
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE");
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }else{ 
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    revisarVidas();
};

function crearMensaje(resultadoCombate) {
    let sectionMensajes = document.getElementById("resultado");
    let ataquesJugador = document.getElementById("ataques-jugador");
    let ataquesEnemigo = document.getElementById("ataques-enemigo");

    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");

    sectionMensajes.innerHTML = resultadoCombate;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

    ataquesJugador.appendChild(nuevoAtaqueJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado");
    sectionMensajes.innerHTML =  resultadoFinal;


    //deshabilitar botones
    let btnFuego = document.getElementById("btn-fuego");
    btnFuego.disabled = true;

    let btnAgua = document.getElementById("btn-agua");
    btnAgua.disabled = true;

    let btnTierra = document.getElementById("btn-tierra");
    btnTierra.disabled = true;

    //mostrar boton de reiniciar
    let mostrarBtnReiniciar = document.getElementById("reiniciar");
    mostrarBtnReiniciar.style.display = "block";
}

//funciones de los ataques

function ataqueFuego () {
    ataqueJugador = "FUEGO";
    seleccionarAtaqueEnemigo();
};

function ataqueAgua () {
    ataqueJugador = "AGUA";
    seleccionarAtaqueEnemigo();
};

function ataqueTierra () {
    ataqueJugador = "TIERRA";
    seleccionarAtaqueEnemigo();
};

//revisar vidas
function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! GANASTE🙌");
    }else if(vidasJugador == 0) {
        crearMensajeFinal("Lo lamento, PERDISTE😢");
    };
};

//reiniciar juego
function reiniciarJuego() {
    location.reload();
};

//funcion de numeros aleatorios
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

window.addEventListener("load", iniciarJuego);