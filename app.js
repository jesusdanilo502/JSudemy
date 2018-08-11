"use strict"

var send = " estoy aprendiendo javascript y estroy aprendiendo mucho";

 var result;

//match
// devuelve un arreglo
result= send.match(/aprendiendo/g);

//console.log(result)

// arreglos

var food = ["ceviche","tacos","pastas"];
//console.log("Los Platillos:",food);
//food.push("tomates");

var  mysend = food.join('-');
//console.log(mysend);

 var letterHtml = Array.from(document.querySelectorAll('.letters a'))
 var letters = letterHtml.map(news => news.textContent)
//console.log(letters);



// json
var person = {name: 'Danilo', twitter: 'danilof'}

var persons = [
    {name:'Jeferson', twitter:'jf'},
    {name:'Natalia', twitter:'nati'},
    {name:'camila', twitter:'cami'},
    person
]
var rrr = persons[3];
var eee = rrr.twitter.toUpperCase();
console.log(eee);
// convierto ese arreglo en una sola cadena
var personJSON= JSON.stringify(person);
// supongamos que esta en un servidor y necesitamos descomponer 
// esa cadena nuevamente.
var newPerson= JSON.parse(personJSON);
var newPerson= JSON.parse(JSON.stringify(person));

console.log(persons[3].twitter.toUpperCase())
var a = null;
if (persons[3].twitter == 'DANILOF')
    a = true;
else
    a = false;
