(function(){

'use strict';

angular.module('app.main.auth')
.controller('AdminLoginController', AdminLoginController);

AdminLoginController.$inject = ['data', 'api'];

function AdminLoginController(data, api){
	var login = this;
	login.adminLogin = adminLogin;

	function adminLogin(user){
		user.grant_type = 'password';
		user.client_id = 'restapp';
		user.client_secret = "restapp";
		user.role = 'admin';

		data.get(api.login, user, false)
		.then(function(response){
			console.log(response);
		})
		.catch();
	} 
}

})();