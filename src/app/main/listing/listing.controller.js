(function(){

'use strict';

angular.module('app.main.listing')
.controller('ListingController', ListingController);

ListingController.$inject = ['$stateParams'];

function ListingController($stateParams){
	var listing = this;
	listing.category = $stateParams.category || 'all';
	console.log(listing.category);
}
})();