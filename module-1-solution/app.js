(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.showMsg =false;
	$scope.menu = '';
	$scope.checkIfTooMuch = function () {
		$scope.showMsg = true;
		let menuArray = $scope.menu.split(',').filter(function(v){return v!==''});
		if (menuArray.length == 0) {
			$scope.color = 'red';			
			$scope.msg = 'Please Enter data!';
		} else if (menuArray.length>3) {
			$scope.color = 'green';			
			$scope.msg = 'Too Much!';
		} else {
			$scope.color = 'green';			
			$scope.msg = 'Enjoy!';
		}			
	};
}

})();
