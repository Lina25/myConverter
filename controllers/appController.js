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
  scope.onDataLoadedSuccess = function (result) {
  for (var i = 0; i < result.length; i++) {
    var a = result[i].txt;
  }

  var msgContainer = document.createDocumentFragment();
  for (var i = 0; i < result.length; i++) {
    var option = msgContainer.appendChild(document.createElement("option"));
    option.text = result[i].txt;
  }
  scope.cash_from.appendChild(msgContainer);
};
  
  scope.onDataLoadedSuccess1 = function (result) {
  for (var i = 0; i < result.length; i++) {
    var a = result[i].txt;
  }

  var msgContainer = document.createDocumentFragment();
  for (var i = 0; i < result.length; i++) {
    var option = msgContainer.appendChild(document.createElement("option"));
    option.text = result[i].txt;
  }
  scope.cash_to.appendChild(msgContainer);
};
  
  
  scope.onCalculateHandler = function () {
  
    var last_result, vfrom, vto, vcash;
    vcash = document.getElementById("cash").value;
    vfrom = document.getElementById("from").value;
    vto = document.getElementById("to").value;
    
                        
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
    dataService.getAll(scope.onDataLoadedSuccess1);
    // event listeners


    scope.calculate.addEventListener('click', scope.onCalculateHandler);
    scope.calculate.addEventListener('click', scope.preventDefaultHandler);
  };
  init();
};




//function myFunction() {
//    var btn = document.createElement("BUTTON");
//    document.body.appendChild(btn);
//}