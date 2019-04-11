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

    //sm modals projects

    $('.modal-open-1').click(function(){
        $('#modal-yourso').modal('show');
    });
    $('.modal-open-2').click(function(){
        $('#modal-inv').modal('show');
    });
    $('.modal-open-3').click(function(){
        $('#modal-its').modal('show');
    });

    // sliders init / disabled

    var flagInitSlider = false;
    $('.modal-project').on('shown.bs.modal', function (e) {
        $('.modal-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots:true,
            fade: true
        });
        $('.modal-slider').addClass('visible-slider');
        $('.modal-dialog').addClass('slider-initialized');
        flagInitSlider = true;
    });
    $('.modal-project').on('hidden.bs.modal', function () {
        if(flagInitSlider){
            $('.modal-slider').slick('unslick');
            $('.modal-dialog').removeClass('slider-initialized');
            $('.modal-slider').removeClass('visible-slider');
            flagInitSlider = false;
        }
    });
});