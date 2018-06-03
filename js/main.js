(function ($) {
"use strict";


$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['Back','Next'],
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

$('.product-active').owlCarousel({
    loop:true,
    nav:true,
    margin: 30,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})

$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    margin: 30,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:6
        }
    }
})



})(jQuery);
