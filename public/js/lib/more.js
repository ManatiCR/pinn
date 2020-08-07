/* global */
'use strict';

var $ = require('jquery');
var more = {};

more.init = function () {
  let blocks = $('.providers__documents--button, .oportunities__calls--more_info');
  $('.providers__documents--content, .oportunities__calls--scholarships__block').hide();

  blocks.each((i, ele) => {
    $(ele).on('click', function(event) {
      event.preventDefault();

      let _this = $(this);
      let button = _this.find('a');
      let content = _this.parent().find('.providers__documents--content, .oportunities__calls--scholarships__block');
      let status = _this.parent().find('.providers__documents--content.open, .oportunities__calls--scholarships__block.open');
      let html = button.html();

      if (status.length === 0) {
        content.addClass('open');
        content.slideDown();
        html = html.replace('Más', 'Menos').replace('fa-chevron-down', 'fa-chevron-up');
        button.html(html);
      } else {
        content.removeClass('open');
        content.slideUp();
        html = html.replace('Menos', 'Más').replace('fa-chevron-up', 'fa-chevron-down');
        button.html(html);
      }
    });
  });

  $(document).ready(function() {
    let max = 0;

    $('.providers__column').each(function() {
      max = Math.max(max, $(this).css('height').replace('px', ''));
    });

    $('.providers__column').css('min-height', max + 'px');
    $('.providers__columns').css('align-items', 'flex-start');
  });
}

module.exports = more;
