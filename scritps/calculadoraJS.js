window.onload=function(){
    // Acciones treas cargar la página
    pantalla=this.document.getElementById("textoPantalla"); //Elemento parantalla de salida
}
x="0"; // guardar número en pantalla
xi=1;  // iniciar número en pantalla: 1=si; 0=no
decimal=0; //estado número decimal:  1=si; 0=no
ni=0; // número oculto en espera
op="no" // operación en curso: "no" = sin operación


function numero(xx){ // recoge el número pulsado en el argumento.
    if(x==0 || xi==1){ //inicializar un número
        pantalla.innerHTML = xx; // mostrar pantalla.
        x=xx; // guardar número
        if(xx=="."){ // si escribimos decimal al principio del número
            pantalla.innerHTML="0." // escribimo "0."
            x=xx; // guardar número
            decimal=1; // cambiar estado del decimal
        }
    }
    else{ // continuar escribiendo un número
        if(xx=="." && decimal==0){ // si escribimos decimal por primera vez
            pantalla.innerHTML += xx;
            x+=xx;
            decimal=1; // cambiar el estado del decimal
        }
        // si intentamos escribir una segunda vez decimal no realizar ninguna acción.
        else if(xx=="." && decimal==1){}
        // resto de casos: escribir un número del 0 al 9
        else{
            pantalla.innerHTML+=xx; //añadimos y mostramos en pantalla
            x+=xx; // añadimos y guardamos
        }
    }
    xi=0; // el número está iniciado y podemos ampliarlo
}

function operar(s){
    igualar(); // si hay operaciones pendientes se realiza primero
    ni=x; // ponemos el primer número en espera para poder escribir el segundo
    op=s; // guardamos tipo de operaciones
    xi=1; // inicializar pantalla
}

function igualar(){
    if(op=="no"){ // no hay ninguna operación pendiente
        pantalla.innerHTML = x; //mostramos en pantalla el mismo número
    }
    else{ // con operación pendiente
        sl=ni+op+x; //escribimos la operación en una cadena
        sol=eval(sl); // convertimos cadena en código y resolvemos
        pantalla.innerHTML = sol; // mostramos solución
        op="no"; // ya no hay operaciones
        xi= 1; // se puede reiniciar la pantalla
    }
}