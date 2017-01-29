(function(){

'use strict';

angular.module('app.core')
.controller('ArticlesController', ArticlesController);

ArticlesController.$inject = ['data','api'];

function ArticlesController(data, api){
	var articles = this;
	articles.getArticles = getArticles;

	articles.articlesList = undefined;

	articles.getArticles();

	function getArticles(){
		data.post(api.getArticles, {category: null}, false)
		.then(function(response){
			articles.articlesList = response.data.articles;
		})
	}
}

})();