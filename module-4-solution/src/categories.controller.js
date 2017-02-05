(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['ShoppingListService', 'items'];
function CategoriesController(ShoppingListService, items) {
  var mainList = this;
  mainList.items = items;
}

})();
