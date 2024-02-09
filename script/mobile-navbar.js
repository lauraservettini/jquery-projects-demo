$(document).ready(function(){
    $('#btn-mobile').click(function(){
        $('#mobile').slideToggle(2000);
    })
})

$( window ).on( "resize", function() {
    if ($(window).width() > 640){
        $('#mobile').css('display', 'none');
    }
  } );