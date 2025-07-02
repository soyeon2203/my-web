jQuery(document).ready(function(){

$('.menu>li').mouseover(function(){
$('.sub').stop().slideDown();
});
$('.sub').mouseout(function(){
$('.sub').stop().slideUp();
});


// slide
$('.slidebox a:gt(0)').hide();

setInterval(function(){
$('.slidebox a:first').fadeOut()
.next('a').fadeIn()
.end().appendTo('.slidebox');

},2500);



});