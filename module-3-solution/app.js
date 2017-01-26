(function() {
    'use strict';

    angular.module('NarrowItDown', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.found = [];
        menu.showNone = false;
        menu.searchForItem = function() {
            if (menu.searchItem == '') {
                menu.showNone = true;
                menu.found = [];
                return ;
            }
            var promise = MenuSearchService.getMatchedMenuItems(menu.searchItem);
            promise.then(function(response) {
                    menu.found = response;
                    if (menu.found.length === 0) {
                        menu.showNone = true;
                    } else {
                        menu.showNone = false;
                    }
                })
                .catch(function(error) {
                    console.log("Something went terribly wrong.");
                });
        };

        menu.removeItem = function(index) {
            menu.found.splice(index, 1);
        };
    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchItem) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(response) {
                let foundItems = [];
                angular.forEach(response.data.menu_items, function(item) {
                    if (item.description.indexOf(searchItem) >= 0) {
                        foundItems.push(item);
                    }
                });
                return foundItems;
            });
        };
    }

    function FoundItems() {
        var ddo = {
            // template: [
            // '<div>',
            // '<ul>',
            // '  <li ng-repeat="item in items">',
            // '    Name: {{ item.name }}, Short Name: {{item.short_name}}, description: {{ item.description }}',
            // '    <button ng-click="onRemove({\'index\':$index})">Don\'t want this one!</button>',
            // '  </li>',
            // '</ul>',
            // '</div>'
            // ].join(' '),
            templateUrl: 'list.html',
            scope: {
              items: '<',
              onRemove: '&'
            }
        };
        return ddo;
    }
})();