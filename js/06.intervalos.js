var tiempo = document.querySelector("#tiempo");
var segundos= 0;

/*set  interval ( intervalo de tiempo)

setInterval(función,tiempo)*/

var intervalo= setInterval(function(){

segundos++;
tiempo.innerHTML= segundos;
},1000)

/*retardo de tiempo*/
setTimeout(function(){

//  alert ("se cumplio en tiempo")
clearInterval(intervalo);

},5000)
