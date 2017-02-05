(function () {
'use strict';

angular.module('MenuApp')
.component('Items', {
  templateUrl: 'src/items.template.html',
  // controller: ItemsComponent,
  bindings: {
    items: '<'
  }
});



// ItemsComponent.$inject = ['$scope']
// function ItemsComponent($scope) {
//   var $ctrl = this;
//   console.log('ItemsComponent', $ctrl);
// }

})();
