(function($) {
	'use strict';
	angular.module('app')
	.config(config);

	function config($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "views/home.html",
			controller: "HomeController"
		})
		.when("/about", {
			templateUrl : "views/about.html",
			controller: "AboutController"
		})
		.when("/user", {
			templateUrl : "views/user.html",
			controller: "UserController"
		});
	}
})();

