(function(){

'use strict';

angular.module('app.core')
.controller('SigninController', SigninController);

SigninController.$inject = ['$cookies','toastr','$uibModalInstance','api','data'];

function SigninController($cookies, toastr, $uibModalInstance, api, data){
	var signin = this;

	signin.userLogin = userLogin;

	function userLogin(user){
		user.grant_type = 'password';
		user.client_id = 'restapp';
		user.client_secret = "restapp";

		data.get(api.login, user, false)
		.then(function(response){
			// console.log(response);
			$cookies.put('accessToken',response.data.value);
			$cookies.putObject('refreshToken',response.data.refreshToken);
			$cookies.put('username', user.username);
			$uibModalInstance.close(user);
		},function(error){
			console.log(error);
			toastr.error('Invalid Email and Password', 'Error');
		})
	}
}

})();