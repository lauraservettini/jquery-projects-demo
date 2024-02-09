$(document).ready(function(){
    $('#btn-slide-panel').click(function(){
        $('#slide').slideToggle(2000);
        $('#icon').toggleClass('rotate');
    })
});