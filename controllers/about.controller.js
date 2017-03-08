/*=
	About
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('AboutController', About);

	function About($scope){
		$scope.section = "About";
		console.log('About');
	}
})();