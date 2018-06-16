var object= {
  // una propiedad es una asociación ene unnombre y un valor.

  nombre:"juan",
  edad:31,
 // el método es una función dentro de un objeto.
  descripcion: function(){
    console.log("su nombre es: " +object.nombre+ " y tiene "+object.edad+" años.")

  },
  saludar: function(saludo){
    console.log(saludo+""+object.nombre)
  }
}
console.log("nombre",object.nombre);
object.descripcion();
object.saludar("hola")

// objetos primitivos

var d= new Date();
console.log("d",d);
var y = d.getFullYear();
console.log("vigencia actual",y);
