angular.module('MyStore').controller('categoryCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 
  'Auth', 'ngCart', 'Category', categoryCtrl]);

function categoryCtrl($scope, $http, $localStorage, $sessionStorage, Auth, ngCart, Category) {
	console.log('category');
	
	// тест
	Category.query({}, function(data){
    $scope.categories = data;
  });
}
