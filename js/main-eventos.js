// MENU DE EVENTOS
$('ul.main-eventos li a:first').addClass('active-1');
$('.cont-eventos article').hide();
$('.cont-eventos article:first').show();

$('ul.main-eventos li a').click(function(){
    $('ul.main-eventos li a').removeClass('active-1');
    $(this).addClass('active-1');
    $('.cont-eventos article').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();
    return false;
});

