(function(){

'use strict';

angular.module('app.main.listing')
.controller('ListingController', ListingController);

ListingController.$inject = ['$stateParams','data','api'];

function ListingController($stateParams, data, api){
	var listing = this;

	listing.getAllArticles = getAllArticles;
	listing.getSavedArticles = getSavedArticles;

  listing.articlesList = undefined;
	listing.category = $stateParams.category || 'all';
	console.log(listing.category);

  listing.getAllArticles();
  function getAllArticles(){
    if(listing.category == 'all') listing.category = null;
    data.post(api.getArticles, {category: listing.category}, true)
      .then(function(response){
        listing.articlesList = response.data.articles;
        listing.getSavedArticles();
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

        listing.articlesList.filter(function(ele){
          if(savedArticlesIds.indexOf(ele.id) > -1){
            ele.saved = true;
          }else{
            console.log("false");
          }
        })

        // if(articles.dataToDisplay == 'saved'){
        //   var allArticles = articles.articlesList
        //   articles.articlesList = allArticles.filter(function(ele){
        //     return ele.saved == true;
        //   })
        // }
      })
  }
}
})();
