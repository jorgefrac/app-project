/*=
	Main
*/
(function($){
	'use strict';
	angular
		.module('app')
		.controller('MainController',function($scope){
			$scope.name = "Welcome!";
		});
})();