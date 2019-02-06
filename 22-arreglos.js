'use strict'
// arrays
var nombres =["danilo","lorena","yesica","manuela",23,true];
var lenguajes = new Array("php","js","java","node");
/*
var elemento = parseInt(prompt("que elemento del arrays quieres",0));
    if (elemento >= nombres.length){
        alert("Introduce el numero correcto menor que" + nombres.length);
    } else{
        alert("La posiciòn seleccionada contiene el valor: " +nombres[elemento]);

   }*/

document.write("<h1>lenguajes de programaciòn 2019</h1>");
document.write("<ul>");
/*
    for (var i =0; i<lenguajes.length; i++){
        document.write("<li>"+ lenguajes[i]+"</li>");
    }
    */

// foreach no itera todo el array y no lo muestra
   lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" - " +elemento+ "</li>");
});
    document.write("<ul>");



