angular.module('MyStore').controller('categoryCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', 'ngCart', categoryCtrl]);

function categoryCtrl($scope, $http, $localStorage, $sessionStorage, Auth, ngCart) {
	console.log('category');
	
	// тест
	$scope.items = ["Одежда","Обувь","Штаны","Куртка", "Не куртка", "Что-то еще", "И еще", "Хватит создавать категории"];

}
