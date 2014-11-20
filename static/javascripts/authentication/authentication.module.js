(function(){
	'use strict';
	angular.module('thinkster.authentication', [
		'thinkster.authentication.services', 
		'thinkster.authentication.controllers'
		]);
	angular.module('thinkster.authentication.controllers', []);
	angular.module('thinkster.authentication.services', ['ngCookies']);
})();