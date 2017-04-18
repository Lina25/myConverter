(function (window, $) {
	'use strict'

	function definejqueryApiService() {
		var jqueryApiService = {};

		jqueryApiService.getAll = function (successFunction, failFunction) {
			$.ajax({
				url: "../data/data.json",
				dataType: 'json',
				success: successFunction,
				error: function (status, errorThrown) {
					alert("Sorry, there was a problem!");
					console.log("Error: " + errorThrown);
					console.log("Status: " + status);
					failFunction();
				}
			});
		};

		return jqueryApiService;
	}

	if (typeof (jqueryApiService) === 'undefined') {
		window.jqueryApiService = definejqueryApiService();
	}
})(window, jQuery);