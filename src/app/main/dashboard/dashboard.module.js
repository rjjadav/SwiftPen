(function(){

'use strict';

angular.module('app.main.dashboard',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.main_dashboard',{
		url: '/postarticle',
		views: {
			'content@app' : {
				templateUrl : 'app/main/dashboard/dashboard.html',
				controller: 'DashboardController',
				controllerAs: 'dashboard'
			}
		}
	});
}

})();