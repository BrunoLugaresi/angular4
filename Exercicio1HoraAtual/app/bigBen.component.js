(function(app) {
  var Component = ng.core.Component;
  var BigBenService = app.BigBenService;  

  app.BigBenComponent = Component({
    selector: 'big-ben',
    template: '<p> <b>Hora:</b> {{hora}}</p>'+
              '<p> <b>Autores:</b> Bruno Lugaresi e Leonardo Cavalcante '      
  })
  .Class({
    constructor: [BigBenService, function getHour(bigBenService) {    
      var self = this;
      bigBenService.generateHour(1000,function (hora){
        self.hora = hora;
      })
    }]
  });

})(window.app || (window.app = {}));



