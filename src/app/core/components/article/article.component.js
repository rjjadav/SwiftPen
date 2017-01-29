(function(){

'use strict';

angular.module('app.core')
.component('article',(article)());

function article(){
	var options = {
		bindings : {
			article: '<'
		},
		templateUrl: 'app/core/components/article/article.html',
		controller: 'ArticleController',
		controllerAs: 'article'
	}
	
	return options;
}
})();