/* global DBG */
'use strict';

/*
 * Blobal
 */
window.DBG = (typeof DBG === 'undefined') ? true : DBG;

/*
 * Var
 */
var $ = require('jquery');
var Bumeran = require('./bumeran');

/*
 * Require
 */
require('console');
/*
* Ready
*/
$(document).ready(function () {
  if (DBG) console.log('Ready!');
  if (DBG) console.log('common');

  // Call ctrl
  Bumeran.init();
});
