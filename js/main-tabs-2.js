    // MOSTRAR Y OCULTAR PESTAÑAS DEL CONTENEDOR NOVEDADES
	$('ul.main-news li a:first').addClass('active-2');
	$('.cont-secciones article').hide();
	$('.cont-secciones article:first').show();

	$('ul.main-news li a').click(function(){
		$('ul.main-news li a').removeClass('active-2');
		$(this).addClass('active-2');
		$('.cont-secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});

