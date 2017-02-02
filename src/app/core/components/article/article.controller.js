(function(){

'use strict';

angular.module('app.core')
.controller('ArticleController',ArticleController);

ArticleController.$inject = ['data', 'api'];

function ArticleController(data, api){
	var article = this;
	article.imagePath = api.imagePath;
	article.saveArticle = saveArticle;

	function saveArticle(articleObj){
		data.post(api.saveArticle,{articleId: articleObj.id}, false)
		.then(function(response){
			console.log(response);
			if(response.data.added){
				articleObj.saved = true;
			}
		})
		.catch(function(error){
			console.log(error);
		})
	}
}

})();