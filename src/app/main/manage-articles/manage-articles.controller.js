/**
 * Created by rahul j jadav on 2/19/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.manage-articles')
    .controller('ManageArticlesController', ManageArticlesController);

  ManageArticlesController.$inject = ['data', 'api'];

  function ManageArticlesController(data, api) {
    var mas = this;

    mas.getAllArticles = getAllArticles;

    mas.articlesList = undefined;

    mas.getAllArticles();
    function getAllArticles(){
      data.post(api.getAllArticles, null, true)
        .then(function(response){
          mas.articlesList = response.data.articles;
        })
    }

  }
})();
