'use strict';

/**
 * @ngdoc function
 * @name erkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the erkApp
 */
angular.module('erkApp')
  .controller('MainCtrl', function () {

    setInterval(function(){
    	$('#TickerTape').animate({left:'-='+$('#TickerTape > li > img').width()+''}, 1000);
    },4000);

  });
