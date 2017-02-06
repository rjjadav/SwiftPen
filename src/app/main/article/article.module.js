(function(){
'use strict';

angular.module('app.main.article',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.main_article',{
		url: '/article/:articleId',
		views: {
			'content@app':{
				templateUrl: 'app/main/article/article.html',
				controller: 'ArticleDetailsController',
				controllerAs: 'article'
			}
		}
	})
}


})();