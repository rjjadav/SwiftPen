/**
 * Created by rahul j jadav on 3/25/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.test',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('app.main_test',{
        url: '/test',
        views:{
          'content@app':{
            templateUrl: 'app/main/test/test.html',
            controller: 'TestController'
          }
        }
      })
  }
})();
