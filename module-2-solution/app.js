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
		vm.itemsToBuy = ShoppingListService.getToBuy();
	}
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
	var vm = this;
	vm.itemBought = ShoppingListService.getBought();
}

function ShoppingListService() {
  var service = this;

  service.bought = [];
  // List of shopping items
  service.itemsToBuy = [
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
    let item = service.itemsToBuy[itemIndex];
    let exist = false;

	service.bought.push(item);
	service.itemsToBuy.splice(itemIndex, 1);
	return ;
  };

  service.getBought = function () {
  	if (service.bought.length > 0) {
	    return service.bought;	
  	} else {
  		return false;
  	}
  };

  service.getToBuy = function () {
  	if (service.itemsToBuy.length==0) {
  		return false;
  	}
    return service.itemsToBuy;
  };
}

})();
