(function(app) {
  var Class = ng.core.Class;

  app.BigBenService = Class({
    constructor: function BigBenService() { 
    },

    getHour: function() {    
      return new Date().toLocaleString().substring(10,30);
    },

    generateHour: function(delay, callback) {
      var self = this;
      setInterval(function() {
        callback(self.getHour());
      }, delay);
    }
  });

})(window.app || (window.app = {}));
