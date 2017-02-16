/**
 * Created by rahul j jadav on 2/15/2017.
 */
(function () {
  'use strict';

  angular.module('app.core')
    .factory('categories', categoryService);

  categoryService.$inject = ['data','api'];

  function categoryService(data, api){
    var category = {
      get : getCategories,
    };
    return category;

    function getCategories(){
      return data.post(api.getCategory, null, true);
    }
  }
})();
