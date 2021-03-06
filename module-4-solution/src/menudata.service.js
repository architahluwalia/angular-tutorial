(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


function MenuDataService() {
  var service = this;

  service.getAllCategories = function () {
	return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/categories.json"
        }).then(function(response) {
        	console.log('response',response)
            return response;
        });
  };

  service.getItemsForCategory = function (categoryShortName) {
  		return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+ categoryShortName
        }).then(function(response) {
            return response;
        });
  };
}

})();
