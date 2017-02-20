(function(){
'use strict';

angular.module('app.core')
.constant('constants',(constants)());

function constants(){
	var constantsData = {
		SIGNUP_SITE                 : 'site',
		SIGNUP_FACEBOOK             : 'facebook',
		SIGNUP_FACEBOOK_PASSWORD    : 'pass_facebook',
		SIGNUP_GOOGLE_PLUS          : 'googleplus',
		SIGNUP_GOOGLE_PLUS_PASSWORD :	'pass_gplus',

		SHOW_ARTICLES_ALL           : 'all',
		SHOW_ARTICLES_SAVED         : 'saved',
	}

	return constantsData;
}

})();
