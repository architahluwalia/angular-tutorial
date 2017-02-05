(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categories.template.html',
  controller: CategoriesComponent,
  bindings: {
    item: '<'
  }
});


CategoriesComponent.$inject = ['$scope']
function CategoriesComponent($scope) {
  var $ctrl = this;
  console.log('CategoriesComponent', $ctrl);
}

})();
