(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var App = window.App;
  var DataStore = App.DataStore;
  var Truck = App.Truck;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder(data);
    checkList.addRow(data);
  });
  console.log(formHandler);
})(window);

function updateTextInput(val) {
  if (val <= 33) {
    document.getElementById("strength").style.color = "#26af07";
  }
  if (val > 33 && val <= 66) {
    document.getElementById("strength").style.color = "#f2cd00";
  }
  if (val > 66) {
    document.getElementById("strength").style.color = "red";
  }
  document.getElementById("strength").value = val;
}
