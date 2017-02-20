/**
 * Created by rahul j jadav on 2/19/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.manage-articles',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('app.main_manage-articles',{
        url: '/manage-articles',
        views:{
          'content@app': {
            templateUrl: 'app/main/manage-articles/manage-articles.html',
            controller: 'ManageArticlesController',
            controllerAs: 'mas'
          }
        }
      })
  }
})();
