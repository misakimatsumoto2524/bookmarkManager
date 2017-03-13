var bookmarkManager = angular.module('bookmarkManager', []);

//bookmarkManager.config(function ($routeProvider) {
//  $routeProvider
//    .when('/', {
//        templateUrl: './index.html',
//    })
//
//});


bookmarkManager.controller('TimeController', function($scope) {
  console.log('yoyoyo');
  $scope.date = new Date();
});

