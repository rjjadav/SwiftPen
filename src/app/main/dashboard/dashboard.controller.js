(function(){

'use strict';

angular.module('app.main.dashboard')
.controller('DashboardController',DashboardController);

DashboardController.$inject = ['$scope','toastr','$filter','data', 'api'];

function DashboardController($scope,toastr, $filter, data, api){
	var dashboard = this;

	dashboard.getCategory = getCategory;
	dashboard.selectedTags = selectedTags;
	dashboard.addTag = addTag;
	dashboard.addArticle = addArticle;


	dashboard.article = {
	  tags: [],
  };
	dashboard.tags = undefined;

	dashboard.getCategory();
	function getCategory(){
		data.post(api.getCategory, null, true)
		.then(function(response){
			console.log('getCategory ::: ',response);
		})
		.catch()
	}

	function selectedTags(){
		var tags = $filter('filter')(dashboard.tags, {checked: true});

		console.log(tags);
	}

	function addTag(tag){

	  dashboard.article.tags.push(tag.text);
    console.log(dashboard.article.tags);
	}

	function addArticle(article){
		// article.category="Art";
		article.link = article.link || null;

		data.upload(api.addArticle, article)
		.then(function(response){
			console.log(response);
			if(response.data.added){
				toastr.success('Article Posted', 'Success');
			}
		})
		.catch(function(error){
			console.log(error);
		});

	}

	// $scope.$watch('dashboard.tags.length',function (val) {
  //   if(dashboard.tags){
  //     dashboard.article.tags = dashboard.tags.map(function (tag) {
  //       return tag.text;
  //     });
  //   }
  //
  //   console.log(dashboard.article.tags);
  // })
}

})();
