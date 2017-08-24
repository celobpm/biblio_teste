var myApp = angular.module('myApp');

myApp.controller('UserController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('User loaded...');


	$scope.getUsers = function(){
		$http.get('/api/').success(function(response){
			$scope.users = response;
		});
	}

	$scope.getBooks = function(){
		$http.get('/api/user/review/:id').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getReviews = function(){
		$http.get('/api/userreviews').success(function(response){
			$scope.reviews = response;
		});
	}

	$scope.addUser = function(){
		console.log($scope.user);
		$http.post('/api/user/add', $scope.user).success(function(response){
			window.location.href='#/';
		});
	}

	$scope.addEval = function(){
		console.log($scope.review);
		var id = $routeParams.id;
		$http.post('/api/user/review/'+id, $scope.review).success(function(response){
			window.location.href='#/';
		});
	}


}]);
