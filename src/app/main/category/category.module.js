(function(){

'use strict';

angular.module('app.main.category',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.main_category',{
		url: '/category',
		views: {
			'content@app' : {
				templateUrl: 'app/main/category/category.html',
				controller: 'CategoryController',
				controllerAs: 'category'
			}
		}
	})
}

})();