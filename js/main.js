var app = angular.module('myApp', ['firebase']);

app.controller('MainController', ['$scope', '$firebase',
	function($scope, $firebase) {
			var database = firebase.database();

  		$scope.title = 'Welcome to my angular checklisting app!';
  		$scope.promo = 'This is a place for doctors to input checklists and re-read them';
  		$scope.master = {};
  		$scope.update = function(task) {
  			$scope.master = angular.copy(task);
  		}

  		$scope.localTasks = ['be cool', 'have a good time', 'yeah'];
  		$scope.updateLocalTasks = function() {
  			$scope.localTasks.push($scope.newestTask);
  			document.getElementById('localTaskInput').value = "";
  		}

			$scope.submitLocalTasks = function() {
          database.ref().child('angularTest/').push({task: $scope.promo});
          alert($scope.promo);
			}
}]);
