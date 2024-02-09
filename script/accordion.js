$(document).ready(function(){
    $('#accordion p:not(:first)').hide();

    $('#accordion h4').click(function(){
        $(this).next().slideToggle(2000)
            .parent()
            .siblings()
            .children('div p:visible')
            .slideUp(2000);
    })
})