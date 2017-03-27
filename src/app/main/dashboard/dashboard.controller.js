(function(){

'use strict';

angular.module('app.main.dashboard')
.controller('DashboardController',DashboardController);

DashboardController.$inject = ['$rootScope','$scope','toastr','$filter','data', 'api','constants'];

function DashboardController($rootScope,$scope,toastr, $filter, data, api, constants){

	var dashboard = this;

	dashboard.getCategory = getCategory;
	dashboard.selectedTags = selectedTags;
	dashboard.addTag = addTag;
	dashboard.addArticle = addArticle;
	dashboard.activateArticle = activateArticle;
	dashboard.loading = false;



	dashboard.article = {
	  tags: "",
  };
	dashboard.tags = undefined;
	dashboard.categories = constants.CATEGORIES_OBJECT;

	// dashboard.getCategory();
	function getCategory(){
		data.post(api.getCategory, null, true)
		.then(function(response){
			console.log('getCategory ::: ',response);
			dashboard.categories = response.data.categories;
		})
		.catch()
	}

	function selectedTags(){
		var tags = $filter('filter')(dashboard.tags, {checked: true});

		console.log(tags);
	}

	function addTag(tag){

	  dashboard.article.tags+= tag.text+",";
    console.log(dashboard.article.tags);
	}

	function addArticle(article){
	  // console.log(article);
		// article.category="Art";
    dashboard.loading = true;
		article.link = article.link || null;
    article.excel = article.excel || null;
    article.secondImage = article.image || null;
    article.content = article.content || null;



    article.category = article.category.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
    article.category = article.category.join();
    // article.tags = ["qwe", "zczc"];
		data.upload(api.addArticle, article)
		.then(function(response){
			console.log(response);
			if(response.data.added){
        if($rootScope.role == 'admin'){
          dashboard.activateArticle(response.data.articleId);
        }else{
          toastr.success('Article Sent for Verification', 'Success');
          dashboard.loading = false;
        }

			}
		})
		.catch(function(error){
			toastr.error('Error posting Article', 'Error');
      dashboard.loading = false;
		});

	}

  function activateArticle(id) {
    data.post(api.makeArticleActive,{articleId:id},false)
      .then(function (response) {
        if(response.data.added == true){
          dashboard.article = {};
          toastr.success('Article Posted Successfully','Success');
        }
        else{
          toastr.error('Error Posting Article', 'Error');
        }
        // console.log(response);
        dashboard.loading = false;
      })
      .catch(function (error) {
        toastr.error('Error Posting Article', 'Error');
        dashboard.loading = false;
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
  console.log("Role ::: ",$rootScope.role);
}

})();
