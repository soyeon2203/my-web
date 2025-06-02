jQuery(document).ready(function(){

// menu
$('.menu>li').mouseover(function(){
$(this).find('.sub').stop().slideDown();
});

$('.menu>li').mouseout(function(){
$(this).find('.sub').stop().slideUp();
});

setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-1320});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-2640});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:0});
});

$('.notice li:first').click(function(){
    $('.pop').addClass('active');
    });
    
$('.btn').click(function(){
    $('.pop').removeClass('active');
});


});