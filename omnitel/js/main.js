$(document).ready(function(){
    $('.works ul li').on('mouseenter', function(){
        $('.works ul li').removeClass('off');
        $('.works ul li').removeClass('on');
        $(this).addClass('on');
        $('.works ul li:not(.on)').addClass('off');
    });
});