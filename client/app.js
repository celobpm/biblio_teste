var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'UserController',
		templateUrl: 'views/home.html'
	})
	.when('/user/add', {
		controller:'UserController',
		templateUrl: 'views/add_user.html'
	})

	.when('/userreviews', {
		controller:'UserController',
		templateUrl: 'views/review_list.html'
	})

	.when('/user/review/:id', {
		controller:'UserController',
		templateUrl: 'views/user_review.html'
	})
	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})

	.when('/books/add',{
		controller:'BooksController',
		templateUrl: 'views/add_book.html'
	})

	.otherwise({
		redirectTo: '/'
	});
});
