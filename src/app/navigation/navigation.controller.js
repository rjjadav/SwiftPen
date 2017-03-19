(function(){

'use strict';

angular.module('app.navigation')
.controller('NavigationController', NavigationController);

NavigationController.$inject = ['$rootScope','$scope','$cookies','$state','$uibModal','data','api','categories','auth'];

function NavigationController($rootScope, $scope, $cookies, $state, $uibModal, data, api, categories, auth){
	console.log($state);
	var nav = this;
	nav.openSidenav = openSidenav;
	nav.signUp = signUp;
	nav.signIn = signIn;
	nav.logout = logout;
	nav.getCategories = getCategories;
  nav.triggerSearch = triggerSearch;

	nav.categories = undefined;
	nav.getCategories();

	$scope.$on('sign_up', function (event, args) {
    nav.signUp();
  });

	$scope.$on('sign_in', function (event, args) {
    console.log(args);
    nav.signIn();
  });

	$scope.$on('logout', function(event, args) {
	  nav.logout();
  });

	function openSidenav(){
		document.getElementById("sidebar").style.width = "250px";
		// document.getElementById("main").style.marginLeft = "250px";
	}

	function getCategories(){
		// data.post(api.getCategory, null, true)
		categories.get()
    .then(function(response){
			console.log('getCategory ::: ',response);
			nav.categories = response.data.categories;
		})
		.catch()
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
			  auth.getUserInfo();
				// $rootScope.loggedIn = true;
				// $rootScope.name = data.name || data.username;
				// $rootScope.profilePic = undefined;

				// if(data.accountType == 'facebook'){
				// 	$rootScope.profilePic = data.picture.data.url;
				// }else if(data.accountType == 'googleplus'){
				// 	$rootScope.profilePic = data.picture;
				// }
				$state.reload();
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
        auth.getUserInfo();
				// $rootScope.loggedIn = true;
				// $rootScope.name = data.username;
				$state.reload();
				// $rootScope.profilePic = undefined;
				// if(data.accountType == 'facebook'){
				// 	$rootScope.profilePic = data.picture.data.url;
				// }else if(data.accountType == 'googleplus'){
				// 	$rootScope.profilePic = data.picture;
				// }
			}
		})
	};

	function logout(){
		$cookies.remove('accessToken');
		$cookies.remove('refreshToken');
		$cookies.remove('username');

		$rootScope.loggedIn = false;
		$rootScope.name = undefined;
		$rootScope.role = undefined;

		if($state.current.name !== 'app.main_listing'){
			$state.go('app.main_listing', {category: 'all'})
		}
		$state.reload();
	}

	function triggerSearch(searchKeyword) {
    console.log(searchKeyword);
    $rootScope.$broadcast('search_triggered',{keyword : searchKeyword});

  }
}

})();
