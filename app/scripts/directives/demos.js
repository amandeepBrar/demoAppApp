'use strict';

angular.module('demoAppApp')
.directive('ptcError',function(){
	return {
		restrict:'E',
		template:'<p>{{clor}}<i ng-transclude>error occured</i><button class="btn btn-danger">X</button></p>',
		replace:true,
		scope:{
			clor:'='
		},
		transclude:true,
		link: function(scope,elem,attr){
			elem.find('button').on('click',function(){
				elem.remove();
			})
		}
	};
});