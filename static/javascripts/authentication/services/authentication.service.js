/* Authentication

@namespace: thinkster-angular.authentication.service

*/

(function(){
	'use strict';

	angular
	.module('thinkster.authentication.services')
	.factory('Authentication', Authentication);

	Authentication.$inject = ['$cookies', '$http'];

	function Authentication($cookies, $http){
		return {
			register: function(username, password, email){
			      return $http.post('/api/v1/users/', {
			      username: username,
			      password: password,
			      email: email
			      });
			}
		};
		

	}
})();