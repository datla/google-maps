(function() {

  var app = angular.module("myApp");

  var MapController = function(
      $scope, $routeParams, $log, $http) {

    $scope.map = {
      center: {
        latitude: 43.67023,
        longitude: -79.38676
      },

      zoom: 12,
      bounds: {}
    };
    
    $scope.options = {
      scrollwheel: true
    };
    
    $scope.vm = {};
    
    $scope.vm.map = {
      center: {                           
          latitude: 43.67023,
          longitude: -79.38676
      },
      zoom: 13
    };
    
    $scope.vm.markers = [{
        id : 99,
        latitude: 43.67023,
        longitude: -79.38676
      
    }];
    
    
    


  };

  app.controller("MapController", ["$scope", "$routeParams", "$log", "$http", MapController]);

}());