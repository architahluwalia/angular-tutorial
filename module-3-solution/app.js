(function () {
'use strict';

angular.module('NarrowItDown', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchForItem = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchItem);
    promise.then(function (response) {
      menu.found = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  }
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchItem) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(response) {
      console.log(response)
      let foundItems = [];
      angular.forEach(response.data.menu_items, function (item) {
        if (item.description.indexOf(searchItem) == 0) {
          foundItems.push(item);        
        }
      });
      return foundItems;
    });
  };
}

  function FoundItems() {

  }
})();
