// SLIDER 4 DE EVENTOS Y NOTICIAS 

// Almacenar slider en una variable
var slider4 = $('#slider-4');
// Almacenar botones
var siguiente4 = $('#btn-next4');
var anterior4 = $('#btn-prev4');

// Mover ultima imagen al primer lugar
$('#slider-4 article:last').insertBefore('#slider-4 article:first');

// Mostrar la primera imagen con un margen de -100%
slider4.css('margin-left','-'+100+'%');

function moverD4() {
	slider4.animate({marginLeft:'-'+200+'%'}
		,700, function(){
			$('#slider-4 article:first').insertAfter('#slider-4 article:last');
			slider4.css('margin-left','-'+100+'%');

		});
}

function moverI4() {
	slider4.animate({marginLeft:0}
		,700, function(){
			$('#slider-4 article:last').insertBefore('#slider-4 article:first');
			slider4.css('margin-left','-'+100+'%');

		});
}

siguiente4.on('click',function(){
	moverD4();
})

anterior4.on('click',function(){
	moverI4();
})

function autoplay4(){
	interval = setInterval(function(){
		moverD4();
	},6150);
}

// autoplay4();



