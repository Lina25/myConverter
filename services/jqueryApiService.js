(function (window, $) {
	'use strict'

	function definejqueryApiService() {
		 var jqueryApiService = {};

		jqueryApiService.getAll = function (successFunction, failFunction) {
		   $.ajax({
                    url: "../data/data.json",
                    dataType: 'json',
                    success: function() {
                    var response = JSON.parse(responseText);
                      successFunction(response);
           },
                    error: failFunction(status, errorThrown);
             alert("Sorry, there was a problem!");
             console.log("Error: " + errorThrown);
             console.log("Status: " + status);
                });
          
          
		};

		return jqueryApiService;
	}

	if (typeof (jqueryApiService) === 'undefined') {
		window.jqueryApiService = definejqueryApiService();
	}
})(window, jQuery);