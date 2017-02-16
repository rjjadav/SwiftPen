(function(){

'use strict';

angular.module('app.main.category')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['toastr','data', 'api'];

function CategoryController(toastr, data, api){
	var category = this;
	category.getCategory = getCategory
	category.addCategory = addCategory;


	category.categoriesList = undefined;

	category.getCategory();
	function getCategory(){
		data.post(api.getCategory, null, true)
		.then(function(response){
			category.categoriesList = response.data.categories;
		})
		.catch();
	}

	function addCategory(categoryObj){
		categoryObj.dateOfCreation = categoryObj.dateOfCreation || new Date();
		categoryObj.subCategories = categoryObj.subCategories || null;

		data.post(api.addCategory, categoryObj, false)
		.then(function(response){
			toastr.success('Category Saved', 'success')
			category.getCategory();
		});
	}
}

})();
