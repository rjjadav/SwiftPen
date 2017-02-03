(function(){

'use strict';

angular.module('app.core')
.component('articles',(articles)());

function articles(){
	var options = {
		bindings: {
			"article" : '<',
			"display": '<',
			"category": '<'

		},
		templateUrl: 'app/core/components/articles/articles.html',
		controller: 'ArticlesController',
		controllerAs: 'articles'
	}
	return options;
}

})();