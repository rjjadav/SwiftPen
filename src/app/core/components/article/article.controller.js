(function(){

'use strict';

angular.module('app.core')
.controller('ArticleController',ArticleController);

ArticleController.$inject = ['$facebook','data', 'api'];

function ArticleController($facebook, data, api){
	var article = this;

	article.saveArticle = saveArticle;
	article.shareArticle = shareArticle;

  article.imagePath = api.imagePath;
	// article.tableData = [
  //   {key:'Company', value:'PVR'},
  //   {key:'Sector', value:'Entertainment'},
  //   {key:'Year Incorporated', value:'1995'},
  //   {key:'Corporate Office', value: 'Gurgaon'},
  //   {key:'Promoter(s)', value:'Ajay Bijli'}
  // ];

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

	function shareArticle(articleObj){
		console.log("articleObj ::: ",articleObj);
		$facebook.ui({
			// method: 'share',
  	// 		href: 'https://developers.facebook.com/docs/',
			method: 'feed',
			picture: api.imagePath + articleObj.path,
			name: articleObj.title,
			link: 'https://developers.facebook.com/docs/',
			caption: articleObj.content,
		})
		.then(function(response){
			console.log(response);
		});
	}
}

})();
