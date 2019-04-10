$(document).ready(function(){

    if($(window).scrollTop() > 0){
        $('.menu').addClass('menu--black-background');
    }
    else{
        $('.menu').removeClass('menu--black-background');
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.menu').addClass('menu--black-background');
        }
        else{
            $('.menu').removeClass('menu--black-background');
        }
    });
});