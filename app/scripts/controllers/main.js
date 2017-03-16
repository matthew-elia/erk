'use strict';

/**
 * @ngdoc function
 * @name erkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the erkApp
 */
angular.module('erkApp')
  .controller('MainCtrl', function ($animate) {
	setInterval(function(){ $('#TickerTape').animate({left: "-=4px"}) }, 160);
  });
