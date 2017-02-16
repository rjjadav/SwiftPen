(function() {
'use strict';

angular
.module('swiftPen')
.run(runBlock);

/** @ngInject */
function runBlock($rootScope, data, api) {
	initFB();
  getUserInfo();

	function initFB(){
		if (document.getElementById('facebook-jssdk')) {return;}
		var firstScriptElement = document.getElementsByTagName('script')[0];
		var facebookJS = document.createElement('script');
		facebookJS.id = 'facebook-jssdk';
		facebookJS.src = '//connect.facebook.net/en_US/sdk.js';
		firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
	}

	function getUserInfo(){
	  data.post(api.getUserInfo,null,true)
      .then(function (response) {
        console.log(response);
        if(response.status === 200){
          $rootScope.loggedIn = true;
          $rootScope.name = response.data.emailId;
          $rootScope.role = response.data.role;
        }else{
          $rootScope.loggedIn = false;
        }
      })
  }
}

})();
