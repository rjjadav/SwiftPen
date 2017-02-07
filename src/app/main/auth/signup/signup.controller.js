(function(){

'use strict';

angular.module('app.core')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['$cookies','$facebook','$timeout','GooglePlus','$uibModalInstance','toastr','api','data','constants'];

function SignUpController($cookies, $facebook, $timeout, GooglePlus, $uibModalInstance, toastr, api, data, constants){
	var signup = this;
	signup.facebookSignup = facebookSignup;
	signup.gplusSignup = gplusSignup;
	signup.siteSignup = siteSignup;
	signup.siteSignin = siteSignin;


	signup.loading = false;
	function facebookSignup(){
		$facebook.login()
		.then(function(response){
			console.log(response);
			$facebook.api('/me',
			{
				fields: "about,age_range,birthday,picture,context,cover,education,email,favorite_athletes,favorite_teams,first_name,gender,hometown,id,interested_in,currency,devices,inspirational_people,install_type,installed,is_shared_login,is_verified,languages,last_name,locale,location,link,middle_name,name,name_format,political,public_key,quotes,relationship_status,religion,significant_other,sports,third_party_id,timezone,updated_time,verified,viewer_can_send_gift,work,accounts,achievements,albums,books,admined_groups,events,friendlists"
			})
			.then(function(data){
				console.log(data);

				data.accountType = constants.SIGNUP_FACEBOOK;
				var dataToSend ={
					accountType : data.accountType,
					emailId: data.email,
					password: constants.SIGNUP_FACEBOOK_PASSWORD,
					mobileNo: data.name,
				}
				signup.siteSignup(dataToSend);
				// $uibModalInstance.close(data);
			})
		})
	}

	function gplusSignup(){
		GooglePlus.login().then(function (authResult) {
			GooglePlus.getUser().then(function (user) {
				console.log(user);
				user.accountType = constants.SIGNUP_GOOGLE_PLUS;
				var dataToSend ={
					accountType : user.accountType,
					emailId: user.email,
					password: constants.SIGNUP_GOOGLE_PLUS_PASSWORD,
					mobileNo: user.name,
				}
				signup.siteSignup(dataToSend);
				// $uibModalInstance.close(user);
			});
		}, function (err) {
			console.log(err);
		});
	}

	function siteSignup(user){
		user.accountType = user.accountType || constants.SIGNUP_SITE;

		data.post(api.saveAccount, user, false)
		.then(function(response){
			// console.log(response);
			if(response.data.status == true){
				signup.siteSignin(user);
			}else{
				toastr.error('Failure in signup', 'Error');
			}
		},
		function(error){
			console.log(error);
		})
		.catch()
	}

	function siteSignin(user){
	  signup.loading = true;
		// console.log(user);
		var dataToSend = {
			username: user.emailId,
			password: user.password,
			grant_type: 'password',
			client_id: 'restapp',
			client_secret: "restapp",
		}

		data.get(api.login, dataToSend, false)
		.then(function(response){
			// console.log(response);
			if(response.status == 200){
				$cookies.put('accessToken',response.data.value);
				$cookies.putObject('refreshToken',response.data.refreshToken);
				$cookies.put('username', dataToSend.username);
				$uibModalInstance.close(dataToSend);
			}else{
				toastr.error('Invalid Email and Password', 'Error');
			}
      signup.loading = false;
		},function(error){
			// console.log(error);
			toastr.error('Invalid Email and Password', 'Error');
      signup.loading = false;
		});


	}
}

})();
