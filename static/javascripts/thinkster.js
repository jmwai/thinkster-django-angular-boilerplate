(function(){
	'use strict';

	angular
	.module('thinkster', [
		'thinkster.authentication', 
		'thinkster.routes',
		'thinkster.config'
		]);

	angular
	.module('thinkster.routes', ['ngRoute']);
	angular
	.module('thinkster.config', [])

	angular.module('thinkster')
	.run(function($http){
		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
		$http.defaults.xsrfCookieName = 'csrftoken';
		
	})
})();