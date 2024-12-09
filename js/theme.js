;(function($) {
    "use strict";

    // Preloader
    // function preloader() {
    //     if( $('.preloader').length ){
    //         $(window).on('load', function() {
    //             $('.preloader').fadeOut();
    //             $('.preloader').delay(50).fadeOut('slow');  
    //         });
    //     };
    // }
    // preloader();

    // Owl Carousel
    // function testimonial_carousel() {
    //    $('#ms-testimonial').owlCarousel({
    //         navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    //         autoplay: 5000,
    //         margin:30,
    //         items:1,
    //         loop: true,
    //         nav:true,
    //         dots: false,
    //         onInitialized  : counter,   // When the plugin has initialized.
    //         onTranslated : counter      // When the translation of the stage has finished.
    //     });
    // }
    // testimonial_carousel();

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

}) (jQuery);