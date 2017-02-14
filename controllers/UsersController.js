/*=
	Users
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('UsersController', UsersCtrl);

	function UsersCtrl($scope){
		$scope.section = "Users";
		console.log('Users');
	}
})();