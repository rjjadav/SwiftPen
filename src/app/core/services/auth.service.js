/**
 * Created by rahul j jadav on 2/15/2017.
 */
(function () {
  'use strict';

angular.module('app.core')
  .factory('auth',authService);

authService.$inject = ['$rootScope','data','api'];

function authService($rootScope, data, api) {
  var auth = {
    getUserInfo : getUserInfo
  };
  return auth;

  function getUserInfo(){
    data.post(api.getUserInfo,null,true)
      .then(function (response) {
        if(response.status === 200){
          $rootScope.loggedIn = true;
          $rootScope.name = response.data.emailId;
          $rootScope.role = response.data.role;
        }else{
          $rootScope.loggedIn = false;
        }
      });
  }
}
})();
