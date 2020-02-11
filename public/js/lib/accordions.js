/* global */
'use strict';

var $ = require('jquery');
var accordion = {};

accordion.init = function () {
  let accordions = $('.js-accordion');
  accordions.each((i, el) => {
    $(el).on('click', function(){
      let heading = $(this).find('.js-heading');
      let content = $(this).find('.js-content');

      heading.toggleClass('open');
      content.toggleClass('open');
    });
  });
}

module.exports = accordion;
