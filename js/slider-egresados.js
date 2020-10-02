// Almacenar slider en una variable
var slider = $('#slider_2');
// Almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');


// Mover ultima imagen al primer lugar
$('#slider_2 section:last').insertBefore('#slider_2 section:first');


// Mostrar la primera imagen con un margen de -100%
slider.css('margin-left','-'+100+'%');


function moverD() {
	slider.animate({marginLeft:'-'+200+'%'}
		,700, function(){
			$('#slider_2 section:first').insertAfter('#slider_2 section:last');
			slider.css('margin-left','-'+100+'%');

		});

}


function moverI() {
	slider.animate({marginLeft:0}
		,700, function(){
			$('#slider_2 section:last').insertBefore('#slider_2 section:first');
			slider.css('margin-left','-'+100+'%');

		});

}


siguiente.on('click',function(){
	moverD();
})


anterior.on('click',function(){
	moverI();
})


function autoplay(){
	interval = setInterval(function(){
		moverD();
	},3150);
}

autoplay();