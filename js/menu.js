// PRIMER MENU EN LA CABECERA
$(document).ready(function(){

	$('.btn-menu-1').click(function(){
		// $('.menu-1 ul').slideToggle();
		$('.espace-1').slideToggle();
	});

	$(window).resize(function(){
		if ($(document).width() > 768) {
			$('.menu-1 ul').css({'display' : 'flex'});
			$('.espace-1').css({'display' : 'none'});
			// $('.menu-letras').css({'display' : 'none'});
		}

		if ($(document).width() < 768) {
			$('.menu-1 ul').css({'display' : 'none'});
			$('.espace-1').css({'display' : 'none'});
		}
	});	

});    





// SEGUNDO MENU DENTRO DEL SLIDER
$(document).ready(function(){

	$('.btn-menu-2').click(function(){
		$('.cont-menu-2 .menu-letras').slideToggle();
		$('.espace-2').slideToggle();
	});

	$(window).resize(function(){
		if ($(document).width() > 768) {
			$('.cont-menu-2 .menu-letras').css({'display' : 'flex'});
			$('.espace-2').css({'display' : 'none'});
		}

		if ($(document).width() < 768) {
			$('.cont-menu-2 .menu-letras').css({'display' : 'none'});
			$('.espace-2').css({'display' : 'none'});
		}

		// $(window).on('scroll', function () {
		// 	if ($(window).scrollTop()) {
		// 		$('.cont-menu-2 .menu-letras').css({'display' : 'none'});
		// 		$('.espace-2').css({'display' : 'none'});
		// 	}
		// })

	});

	


	

}); 