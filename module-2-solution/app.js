(function () {
'use strict';

angular.module('ShoppingList', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
	var vm = this;
	vm.itemsToBuy = ShoppingListService.getToBuy();
	vm.buy = function(index) {
		ShoppingListService.buyItem(index);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
	var vm = this;
	vm.itemBought = ShoppingListService.getBought();
}

function ShoppingListService() {
  var service = this;

  let bought = [];
  // List of shopping items
  let itemsToBuy = [
  {
  	name:'cookie',
  	quantity:'10'
  },  {
  	name:'jam',
  	quantity:'20'
  },  {
  	name:'bread',
  	quantity:'5'
  },  {
  	name:'pizza topping',
  	quantity:'6'
  },  {
  	name:'chips',
  	quantity:'12'
  },
  ];

  service.buyItem = function (itemIndex) {
    let item = itemsToBuy[itemIndex];
    let exist = false;

	bought.push(item);
	itemsToBuy.splice(itemIndex, 1);
	return ;
  };

  service.getBought = function () {
    return bought;	

  };

  service.getToBuy = function () {
    return itemsToBuy;
  };
}

})();
