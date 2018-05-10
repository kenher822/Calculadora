window.onload = function () { //Acciones tras cargar la página
    pantalla = document.getElementById("textoPantalla");  //elemento pantalla de salida
    document.onkeydown = teclado;  //función teclado disponible
}

function teclado(elEvento) {
    evento = elEvento || window.event;
    k = evento.keyCode; // número de código de la tecla
    // teclas númerocas del teclado alfanúmerico
    if (k > 47 && k < 58) {
        k = k - 48; // número a mostrar
        p = String(p); // convertir en cadena para poder añadir en pantalla
        numero(p);
    }
    //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
    if (k > 95 && k < 106) {
        p = k - 96;
        p = String(p);
        numero(p);
    }
    if (k == 110 || k == 190) { numero(".") } //teclas de coma decimal
    if (k == 106) { operar('*') } //tecla multiplicación
    if (k == 107) { operar('+') } //tecla suma
    if (k == 109) { operar('-') } //tecla resta
    if (k == 111) { operar('/') } //tecla división
    if (k == 32 || k == 13) { igualar() } //Tecla igual: intro o barra espaciadora
    if (k == 46) { borradoTotal() } //Tecla borrado total: "supr"
    if (k == 8) { retro() } //Retroceso en escritura : tecla retroceso.
    if (k == 36) { borradoParcial() } //Tecla borrado parcial: tecla de inicio.
}