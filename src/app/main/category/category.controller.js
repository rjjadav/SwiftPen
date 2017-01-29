(function(){

'use strict';

angular.module('app.main.category')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['toastr','data', 'api'];

function CategoryController(toastr, data, api){
	var category = this;
	category.addCategory = addCategory;

	function addCategory(categoryObj){
		categoryObj.dateOfCreation = new Date();
		categoryObj.subCategories = null;

		data.post(api.addCategory, categoryObj, false)
		.then(function(response){
			toastr.success(JSON.stringify(response), 'success')
		})
	}
}

})();