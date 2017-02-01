(function(){

'use strict';

angular.module('app.core')
.controller('ArticlesController', ArticlesController);

ArticlesController.$inject = ['data','api'];

function ArticlesController(data, api){
	var articles = this;
	articles.getArticles = getArticles;
	articles.getSavedArticle = getSavedArticle;

	articles.articlesList = undefined;

	articles.getArticles();
	

	function getArticles(){
		data.post(api.getArticles, {category: null}, false)
		.then(function(response){
			articles.articlesList = response.data.articles;
			articles.getSavedArticle();
		})
	}

	function getSavedArticle(){
		data.post(api.getSavedArticle, null, true)
		.then(function(response){
			var savedArticles = response.data.articles;
			var savedArticlesIds = [];

			angular.forEach(savedArticles,function(obj, i){
				if(savedArticlesIds.indexOf(obj.id) == -1){
					savedArticlesIds.push(obj.id);
				}
			})


			articles.articlesList.filter(function(ele){
				if(savedArticlesIds.indexOf(ele.id) > -1){
					ele.saved = true;
				}else{
					console.log("false");
				}
			})
		})
	}
}

})();