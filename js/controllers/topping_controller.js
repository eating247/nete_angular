donuts.controller("ToppingCtrl", 
  ["$scope", "ToppingService", 
  function($scope, ToppingService) {

    $scope.toppings = ToppingService.getToppings();

    $scope.hideToppingID = false;

    $scope.toggleToppingID = function() {
      $scope.hideToppingID = !$scope.hideToppingID;
    }
  }]);