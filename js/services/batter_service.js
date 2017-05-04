donuts.factory("BatterService", function() {
  var BatterService = {};

  var _batters = data.items.item[0].ingredients.batter;

  BatterService.getBatters = function() {
    return _batters;
  };

  return BatterService;
});