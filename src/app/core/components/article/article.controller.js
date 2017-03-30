(function(){

// 'use strict';

angular.module('app.core')
.controller('ArticleController',ArticleController);

ArticleController.$inject = ['$rootScope','$scope','$facebook','$state','Socialshare','data', 'api'];

function ArticleController($rootScope, $scope, $facebook, $state, Socialshare, data, api){
	var article = $scope.article;
	article.saveArticle = saveArticle;
	article.shareArticle = shareArticle;
	article.activateArticle = activateArticle;
  article.deleteArticle = deleteArticle;


  article.imagePath = api.imagePath;

	function saveArticle(articleObj){

	  if($rootScope.loggedIn){
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
    }else{
      $rootScope.$broadcast('sign_in',{action: 'save',data: articleObj});
    }

	}

	function shareArticle(articleObj,toShare){
		console.log("articleObj ::: ",articleObj);
		if(toShare == 'gplus'){
      Socialshare.share({
        'provider': 'google',
        'attrs': {
          'socialshareUrl': 'http://swiftpen.herokuapp.com' //#/article/'+articleObj.id,
        }
      });
    }

    if(toShare == 'facebook'){
      $facebook.ui({
      	method: 'feed',
      	picture: api.imagePath + articleObj.path,
      	name: articleObj.title,
      	link: 'http://swiftpen.herokuapp.com/#/article/'+'articleObj.id',
      	caption: articleObj.content,
      })
      .then(function(response){
      	console.log(response);
      });
    }


	}

	function activateArticle(articleObj) {
    data.post(api.makeArticleActive,{articleId: articleObj.id},false)
      .then(function (response) {
        if(response.data.added == true){
          articleObj.status = true;
        }
        console.log(response);
      })
  }

  function deleteArticle(articleObj) {
    data.post(api.deleteArticle,{articleId: articleObj.id},false)
      .then(function(response){
        if(response.data.added){
          articleObj = undefined;
          $state.reload();

        }
      })
      .catch()
  }
}

})();
