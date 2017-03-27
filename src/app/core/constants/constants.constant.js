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

    CATEGORIES_OBJECT           : {
		  'Transactions': [
        'Private Equity',
        'Venture Capital',
        'M&A',
        'PIPEs',
        'Structured Credit',
        'Public Equity',
      ],
      'Types':[
        'Investments',
        'Divestments'
      ],
      'Themes':[
        'Consumers',
        'Financials',
        'Healthcare',
        'Infrastructure',
        'TMT',
        'Industrials'
      ],
      'Offerings':[
        'IPOs',
        'Rights Issue',
        'QIPs',
      ],
      'Funds':[
        'Private Equity',
        'Venture Capital',
        'PIPEs',
        'Structured Credit',
      ],
      'General':[
		    'General'
      ]




    }
	}

	return constantsData;
}

})();
