(function (window) {
	'use strict'

	function defineApiService() {
		jqueryApiService = {};

		jqueryApiService.getAll = function (successFunction, failFunction) {
			
		};

		return jqueryApiService;
	}

	if (typeof (jqueryApiService) === 'undefined') {
		window.jqueryApiService = defineApiService();
	}
})(window);