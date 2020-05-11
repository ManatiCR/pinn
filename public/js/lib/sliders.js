/* global  ga */
'use strict';

var slick = require('./slick');

//Lib
var $ = require('jquery');
window.jQuery = $;

var slider = {};

slider.init = function () {
  var headerSlide = $('.slider-header').slick({
    mobileFirst: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 50,
    dots: true,
  }).on('afterChange', function (event, $slider, currentSlide) {
    $('.slider-header .slider__controls .position').html( (currentSlide + 1) + '/' + $slider.slideCount );
  });

  var captions = $('.slider-header .slide-item__caption');
  $('.slider-header .slick-dots li').each(function(index, value) {
    $(this).find('button').html($(captions.get(index)).html());
  });

  $('.slider-header .slick-list .slide-item').each(function() {
    $(this).parent().css('height', $(this).css('height'));
  });

  $('.slider-header').append('<div class="slider__controls"></div>');
  $('.slider-header .slick-dots').detach().appendTo('.slider-header .slider__controls');
  $('.slider-header .slider__controls').append('<span class="position">1/' + captions.length + '</span>');
  $('.slider-header .slider__controls').append('<a href="#" class="btn-control-auto pause"><i class="far fa-pause-circle"></i></a>');
  $('.slider-header .slick-prev').html('<i class="fas fa-angle-left">');
  $('.slider-header .slick-next').html('<i class="fas fa-angle-right">');
  $('.slider-header .slick-prev').detach().appendTo('.slider-header .slider__controls');
  $('.slider-header .slick-next').detach().appendTo('.slider-header .slider__controls');

  $('.btn-control-auto').on('click', function(event) {
    event.preventDefault();
    var _this = $(this).find('i');
    if (_this.hasClass('fa-pause-circle')) {
      $(_this).removeClass('fa-pause-circle').addClass('fa-play-circle');
      $('.slider-header').slick('slickPause');
    } else {
      $(_this).removeClass('fa-play-circle').addClass('fa-pause-circle');
      $('.slider-header').slick('slickPlay');
    }
  });
};

module.exports = slider;
