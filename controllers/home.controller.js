/*=
	Home
*/

(function($){
	'use strict';
	angular.module('app')
	.controller('HomeController', Home);

	function Home($scope){
		$scope.section = "Home";
		console.log('Home');
	}
})();