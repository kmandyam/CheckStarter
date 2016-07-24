app.controller('MainController', ['$scope', 
	function($scope) { 
  		$scope.title = 'Welcome to my angular checklisting app!'; 
  		$scope.promo = 'This is a place for doctors to input checklists and re-read them';
  		$scope.master = {};
  		$scope.update = function(task) {
  			$scope.master = angular.copy(task);
  		}
}]);