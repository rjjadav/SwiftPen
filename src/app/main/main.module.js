(function(){

'use strict';

angular.module('app.main',[
	'app.main.auth',
	'app.main.listing',
	'app.main.dashboard',
	'app.main.category',
])
.config(config);

config.$inject = [];

function config(){}

})();