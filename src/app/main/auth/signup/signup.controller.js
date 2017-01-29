(function(){

'use strict';

angular.module('app.core')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['$facebook','GooglePlus','$uibModalInstance','api','data'];

function SignUpController($facebook, GooglePlus, $uibModalInstance, api, data){
	var signup = this;
	signup.facebookSignup = facebookSignup;
	signup.gplusSignup = gplusSignup;
	signup.siteSignup = siteSignup;

	function facebookSignup(){
		$facebook.login()
		.then(function(response){
			console.log(response);
			$facebook.api('/me',
			{
				fields: "about,age_range,birthday,picture,context,cover,education,email,favorite_athletes,favorite_teams,first_name,gender,hometown,id,interested_in,currency,devices,inspirational_people,install_type,installed,is_shared_login,is_verified,languages,last_name,locale,location,link,middle_name,name,name_format,political,public_key,quotes,relationship_status,religion,significant_other,sports,third_party_id,timezone,updated_time,verified,viewer_can_send_gift,work,accounts,achievements,albums,books,admined_groups,events,friendlists"
			})
			.then(function(data){
				// console.log(data);
				data.accountType = 'facebook'
				$uibModalInstance.close(data);
			})
		})
	}

	function gplusSignup(){
		GooglePlus.login().then(function (authResult) {
            console.log(authResult);

            GooglePlus.getUser().then(function (user) {
                console.log(user);
                user.accountType = 'googleplus';
                $uibModalInstance.close(user);
            });
        }, function (err) {
            console.log(err);
        });
	}

	function siteSignup(user){
		user.accountType = 'site';

		data.post(api.saveAccount, user, false)
		.then(function(response){
			console.log(response);
			if(response.data.status == true){
				$uibModalInstance.close(user)
			}
		},
		function(error){
			console.log(error);
		})
		.catch()
	}
}

})();