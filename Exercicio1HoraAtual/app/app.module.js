
(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var BigBenService = app.BigBenService;
  var BigBenComponent = app.BigBenComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, BigBenComponent],
    providers: [BigBenService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
