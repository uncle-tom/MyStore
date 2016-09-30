angular.module('MyStore').controller('categoryCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 
  'Auth', 'ngCart', '$location', 'Category',  categoryCtrl]);

function categoryCtrl($scope, $http, $stateParams, $localStorage, $sessionStorage, Auth, ngCart, $location, Category) {

  if($stateParams.id) {
    $http.get('/categories/'+$stateParams.id+'.json').success(function(data, status, headers, config){
      $scope.category = data;
    })
  }
	
	Category.query({}, function(data){
    $scope.categories = data;
  });

  // $scope.category = new Category();

  $scope.categoryDel = function(category_id){
    Category.delete({id: category_id});
    console.log('del')
  }


  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.qty = 5000;

  $scope.colors = '';
  $scope.filterProductsByColor = function(color){
    $scope.colors = color;
    console.log($scope.colors)
  };

  $scope.sizes = '';
  $scope.filterProductsBySize = function(size){
    $scope.sizes = size;
    console.log($scope.sizes)
  };
}