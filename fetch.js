'use strict';

// fetch (ajax) reemplaza ajaxx y peticios a servuicios /apis rest
var div_usuarios = document.querySelector("#usuarios");
var electronico = document.querySelector('#electronico'); // llamamos un div donde queremoscagar los datos ajax
var div_janet = document.querySelector('#janet');


getUsuarios()
    .then(data => data.json())   // aqui seteamos nuestros datos en formato json 
    .then(users => {  // aqui estamos resentando una función users de la nueva forma con flechas => Sin usas function
        listadousuarios(users.data); // aq1ui llamamos la funcioon 

        // una ves obtenga el listado me haga la sigueinte promesa
        // como ya listo los usuario devuelvalos y liste el otro en este caso a janet
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users'); // api para consultar datos de prueba
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2'); // api para consultar datos de prueba
}

function listadousuarios(usuarios) {
    usuarios.map((user, i) => {  // podemos declarar una nueva variable llamada user desde la cual podremos acceder a nuestros datos
        let nombre = document.createElement('h3');// creamos un elemento html para poner cada dato encontrado
        let correo = document.createElement('h2');

        nombre.innerHTML = i + '-' + user.first_name + " " + user.last_name;
        correo.innerHTML = user.email; // aqui llamamos user.email nombre de la propiedad y la lanzamos a nuestro etiqueta html
        div_usuarios.appendChild(nombre);// aqui cargamos nuestro datos en la etiqueta html que creamos denatro de la etiqueta princi
        electronico.appendChild(correo);// en este caso un div que creamos

        document.querySelector(".load").style.display = 'none'; /// con esto mostramos algo mientra cargamos  los datos
    });
}


function mostrarJanet(user) {
    console.log(user);
    let nombre = document.createElement('h4');// creamos un elemento html para poner cada dato encontrado
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + " " + user.last_name;
   
    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    document.querySelector(".janetload").style.display = 'none'; /// con esto mostramos algo mientra cargamos  los datos
}