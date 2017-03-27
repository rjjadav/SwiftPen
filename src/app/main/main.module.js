(function(){

'use strict';

angular.module('app.main',[
	'app.main.auth',
	'app.main.listing',
	'app.main.dashboard',
	'app.main.category',
	'app.main.saved_articles',
	'app.main.article',
  'app.main.manage-articles',

  'app.main.test',
])
.config(config);

config.$inject = [];

function config(){}

})();
