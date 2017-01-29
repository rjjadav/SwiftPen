(function(){

'use strict';

angular.module('app.sidebar')
.controller('SidebarController',SidebarController);

SidebarController.$inject = ['$rootScope'];

function SidebarController($rootScope){
	var sidebar = this;
	sidebar.closeNav = closeNav;

	function closeNav(){
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
	}
}

})();