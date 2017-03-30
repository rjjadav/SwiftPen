(function() {
  'use strict';

  angular
    .module('swiftPen')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope) {
    var main = this;
    main.closeSidebar = closeSidebar;

    function closeSidebar(){
      $rootScope.$broadcast('close_sidebar');
    }
  }
})();
