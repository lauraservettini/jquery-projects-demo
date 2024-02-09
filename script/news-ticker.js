var interval;

function startTicker() {
    $('#news-ticker li:first').slideUp(function(){
        $(this).appendTo($('#news-ticker ul')).slideDown();
     });
}

function stopTicker(){
    clearInterval(interval);
}

$(document).ready(function(){
    interval = setInterval(startTicker, 3000);

    $('#news-ticker ul').hover( function(){
        stopTicker();
    }, 
    function() {
        interval = setInterval(startTicker, 3000);
    });
});