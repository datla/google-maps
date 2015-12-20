var App = angular.module('App2', []);

App.controller('CenterCtrl', function ($scope, $http)  {
    $http.get('http://localhost:8080/germinate-navigator/api/center')
        .then(function (res) {
            $scope.centers = res.data;
        });
});