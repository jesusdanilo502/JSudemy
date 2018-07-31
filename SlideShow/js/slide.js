/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
=============================================*/

var p = {

    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0

}

/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/

var m = {

    inicioSlide: function () {

        for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide)

        }
    },
    paginacionSlide: function (item) {

        p.item = item.target.parentNode.getAttribute("item")-1;
        m.movimientoSlide(p.item);
    },
    movimientoSlide: function(item) {
        console.log("item", -((item * 100) + "%"));

    }
}

m.inicioSlide();
