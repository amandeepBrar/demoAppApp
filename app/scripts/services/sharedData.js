'use strict';

angular.module('demoAppApp')
.service('sharedData',function(){
	this.name = '';
	
})
.factory('Maths',function(){
	return {
		add: function(a,b){
			return a+b;
		},
		pow: function(a,b){
			var result = 1;
			for(var i=1;i<=b;i++){
				result *= a;
			}
			return result;
		}
	};
});