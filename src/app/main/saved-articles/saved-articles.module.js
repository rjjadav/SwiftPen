(function(){
'use strict';

angular.module('app.main.saved_articles',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.main_saved-articles',{
		url: '/saved-articles',
		views: {
			'content@app': {
				templateUrl: 'app/main/saved-articles/saved-articles.html',
				controller: 'SavedArticlesController',
				controllerAs: 'sac'
			}
		}
	})
}

})();
