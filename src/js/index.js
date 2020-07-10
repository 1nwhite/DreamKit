'use strict';
import $ from 'jquery';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'slick-carousel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../sass/includes/fonts.sass';
import '../sass/styles.sass';

// import "hamburgers";
import "hamburgers/dist/hamburgers.css";

import '../images/logo.png';
import '../images/Frame.png';
import '../images/Ellipse.png';
import '../images/video-img.png';
import '../images/basf.png';
import '../images/dreamup.png';
import '../images/card-img-1.png';
import '../images/card-img-2.png';
import '../images/card-img-3.png';
import '../images/testi-author.png';
import '../images/star.png';



$(document).ready(function () {
    $('.testimonials-slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev testimonials-slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next testimonials-slick-next">Previous</button>',
    });

    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $(".header-nav--mobile").animate({
            width: "toggle"
        });
        $('body').toggleClass('no-scroll');
    });

    $(window).scroll(function () {
        let header = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 10) header.addClass('sticky');
        else header.removeClass('sticky');
    });
});


