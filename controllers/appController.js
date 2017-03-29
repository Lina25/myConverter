function AppController(dataService) {
  var scope = this;

  // setting view elements
  scope.cash = document.getElementById("cash");
  scope.res = document.getElementById("res");
  scope.cash_from = document.getElementById("from");
  scope.cash_to = document.getElementById("to");
  scope.calculate = document.getElementById("calculate");

  scope.exchangeRates = [];

  scope.updateOptions = function (element, result) {
    //clear inner HTML
    var optionContainer = document.createDocumentFragment();
    for (var i = 0; i < result.length; i++) {
      var option = optionContainer.appendChild(document.createElement("option"));
      option.text = result[i].txt;
      //add value for option
      option.value = result[i].cc;
      element.innerHTML = " ";
    }
    element.appendChild(optionContainer);
  };

  // handlers
  scope.onDataLoadedSuccess = function (result) {
    scope.updateOptions(scope.cash_from, result);
    scope.updateOptions(scope.cash_to, result);

    scope.currencyCources = result;
  };  

  scope.findExchangeObj = function (cc) {
    if (!scope.exchangeRates.length) { return undefined; }

    for (var i = 0; i < scope.exchangeRates; i++) {
      if (scope.exchangeRates[i].cc === cc) {
        return scope.exchangeRates[i];
      }
    }

    return undefined;
  };

  scope.onCalculateHandler = function (event, result) {
    event.preventDefault();

    var last_result, vfrom, vto, vcash;
    
    vcash = scope.cash.value; // сума введена користувачем
    vto = scope.cash_to.value; // валюта в яку конвертуєм

    var exchangeObj = scope.findExchangeObj(vto);
    // add exchnageObj validation

    last_result = vcash * exchangeObj.rate;
    scope.res.value = last_result;

                        
    //alert(scope.cash.value);
    //var x = document.getElementById("cash").value;
    //document.getElementById("res").innerHTML = x;

  };

  // constuctor
  var init = function () {
    dataService.getAll(scope.onDataLoadedSuccess);
    // event listeners
    scope.calculate.addEventListener('click', scope.onCalculateHandler, true);
  };
  init();
};