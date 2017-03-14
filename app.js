var bookmarkManager = angular.module('bookmarkManager', []);

//bookmarkManager.config(function ($routeProvider) {
//  $routeProvider
//    .when('/', {
//        templateUrl: './index.html',
//    })
//
//});


bookmarkManager.controller('TimeController', ['$scope', '$interval', function($scope, $interval) {
  $scope.date = new Date();
  $interval(function() {
    $scope.date = new Date();
  }, 1000);
}]);

