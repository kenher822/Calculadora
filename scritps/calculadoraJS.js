window.onload = function () {
    // Acciones treas cargar la página    
    pantalla = this.document.getElementById("textoPantalla"); //Elemento parantalla de salida
    document.onkeydown = teclado;
}
x = "0"; // guardar número en pantalla
xi = 1;  // iniciar número en pantalla: 1=si; 0=no
decimal = 0; //estado número decimal:  1=si; 0=no
ni = 0; // número oculto en espera
op = "no" // operación en curso: "no" = sin operación


function numero(xx) { // recoge el número pulsado en el argumento.
    if (x == 0 || xi == 1) { //inicializar un número
        pantalla.innerHTML = xx; // mostrar pantalla.
        x = xx; // guardar número
        if (xx == ".") { // si escribimos decimal al principio del número
            pantalla.innerHTML = "0." // escribimo "0."
            x = xx; // guardar número
            decimal = 1; // cambiar estado del decimal
        }
    }
    else { // continuar escribiendo un número
        if (xx == "." && decimal == 0) { // si escribimos decimal por primera vez
            pantalla.innerHTML += xx;
            x += xx;
            decimal = 1; // cambiar el estado del decimal
        }
        // si intentamos escribir una segunda vez decimal no realizar ninguna acción.
        else if (xx == "." && decimal == 1) { }
        // resto de casos: escribir un número del 0 al 9
        else {
            pantalla.innerHTML += xx; //añadimos y mostramos en pantalla
            x += xx; // añadimos y guardamos
        }
    }
    xi = 0; // el número está iniciado y podemos ampliarlo
}

function operar(s) {
    igualar(); // si hay operaciones pendientes se realiza primero
    ni = x; // ponemos el primer número en espera para poder escribir el segundo
    op = s; // guardamos tipo de operaciones
    xi = 1; // inicializar pantalla
}

function igualar() {
    if (op == "no") { // no hay ninguna operación pendiente
        pantalla.innerHTML = x; //mostramos en pantalla el mismo número
    }
    else { // con operación pendiente
        sl = ni + op + x; //escribimos la operación en una cadena
        sol = eval(sl); // convertimos cadena en código y resolvemos
        pantalla.innerHTML = sol; // mostramos solución
        op = "no"; // ya no hay operaciones
        xi = 1; // se puede reiniciar la pantalla
    }
}

function raizc() {
    x = Math.sqrt(x); // resolver la raiz cuadrada
    pantalla.innerHTML = x; // mostrar en pantalla resultado
    op = "no"; // quitar opraciones pendientes
    xi = 1; // se puede reinicial la pantall
}

function porcent() {
    x = x / 100 // divide por 100 el número
    pantalla.innerHTML = x; // mostrar en pantall
    igualar(); // resolver y mostrar operaciones pendientes
    xi = 1 // reiniciar la pantalla
}

function opuest() {
    nx = Number(x); //convertir en número
    if (nx > 0) {
        nx = -nx; // cambiar signo
    }
    else {
        nx = Math.abs(nx)
    }
    x = String(nx) // volver a convertir a cadena    
    pantalla.innerHTML = x; // mostrar en pantalla
}

function inve() {
    nx = Number(x); // convertir en número
    nx = (1 / x); // invertimos el número
    x = String(nx); // convertir a cadena
    pantalla.innerHTML = x; // mostrar en pantalla
    xi = 1; // reinicia pantalla para pulsar otro número
}

function retro() { // Borrar sólo el último número escrito

        
        cifras=x.length; //hayar número de caracteres en pantalla
         br=x.substr(cifras-1,cifras) //describir último caracter
         x=x.substr(0,cifras-1) //quitar el ultimo caracter
         if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
         if (br==".") {decimal=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
         pantalla.innerHTML=x; //mostrar resultado en pantalla
}

function borradoParcial() {
    pantalla.innerHTML = 0; // borrado de pantalla;
    x = 0; // borrado indicador número pantalla
    decimal = 0; // reiniciamos tambien el decimal
}

function borradoTotal() {
    pantalla.innerHTML = 0;  // mostrar en pantalla el número 0
    x = "0"; // reiniciar número en pantalla
    op = "no"; // borrar operación en curso
    ni = 0; // inicador de número oculto 
    decimal = 0; // reiniciamos el decimal    
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