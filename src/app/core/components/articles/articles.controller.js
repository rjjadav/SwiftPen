(function(){

'use strict';

angular.module('app.core')
.controller('ArticlesController', ArticlesController);

ArticlesController.$inject = ['$scope','data','api'];

function ArticlesController($scope, data, api){

	var articles = $scope.articles;
	articles.articlesList = articles.data;
	articles.searchedKeyword = undefined;



	$scope.$on('search_triggered', function (event,args) {
    console.log('search_trigged ::: ', args.keyword);
    articles.searchedKeyword = args.keyword;
  })
}

})();
