/*=
	About
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('AboutController', AboutCtrl);

	function AboutCtrl($scope){
		$scope.section = "About";
		console.log('About');
	}
})();