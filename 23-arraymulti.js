'use strict'

/*
1 pida seis numero por pantalla e ingresar en un arrar
2. tiene que mostra los elementos en pagagina y consola
3. sacar el array ordenado y mostrar
4. invenrtir orden y mostrarlo
5. Mostrar cuantos elemento tiene el array
6.hacer busqueda de valor instroducido por el usuarui, que nos diga si lo encuentra y su indice
 */
function mostrarArray(elementos, textoCustom= "") {
    document.write("<h1>contenido del array"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index)=>{
        document.write("<strong>"+elemento+"</strong><br/>");
    });
    document.write("</ul>")
}
var numeros=[];
     for (var i= 0; i <= 5; i++){
         // metodo push ingresamos valores al array vacio declarado inicialmente
         numeros.push(parseInt(prompt("introduce un numero",0)));
     }
     // mostrar en le cuerpo de la pagina
   mostrarArray(numeros);
     console.log(numeros);

        // ordenar y mostrar
numeros.sort(function (a,b){return a-b});
mostrarArray(numeros,  '  ordenados');

// INVERTIR Y MOSTRAR
numeros.reverse();
mostrarArray(numeros,' revetido');

// contar indices de array
document.write("<h2> el array tiene</h2>"+numeros.length+ "ELEMENTOS");
//bgusqueda
var busqueda = parseInt(prompt("busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h2>Encontrado</h2>");
    document.write("<h2>posiciòn en la busqueda " + posicion + "</h2>");
}else{
    document.write("no encontrado");
}
document.write("encontrado");
document.write(posicion);