/*=
	Home
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeCtrl);

	function HomeCtrl($scope){
		$scope.section = "Home";
		console.log('Home');
	}
})();