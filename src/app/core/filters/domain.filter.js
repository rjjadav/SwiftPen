/**
 * Created by rahul j jadav on 3/24/2017.
 */
(function () {
  'use strict';

  angular.module('app.core')
    .filter('domain', domain);

  domain.$inject=[];

  function domain() {
    return function(url){
      var val;
      //find & remove protocol (http, ftp, etc.) and get domain
      if (url.indexOf("://") > -1) {
        val = url.split('/')[2];
      }
      else {
        val = url.split('/')[0];
      }

      //find & remove port number
      val = val.split(':')[0];

      return val;
    }
  }
})();
