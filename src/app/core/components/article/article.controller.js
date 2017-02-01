(function(){

'use strict';

angular.module('app.core')
.controller('ArticleController',ArticleController);

ArticleController.$inject = ['data', 'api'];

function ArticleController(data, api){
	var article = this;
	article.saveArticle = saveArticle;

	function saveArticle(articleId){
		data.post(api.saveArticle,{articleId: articleId}, false)
		.then(function(response){
			console.log(response);
		})
		.catch(function(error){
			console.log(error);
		})
	}
}

})();