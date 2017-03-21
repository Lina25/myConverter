(function (window) {
  'use strict'
	function defineApiService(){
		var apiService = {};

		apiService.getAll = function(successFunction, failFunction){
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