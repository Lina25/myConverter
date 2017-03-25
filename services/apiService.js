(function (window) {
  'use strict'
	function defineApiService(){
		var apiService = {};

		apiService.getAll = function(successFunction, failFunction){
			/** Online source
			 * var source = "https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDUAH,EURUAH,RUBUAH%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
			 */
			var source = "../data/data.json";
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState === 4){
					if(this.status === 200){
						var response = JSON.parse(this.responseText);
						successFunction(response);
					}else{
						failFunction(this.status);
					}
				}
			}
			xhttp.open("GET", source, true);
			xhttp.send();
		};

		return apiService;
	}

  if (typeof (apiService) === 'undefined') {
    window.apiService = defineApiService();
  }
})(window);