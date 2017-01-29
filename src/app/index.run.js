(function() {
'use strict';

angular
.module('swiftPen')
.run(runBlock);

/** @ngInject */
function runBlock($rootScope, $cookies) {
	initFB();

	var accessToken = $cookies.get('accessToken');

	$rootScope.loggedIn = true;
	$rootScope.name = $cookies.get('username');
	if(!accessToken){
		$rootScope.loggedIn = false;
	}

	function initFB(){
		if (document.getElementById('facebook-jssdk')) {return;}
		var firstScriptElement = document.getElementsByTagName('script')[0];
		var facebookJS = document.createElement('script'); 
		facebookJS.id = 'facebook-jssdk';
		facebookJS.src = '//connect.facebook.net/en_US/sdk.js';
		firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
	}
}

})();
