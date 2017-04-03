(function (window, jQuery) {
	'use strict'

	function defineApiService() {
		 var jqueryApiService = {};

		jqueryApiService.getAll = function (success, error) {
		   $.ajax({
                    url: "../data/data.json",
                    dataType: 'json',
                    success: function(response){
                    var response = JSON.parse(responseText);
           },
                    error: function(statusCode);
                });
          
          
		};

		return jqueryApiService;
	}

	if (typeof (jqueryApiService) === 'undefined') {
		window.jqueryApiService = defineApiService();
	}
})(window, jQuery);