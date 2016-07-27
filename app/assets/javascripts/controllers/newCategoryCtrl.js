angular.module('MyStore').controller('addNewCategory', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', 'Category', addNewCategory]);

function addNewCategory($scope, $http, $localStorage, $sessionStorage, Auth, Category) {
	console.log('addNewCategory');

	$scope.category = new Category;
  $scope.addCategory = function(){
    $scope.category.$save(function(){
      console.log($scope.category);
      window.location.reload();
    })
  }
}
