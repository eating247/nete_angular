donuts.controller("BatterCtrl", 
  ["$scope", "BatterService",
  function($scope, BatterService) {

    $scope.batters = BatterService.getBatters();

    $scope.hideBatterID = false;

    $scope.toggleBatterID = function() {
      $scope.hideBatterID = !$scope.hideBatterID;
    }

  }]);