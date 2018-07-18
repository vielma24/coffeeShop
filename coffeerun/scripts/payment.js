(function(window) {
  'use strict';
  var FORM_SELECTOR = '[coffee-payment="form"]';
  var App = window.App;
  var $ = window.jQuery;
  var PaymentHandler = App.PaymentHandler;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('payment-records', new DataStore());
  window.myTruck = myTruck;
  var myStore = new DataStore();
  var formHandler = new PaymentHandler(FORM_SELECTOR);

  formHandler.addPaymentHandler(function(payment) {
    myStore.add("receipt", payment);
  });
})(window);
