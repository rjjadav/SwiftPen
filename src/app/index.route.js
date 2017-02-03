(function() {
	'use strict';

	angular
		.module('swiftPen')
		.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('app',{
			abstract : true,
			views : {
				'main@': {
					templateUrl: 'app/core/layout/main-layout.html',
					controller: 'MainController',
					controllerAs: 'main'
				},
				'navigation@app': {
					templateUrl: 'app/navigation/navigation.html',
					controller: 'NavigationController',
					controllerAs: 'nav'
				},
				'sidebar@app': {
				  templateUrl: 'app/sidebar/sidebar.html',
				  controller: 'SidebarController',
				  controllerAs: 'sidebar'
				},
				'footer@app': {
					templateUrl: 'app/footer/footer.html',
					controller: function(){},
					controllerAs: 'footer'
				}
			}
		});
			// .state('home', {
			//   url: '/',
			//   templateUrl: 'app/main/main.html',
			//   controller: 'MainController',
			//   controllerAs: 'main'
			// });

		$urlRouterProvider.otherwise('/articles/all');
	}

})();
