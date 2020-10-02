// SLIDER 5 DE NUESTROS ALIADOS

// Almacenar slider en una variable
var slider5 = $('#slider-5');
// Almacenar botones
// var siguiente4 = $('#btn-next4');
// var anterior4 = $('#btn-prev4');

// Mover ultima imagen al primer lugar
$('#slider-5 section:last').insertBefore('#slider-5 section:first');

// Mostrar la primera imagen con un margen de -100%
slider5.css('margin-left','-'+100+'%');

function moverD5() {
	slider5.animate({marginLeft:'-'+200+'%'}
		,700, function(){
			$('#slider-5 section:first').insertAfter('#slider-5 section:last');
			slider5.css('margin-left','-'+100+'%');

		});
}

function moverI5() {
	slider5.animate({marginLeft:0}
		,700, function(){
			$('#slider-5 section:last').insertBefore('#slider-5 section:first');
			slider5.css('margin-left','-'+100+'%');
		});
}

// siguiente5.on('click',function(){
// 	moverD5();
// })

// anterior5.on('click',function(){
// 	moverI5();
// })

function autoplay5(){
	interval = setInterval(function(){
		moverI5();
	},6150);
}

autoplay5();
