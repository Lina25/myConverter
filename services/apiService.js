(function (window) {
  'use strict'
	function defineApiService(){
		var apiService = {};

		apiService.getAll = function(){
			var source = "../data/data.json";
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState === 4 ){
					if(this.status === 200){
						var response = this.responseText;
						console.log(response);
					}
				}
			}
			xhttp.open("GET", source, true);
			xhttp.send();
		};

		return apiService;
	}
  if (typeof (apiService) == 'undefined') {
    window.apiService = defineApiService();
  }
})(window);