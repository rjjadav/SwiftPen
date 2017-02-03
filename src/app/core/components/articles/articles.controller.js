(function(){

'use strict';

angular.module('app.core')
.controller('ArticlesController', ArticlesController);

ArticlesController.$inject = ['$scope','data','api'];

function ArticlesController($scope, data, api){
	
	var articles = $scope.articles;
	// console.log("category :: ",articles.category);
	// articles.getArticles = getArticles;
	articles.getAllArticles = getAllArticles;
	articles.getSavedArticles = getSavedArticles;

	articles.dataToDisplay = articles.display || 'all'; 
	articles.articlesList = undefined;
	articles.savedArticles = undefined;
	articles.selectedCategory = (articles.category == 'all' ? null : articles.category);

	articles.getAllArticles();
	

	function getAllArticles(){
		data.post(api.getArticles, {category: articles.selectedCategory}, false)
		.then(function(response){
			articles.articlesList = response.data.articles;
			articles.getSavedArticles();
		})
	}

	function getSavedArticles(){
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
			
			if(articles.dataToDisplay == 'saved'){
				var allArticles = articles.articlesList
				articles.articlesList = allArticles.filter(function(ele){
					return ele.saved == true;
				})	
			}
		})
	}
}

})();