(function(){

'use strict';

angular.module('app.main.dashboard')
.controller('DashboardController',DashboardController);

DashboardController.$inject = ['toastr','$filter','data', 'api'];

function DashboardController(toastr, $filter, data, api){
	var dashboard = this;

	dashboard.getCategory = getCategory;
	dashboard.selectedTags = selectedTags;
	dashboard.addArticle = addArticle;


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
}

})();