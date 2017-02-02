(function(){

'use strict';

angular.module('app.main.auth',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.auth_admin_login',{
		url: '/login',
		views: {
			'content@app':{
				templateUrl: 'app/main/auth/adminLogin/adminLogin.html',
				controller: 'AdminLoginController',
				controllerAs: 'login'
			}
		}
	})
}
})();