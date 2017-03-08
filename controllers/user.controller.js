/*=
	Users
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('UserController', User);

	function User($scope){
		$scope.section = "Users";
		console.log('Users');
	}
})();