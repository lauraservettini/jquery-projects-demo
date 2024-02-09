$(document).ready(function(){
    $('.item img').hover(function(){
        $(this).animate({
            'opacity': '1'
        }, 700);
    },
    function(){
        $(this).animate({
            'opacity': '0.5'
        }, 700);
    });

});