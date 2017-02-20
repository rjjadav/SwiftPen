(function(){

'use strict';

angular.module('app.core')
.constant('api', (api)())

api.$inject = [];

function api(){
	var env = 'uat';

	var url = {
		dev: {
      backend 	: 'http://localhost:8080/techbuddy',
      imagePath 	: 'http://45.56.97.181:8080/Tenga'
		},
		uat: {
      backend 	: 'http://45.56.97.181:8080/Tenga',
      imagePath 	: 'http://45.56.97.181:8080/Tenga'
		},
		prod: {

		}
	}

	var config = {
		imagePath 		  : url[env].imagePath,
		login 			    : url[env].backend + '/oauth/token',
    getUserInfo     : url[env].backend + '/getUserInfo',
		saveAccount 	  : url[env].backend + '/saveAccount',
		getArticles 	  : url[env].backend + '/getArticles',
		addArticle 		  : url[env].backend + '/addArticle',
		addCategory 	  : url[env].backend + '/addCategory',
		saveArticle 	  : url[env].backend + '/saveArticle',
		getCategory		  : url[env].backend + '/getCategory',
		getSavedArticle : url[env].backend + '/getSavedArticle',
    getAllArticles  : url[env].backend + '/getAllArticles',
    deleteArticle   : url[env].backend + '/deleteArticle',
    makeArticleActive : url[env].backend + '/makeArticleActive',
	}

	return config;
}

})();
