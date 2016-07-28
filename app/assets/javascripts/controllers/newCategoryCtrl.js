angular.module('MyStore').controller('addNewCategory', 
  ['$scope', '$http', '$state', '$localStorage', '$sessionStorage', 'Auth', 'Category', addNewCategory]);

function addNewCategory($scope, $http, $state, $localStorage, $sessionStorage, Auth, Category) {
	console.log('addNewCategory');

	$scope.category = new Category;
  $scope.addCategory = function(){
    $scope.category.$save(function(){
      console.log($scope.category);
      $state.go('admincategory')
    })
  }
}
