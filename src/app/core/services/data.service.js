(function(){

'use strict';

angular.module('app.core')
.factory('data',apiService);

apiService.$inject = ['$http','Upload'];

function apiService($http, Upload){
	var data = {
		get: 	fnGet,
		post: 	fnPost,
		put: 	fnPut,
		delete: fnDelete,
		upload: fnUpload, 
	}

	return data;
	function fnGet(url, dataToSend, cache){
		dataToSend = dataToSend || {};
		cache = cache || false;
		return $http.get(url, {params: dataToSend}, {cache: cache});
	}

	function fnPost(url, dataToSend, cache){
		dataToSend = dataToSend || {};
		cache = cache || {};
		return $http.post(url, dataToSend, {cache: cache});
	}

	function fnPut(url, dataToSend, cache){
	}

	function fnDelete(url, dataToSend, cache){}

	function fnUpload(url, dataToSend){
		return Upload.upload({
			url: url,
			headers: {
				"Content-Type" : undefined
			},
			data: dataToSend
		});
	}
}



})();