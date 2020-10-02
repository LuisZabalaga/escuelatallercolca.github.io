// SLIDER 4.1 DE IMAGENES DE EVENTOS Y NOTICIAS

// Almacenar slider en una variable
var variable_slider = $('#slider-images');
// Almacenar botones
var variable_siguiente = $('#btn-next4-1');
var variable_anterior = $('#btn-prev4-1');

// Mover ultima imagen al primer lugar
$('#slider-images section:last').insertBefore('#slider-images section:first');

// Mostrar la primera imagen con un margen de -100%
variable_slider.css('margin-left','-'+100+'%');

function moveDer() {
	variable_slider.animate({marginLeft:'-'+200+'%'}
		,700, function(){
			$('#slider-images section:first').insertAfter('#slider-images section:last');
			variable_slider.css('margin-left','-'+100+'%');
		});
}

function moveIzq() {
	variable_slider.animate({marginLeft:0}
		,700, function(){
			$('#slider-images section:last').insertBefore('#slider-images section:first');
			variable_slider.css('margin-left','-'+100+'%');

		});
}

variable_siguiente.on('click',function(){
	moveDer();
})

variable_anterior.on('click',function(){
	moveIzq();
})

function autoplay_slider(){
	interval = setInterval(function(){
		moveDer();
	},4150);
}

autoplay_slider();



