'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoAppApp
 */
angular.module('demoAppApp')
  .controller('GreetingCtrl', function (sharedData,$scope) {
  	$scope.name=sharedData.name;
  });
