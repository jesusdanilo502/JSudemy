/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
=============================================*/

var p = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
	cajaSlide: document.querySelector("#slide ul"),
	animacionSilde: "slide",
	imgSlide: document.querySelectorAll("#slide ul li")

}

/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/

var m = {

	inicioSlide: function(){

		for(var i = 0; i < p.paginacion.length; i++){

			p.paginacion[i].addEventListener("click", m.paginacionSlide)

		}

	},

	paginacionSlide: function(item){
		

		p.item = item.target.parentNode.getAttribute("item")-1;

		m.movimientoSlide(p.item);

	},

	movimientoSlide: function(item){
		
		p.cajaSlide.style.left = item * -100+"%";
		
		for(var i = 0; i < p.paginacion.length; i++){

			p.paginacion[i].style.opacity = .5;

		}

		p.paginacion[item].style.opacity = 1;

		if(p.animacionSilde == "slide"){

			p.cajaSlide.style.transition = ".7s left ease-in-out";

		}

		if(p.animacionSilde == "fade"){

			p.imgSlide[item].style.opacity = 0;

			p.imgSlide[item].style.transition = ".7s opacity ease-in-out";
					
			setTimeout(function(){
				
				p.imgSlide[item].style.opacity = 1;

			},500)
			
		}

	}	

}

m.inicioSlide();



