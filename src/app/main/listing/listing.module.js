(function() {
	
'use strict';

angular.module('app.main.listing',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.main_listing',{
		url: '/articles/:category',
		views: {
			'content@app' 	: {
				templateUrl : 'app/main/listing/listing.html',
				controller 	: 'ListingController',
				controllerAs: 'listing'
			}
		}
	})
}

})();