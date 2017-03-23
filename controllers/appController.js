function AppController(dataService){
	var scope = this;
	// setting view elements
	scope.header = document.getElementById("header");
    scope.cash = document.getElementById("cash").value;
    scope.res = document.getElementById("result");
    scope.cash_from = document.getElementById("from").value;
    scope.cash_to = document.getElementById("to").value;
    scope.calculate = document.getElementById("calculate");
  

	// handlers
	scope.onDataLoadedSuccess = function(result){
		
	};

	scope.onCalculateHandler = function(){
//      alert(document.getElementById("cash").value);
       document.getElementById("result").innerHTML = document.getElementById("cash").value;
    }

	// constuctor
	var init = function(){
		dataService.getAll(scope.onDataLoadedSuccess);

		// event listeners
		scope.calculate.addEventListener('click', scope.onCalculateHandler);
	};

	init();
};
