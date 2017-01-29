(function() {
	'use strict';

	angular
		.module('swiftPen')
		.config(config);

	/** @ngInject */
	function config($logProvider, toastrConfig, $facebookProvider, GooglePlusProvider) {
		// Enable log
		$logProvider.debugEnabled(true);

		// Set options third-party lib
		// toastrConfig.allowHtml = true;
		// toastrConfig.timeOut = 3000;
		// toastrConfig.positionClass = 'toast-top-right';
		// toastrConfig.preventDuplicates = true;
		// toastrConfig.progressBar = true;

		$facebookProvider.setAppId('1640268549548264');
		$facebookProvider.setVersion("v2.4");
		$facebookProvider.setCustomInit({
			status: true, 
			cookie: true,
		});
		$facebookProvider.setPermissions("email");

		GooglePlusProvider.init({
			clientId: '146309570641-qo4s00qm6gbiitg5gfbp42sbovuntt73.apps.googleusercontent.com',
			apiKey: '7HrEqrWTwk0QxWO-NSSxK3HY',
			scopes : 'https://www.googleapis.com/auth/userinfo.email'
		});
	}

})();
