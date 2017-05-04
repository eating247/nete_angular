donuts.factory("ToppingService", function() {
  var ToppingService = {};

  var _toppings = data.items.item[0].ingredients.topping;

  ToppingService.getToppings = function() {
    return _toppings;
  }

  return ToppingService;
});