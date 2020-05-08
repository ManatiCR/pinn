'use strict';

const accordions = require('../lib/accordions');
const more = require('../lib/more');
const sliders = require('../lib/sliders');

module.exports = function () {
  accordions.init();
  more.init();
  sliders.init();
};
