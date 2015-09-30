'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAppApp
 */
angular.module('demoAppApp')
  .controller('MainCtrl', function (Maths,$scope,$location,sharedData) {
    $scope.readyForGreeting = function(){
    	sharedData.name = $scope.name;
    	$location.path('/greeting');
    };
    $scope.power = Maths.pow(2,3);
    $scope.x = 'blue';
  });
