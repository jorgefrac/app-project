/*=
	Main
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('MainController', MainCtrl);

	function MainCtrl($scope){
		$scope.section = "Home";
		console.log('Home');
	}
})();