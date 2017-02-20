/**
 * Created by rahul j jadav on 2/19/2017.
 */
(function () {
  'use strict';
  angular.module('app.main.saved_articles')
    .controller('SavedArticlesController',SavedArticlesController);

  SavedArticlesController.$inject = ['data','api'];

  function SavedArticlesController(data, api) {
    var sac = this;
    sac.getAllArticles = getAllArticles;
    sac.getSavedArticles = getSavedArticles;

    sac.articlesList = undefined;
    sac.savedArticles = undefined;

    sac.getAllArticles();
    function getAllArticles(){
      // data.post(api.getArticles, {category: null}, true)
      data.post(api.getSavedArticle, null, true)
        .then(function(response){
          // sac.articlesList = response.data.articles;
          sac.savedArticles = response.data.articles;
          // sac.getSavedArticles();
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

          sac.articlesList.filter(function(ele){
            if(savedArticlesIds.indexOf(ele.id) > -1){
              ele.saved = true;
            }else{
              console.log("false");
            }
          })


          var allArticles = sac.articlesList
          sac.savedArticles = allArticles.filter(function(ele){
            return ele.saved == true;
          })


        })
    }
  }
})();
