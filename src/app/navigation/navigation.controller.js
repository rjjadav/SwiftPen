(function(){

'use strict';

angular.module('app.navigation')
.controller('NavigationController', NavigationController);

NavigationController.$inject = ['$rootScope','$uibModal'];

function NavigationController($rootScope, $uibModal){
	var nav = this;
	nav.openSidenav = openSidenav;
	nav.signUp = signUp;
	nav.signIn = signIn; 

	function openSidenav(){
		document.getElementById("sidebar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	}

	function signUp(){
		var modalInstance= $uibModal.open({
			templateUrl: 'app/main/auth/signup/signup.html',
			controller: 'SignUpController',
			controllerAs: 'signup',
		});

		modalInstance.result.then(function(data){
			console.log("Data After Closing ::: ", data);

			if(data){
				$rootScope.loggedIn = true;
				$rootScope.name = data.name;
				$rootScope.profilePic = undefined;
				if(data.accountType == 'facebook'){
					$rootScope.profilePic = data.picture.data.url;
				}else if(data.accountType == 'googleplus'){
					$rootScope.profilePic = data.picture;
				}

			}
		})
	}

	function signIn(){
		var modalInstance = $uibModal.open({
			templateUrl: 'app/main/auth/signin/signin.html',
			controller: 'SigninController',
			controllerAs: 'signin'
		});

		modalInstance.result.then(function(data){
			console.log("Data After Closing ::: ", data);

			if(data){
				$rootScope.loggedIn = true;
				$rootScope.name = data.username;
				// $rootScope.profilePic = undefined;
				// if(data.accountType == 'facebook'){
				// 	$rootScope.profilePic = data.picture.data.url;
				// }else if(data.accountType == 'googleplus'){
				// 	$rootScope.profilePic = data.picture;
				// }
			}
		})
	}
}

})();