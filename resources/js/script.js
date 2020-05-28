$(document).ready(function () {

    $('.js--section-feature').waypoint((direction) => {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '120px;'
    });

    $('.js--hungry-btn').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--pricing-section').offset().top - 90
        }, 3000);

    })

    $('.js--show-more-btn').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--section-feature').offset().top - 70
        }, 3000);

    })
    /*
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            $('html,body').animate({
                scrollTop: target.offset().top
            }, 3000);



        });
    }); */

    $('.js--feature-animate').waypoint((direction) => {

        $('.js--feature-animate').addClass('animate__animated animate__fadeIn');


    }, {
        offset: '75%;'
    })

    $('.phone-image').waypoint((direction) => {

        $('.phone-image').addClass('animate__animated animate__fadeInUp');


    }, {
        offset: '75%;'
    })


    $('.js--city-animation').waypoint((direction) => {

        $('.js--city-animation').addClass('animate__animated animate__fadeIn');


    }, {
        offset: '75%;'
    })



    $('.js--main-plan').waypoint((direction) => {

        $('.js--main-plan').addClass('animate__animated animate__pulse');


    }, {
        offset: '75%;'
    })






});