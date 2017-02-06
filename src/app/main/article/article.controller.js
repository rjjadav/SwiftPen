(function(){
'use strict';

angular.module('app.main.article')
.controller('ArticleDetailsController', ArticleDetailsController);

ArticleDetailsController.$inject = ['$stateParams','data','api'];

function ArticleDetailsController($stateParams, data, api){
	var article = this;


	article.getArticle = getArticle;

  article.articleId = $stateParams.articleId;

  article.getArticle();
	function getArticle(){
	  data.post(api.getArticles, {articleId: article.articleId}, true)
      .then(function (response) {
        console.log(response);
      })
      .catch();
  }

}

})();
