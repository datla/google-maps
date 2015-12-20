(function(){
  
  var app = angular.module("myApp", ["ngRoute", "uiGmapgoogle-maps"]);
  
  app.config(function($routeProvider){
    $routeProvider
    .when("/map-view", {
      templateUrl: "map.html",
      controller: "MapController"
    })
    .otherwise({redirectTo:"/map-view"});
  });
  
}());