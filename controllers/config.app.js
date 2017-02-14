(function($) {
	'use strict';
	angular.module('app')
	.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "views/home.html",
			controller: "HomeController"
		})
		.when("/about", {
			templateUrl : "views/about.html",
			controller: "AboutController"
		})
		.when("/users", {
			templateUrl : "views/users.html",
			controller: "UsersController"
		});
		//.otherwise({ redirectTo: '/' });
	});
})();
