function AppController(dataService){
	var scope = this;
	// setting view elements
	scope.header = document.getElementById("header");


	// handlers
	scope.onDataLoadedSuccess = function(result){
		
	};

	scope.onCalculateHandler = function(){

	};

	// constuctor
	var init = function(){
		dataService.getAll(scope.onDataLoadedSuccess);

		// event listeners
		scope.submitBtn.addEventListener('click', scope.onCalculateHandler);
	};

	init();
};