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

    $('.open-modal-form').click(function(){
        $('#modal-form').modal('show');
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


    //arrows click

    var activeSlideNewsTabs = 0;

    $('.news .nav-tabs li a').click(function(){
        var id = $(this).attr('href');
        activeSlideNews = 0;
        activeSlideNewsTabs = $(this).parent().index();
        $('.news-animation').removeClass('hide-scroll-bott visible-scroll-bott hide-scroll-top visible-scroll-top');
        $(id + ' .news-animation:nth-child(1)').addClass('visible-scroll-bott')
    });

    function newsScrollBott(activeSlide){
        var indexNext = activeSlide + 1;
        var indexPrev =  (activeSlide == 0 ? $('.tab-pane.active .new-content__counter__item .news-animation').length : activeSlide);
        $('.news-animation').removeClass('hide-scroll-bott visible-scroll-bott hide-scroll-top visible-scroll-top');
        $('.news-animation:nth-child('+indexPrev+')').addClass('hide-scroll-bott');
        $('.news-animation:nth-child('+indexNext+')').addClass('visible-scroll-bott');
        setTimeout(function(){
            canAnimate = true;
        },500); 
    
    }

    function newsScrollTop(activeSlide){
        var indexNext = activeSlide + 1;
        var indexPrev =  activeSlide == ($('.tab-pane.active .new-content__counter__item .news-animation').length - 1) ? 1 : (activeSlide + 2);
        $('.news-animation').removeClass('hide-scroll-bott visible-scroll-bott hide-scroll-top visible-scroll-top');
        $('.news-animation:nth-child('+indexPrev+')').addClass('hide-scroll-top');
        $('.news-animation:nth-child('+indexNext+')').addClass('visible-scroll-top');
        setTimeout(function(){
            canAnimate = true;
        },500);

        console.log('pref: ' + indexPrev,'next: '+ indexNext);
    }

    var canAnimate  = true;
    var activeSlideNews = 0;
    $('.arrows-news-wrapp__butt--top').click(function(){
        if(canAnimate){
            canAnimate = false;
             activeSlideNews -= 1;

             
             if(activeSlideNews < 0){
                 activeSlideNews = ($('.tab-pane.active .new-content__counter__item .news-animation').length - 1);
             }
             console.log(activeSlideNews);
             newsScrollTop(activeSlideNews)
        }
     });
     $('.arrows-news-wrapp__butt--bott').click(function(){
        if(canAnimate){
             canAnimate = false;
             activeSlideNews += 1;
             if(activeSlideNews >= $('.tab-pane.active .new-content__counter__item .news-animation').length){
                 activeSlideNews = 0;
             }
             newsScrollBott(activeSlideNews);
        }
     });
});