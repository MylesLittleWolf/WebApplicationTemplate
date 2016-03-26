var phonecatApp = angular.module('bingingDemoApp', []);

phonecatApp.controller('BingingDemoCtrl', function ($scope) {
  $scope.fsize = 12;
  
  $scope.addFsize = function() {
      $scope.fsize++;
  };
});