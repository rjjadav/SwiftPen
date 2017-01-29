(function(){

'use strict';

angular.module('app.core')
.constant('api', (api)())

api.$inject = [];

function api(){
	var env = 'dev';

	var url = {
		dev: {
			backend : 'http://45.56.97.181:8080/Tenga',
		},
		uat: {

		},
		prod: {

		}
	}

	var config = {
		login 			: url[env].backend + '/oauth/token',
		saveAccount 	: url[env].backend + '/saveAccount',
		getArticles 	: url[env].backend + '/getArticles',
		addArticle 		: url[env].backend + '/addArticle',
		addCategory 	: url[env].backend + '/addCategory'
	}

	return config;
}

})();