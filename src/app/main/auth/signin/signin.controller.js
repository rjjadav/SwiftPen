(function(){

'use strict';

angular.module('app.core')
.controller('SigninController', SigninController);

SigninController.$inject = ['$cookies','toastr','$uibModalInstance','$facebook','GooglePlus','api','data','constants'];

function SigninController($cookies, toastr, $uibModalInstance, $facebook, GooglePlus, api, data, constants){
	var signin = this;

	signin.userLogin = userLogin;
	signin.facebookSignin = facebookSignin;
	signin.googleSignin = googleSignin;
	signin.loading = false;


	function userLogin(user){
    signin.loading = true;
    user.grant_type = 'password';
		user.client_id = 'restapp';
		user.client_secret = "restapp";

		data.get(api.login, user, false)
		.then(function(response){
			console.log(response);
			if(response.status == 200){
				$cookies.put('accessToken',response.data.value);
				$cookies.putObject('refreshToken',response.data.refreshToken);
				$cookies.put('username', user.username);
				$uibModalInstance.close(user);
			}else{
				toastr.error('Invalid Email and Password', 'Error');
			}
      signin.loading = false;
		},function(error){
			console.log(error);
			toastr.error('Invalid Email and Password', 'Error');
      signin.loading = false;
		})
	}

	function facebookSignin(){
    $facebook.login()
      .then(function (response) {
        $facebook.api('/me',{
          fields:'email'
        }).then(function (data) {
          console.log(data);
          var loginData = {
            username: data.email,
            password: constants.SIGNUP_FACEBOOK_PASSWORD
          }

          signin.userLogin(loginData);
        })
      })
      .catch();
  }

  function googleSignin(){
	  GooglePlus.login()
      .then(function (authResult) {
        GooglePlus.getUser()
          .then(function (user) {
            console.log(user);
            var loginData = {
              username: user.email,
              password: constants.SIGNUP_GOOGLE_PLUS_PASSWORD
            };

            signin.userLogin(loginData);
          })
      })
  }
}

})();
