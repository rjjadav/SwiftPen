(function(){

'use strict';

angular.module('app.main.dashboard')
.controller('DashboardController',DashboardController);

DashboardController.$inject = ['toastr','$filter','data', 'api'];

function DashboardController(toastr, $filter, data, api){
	var dashboard = this;

	dashboard.selectedTags = selectedTags;
	dashboard.addArticle = addArticle;


	dashboard.tags = [
		{name: 'Art', 			value: 'cat-Art'},
		{name: 'Culture', 		value: 'cat-Culture'},
		{name: 'Cycles', 		value: 'cat-Cycles'},
		{name: 'Galleries', 	value: 'cat-Galleries'},
		{name: 'Health', 		value: 'cat-Health'},
		{name: 'Inspirations', 	value: 'cat-Inspirations'},
		{name: 'Lookbook', 		value: 'cat-Lookbook'},
		{name: 'Music', 		value: 'cat-Music'},
		{name: 'On Trend', 		value: 'cat-On-Trend'},
		{name: 'Places', 		value: 'cat-Places'},
		{name: 'Review', 		value: 'cat-Review'},
		{name: 'Steals', 		value: 'cat-Steals'},
		{name: 'Style', 		value: 'cat-Style'},
		{name: 'Tech', 			value: 'cat-Tech'},
		{name: 'Uncategorized', value: 'cat-Uncategorized'},
		{name: 'Video', 		value: 'cat-Video'},
	];



	function selectedTags(){
		var tags = $filter('filter')(dashboard.tags, {checked: true});

		console.log(tags);
	}

	function addArticle(article){
		article.category="Art";
		article.link = null;

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