(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  // Constructor
  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      fn(data);
      this.reset();
      this.elements[0].focus();
      document.getElementById("strength").style.color = "#26af07";
      console.log(data);
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);