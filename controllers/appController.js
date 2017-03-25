function AppController(dataService) {
  var scope = this;
  
  
  // setting view elements
  scope.header = document.getElementById("header");
  scope.cash = document.getElementById("cash");
  scope.res = document.getElementById("res");
  scope.cash_from = document.getElementById("from");
  scope.cash_to = document.getElementById("to");
  scope.calculate = document.getElementById("calculate");
  
  
  // handlers
  scope.onDataLoadedSuccess = function (result) {};
  scope.onCalculateHandler = function () {
    //alert(scope.cash.value);
    //var x = document.getElementById("cash").value;
    //document.getElementById("res").innerHTML = x;
  }
  scope.preventDefaultHandler = function (event) {
    event.preventDefault();
  };
  
  
  // constuctor
  var init = function () {
    dataService.getAll(scope.onDataLoadedSuccess);
    // event listeners
    
    
    scope.calculate.addEventListener('click', scope.onCalculateHandler);
    scope.calculate.addEventListener('click', scope.preventDefaultHandler);
  };
  init();
};