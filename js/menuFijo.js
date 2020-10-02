
// MANTENER EL MENU FIJO AL HACER SCROLL
$(document).ready(function () {
    // var altura = $('.menu__primer').offset().top;
    var altura = 40;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('div.menu-2').css({'position' : 'fixed', 'height' : '75px'});            
            $('.menu-2 .cont-menu-2').css({'background-color' : '#141532', 'transition' : '0.1s'});
            $('.menu-2 .cont-menu-2 .menu-letras li a').css({ 'font-size' : '21px', 'text-shadow' : '1px 2px 2px #000'});
            // $('.menu-2 .cont-menu-2 .menu-letras li a:after').css({'background-color' : 'white'});

        } else {
            $('.menu-2').css({'position' : 'absolute', 'height' : '64px'});
            $('.menu-2 .cont-menu-2').css({'background-color' : 'inherit'});
            $('.menu-2 .cont-menu-2 .menu-letras li a').css({'font-size' : '20px'});
        }
        
    })
});

// MANTENER EL MENU FIJO AL HACER SCROLL - DISPOSITIVOS
$(document).ready(function () {
    // var altura = $('.menu__primer').offset().top;
    var altu = 40;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altu) {
            $('div.menu-2-2').css({'position' : 'fixed', 'transition' : '0.3s'});
            $('.menu-2-2 .menu-letras').css({'box-shadow' : '5px 2px 3px #000'});
        } else {
            $('div.menu-2-2').css({'position' : 'relative', 'z-index' : '10000'});
            $('.menu-2-2 .menu-letras').css({'box-shadow' : 'inherit'});
        }
        
    })
});
