/* OBJETOS CON LAS PROPIEDADES DE LA CALCULADORA *

 */

var p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false
}


/* OBJETOS CON LOS METODOS DE LA CALCULADORA */

var m = {
    inicio: function () {
        for (var i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla)
        }

    },
    teclado: function () {
        document.addEventListener("keydown", m.oprimir);
    },
    oprimir: function (tecla) {
        console.log(tecla.keyCode);

        if (tecla.keyCode == 49) {
            p.accion = "numero";
            p.digito = 1;
        }
        else if (tecla.keyCode == 50) {
            p.accion = "numero";
            p.digito = 2;
        }
        else if (tecla.keyCode == 46) {
            p.accion = "";
            m.borrarCalculadora();
        }
        else {
            p.digito = "";
            p.accion = "";
        }
        m.calculadora(p.accion, p.digito);
    },

    oprimirTecla: function (tecla) {
        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;

        m.calculadora(p.accion, p.digito);
    },
    calculadora: function (accion, digito) {
        switch (accion) {
            case "numero":

                p.cantidadSignos = 0;

                if (p.operaciones.innerHTML == "0") {
                    p.operaciones.innerHTML = digito;
                } else {
                    if (p.resultado) {
                        p.resultado = false;
                        p.operaciones.innerHTML = digito;

                    } else {
                        p.operaciones.innerHTML += digito;
                        p.get
                    }

                }

                break;
            case "signo":
                p.cantidadSignos++
                if (p.cantidadSignos == "1") {
                    if (p.operaciones.innerHTML == "0") {
                        p.operaciones.innerHTML = 0;
                    }
                    else {
                        p.operaciones.innerHTML += digito;
                        p.cantidadDecimal = false;
                        p.resultado = false;
                    }

                }

                break;
            case "decimal":

                if (!p.cantidadDecimal) {
                    p.operaciones.innerHTML += digito;
                    p.cantidadDecimal = true;
                    p.resultado = false;

                }

                break;
            case "igual":
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.resultado = true;
                var expresion = /./g;
                if (!expresion.test(p.operaciones.innerHTML)) {
                    p.cantidadDecimal = true;
                }
                p.resultado = true;
                break;
        }
        /* console.log("p.resultado", p.resultado);*/
    },
    borrarCalculadora: function () {
        p.resultado = false;
        p.operaciones.innerHTML = 0;
    }
}
m.inicio();
m.teclado();
