(function(){

'use strict';

angular.module('app.sidebar')
.controller('SidebarController',SidebarController);

SidebarController.$inject = ['$rootScope', '$state','categories','constants'];

function SidebarController($rootScope, $state, categories, constants){
	var sidebar = this;
	sidebar.closeNav = closeNav;
  sidebar.getCategories = getCategories;
  sidebar.triggerSearch = triggerSearch;
  sidebar.signUp = signUp;
  sidebar.signIn = signIn;
  sidebar.logout = logout;
  sidebar.goto = goto;

  sidebar.categories = constants.CATEGORIES_OBJECT;

  // sidebar.getCategories();
	function closeNav(){
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
	}

	function getCategories(){
	  console.log("Category Called");
    categories.get()
      .then(function(response){
        sidebar.categories = response.data.categories;
        console.log("Sidebar : ",response);
      })
  }

  function triggerSearch(searchKeyword) {
    $rootScope.$broadcast('search_triggered',{keyword : searchKeyword});
    sidebar.closeNav();
  }

  function signUp(){
	  $rootScope.$broadcast('sign_up');
    sidebar.closeNav();
  }

  function signIn(){
    $rootScope.$broadcast('sign_in');
    sidebar.closeNav();
  }

  function logout(){
    $rootScope.$broadcast('logout');
    sidebar.closeNav();
  }

  function goto(){
    sidebar.closeNav();
    $state.go();
  }

  $rootScope.$on('close_sidebar',function(){
    console.log("sidebar closed");
    sidebar.closeNav();
  })
}

})();
