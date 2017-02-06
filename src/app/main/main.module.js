(function(){

'use strict';

angular.module('app.main',[
	'app.main.auth',
	'app.main.listing',
	'app.main.dashboard',
	'app.main.category',
	'app.main.saved_articles',
	'app.main.article',
])
.config(config);

config.$inject = [];

function config(){}

})();