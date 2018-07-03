(function ($) {
"use strict";

/*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }






jQuery('#mobile-menu').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: "767"
});



$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['Back','Next'],
    autoplay: true,
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
            items:1,
            nav:false
        },
        768:{
            items:2
        },
        992:{
            items:4
        },
        1200:{
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
        768:{
            items:2
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }
})


$('select').niceSelect();

$(".upload_link").on('click', function(e){
    e.preventDefault();
    $(".upload:hidden").trigger('click');
});

$('.filtersubmit').click(function() {
    alert('Searching for '+$('.filter').val());
});





})(jQuery);
