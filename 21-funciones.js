'use strict'

// fuciones anonimas
// es una funcion que no tiene nombre

function sumame(numero1, numer2, sumaYnuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYnuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

