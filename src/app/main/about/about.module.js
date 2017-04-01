/**
 * Created by rahul j jadav on 4/1/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.about',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('app.main_about',{
      url: '/about',
      views:{
        'content@app': {
          templateUrl: 'app/main/about/about.html',
          controller: function () {

          },
          controllerAs: 'about'
        }
      }
    })
  }
})();
