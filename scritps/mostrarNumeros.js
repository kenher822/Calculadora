window.onload=function(){
    // Acciones treas cargar la página
    pantalla=this.document.getElementById("textoPantalla"); //Elemento parantalla de salida
}
x="0"; // guardar número en pantalla
xi=1;  // iniciar número en pantalla: 1=si; 0=no
coma=0; //estado coma decimal:  1=si; 0=no

function numero(xx){ // recoge el número pulsado en el argumento.
    if(x==0 || xi==1){ //inicializar un número
        pantalla.innerHTML = xx; // mostrar pantalla.
        x=xx; // guardar número
    }
    else{ // continuar un número
        pantalla.innerHTML+=xx; //añadimos y mostramos en pantalla
        x+=xx; // añadimos y guardamos
    }
    xi=0; // el número está iniciado y podemos ampliarlo
}