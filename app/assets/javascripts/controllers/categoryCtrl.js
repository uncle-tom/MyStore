angular.module('MyStore').controller('categoryCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 
  'Auth', 'ngCart', 'Category', categoryCtrl]);

function categoryCtrl($scope, $http, $stateParams, $localStorage, $sessionStorage, Auth, ngCart, Category) {
	console.log('category');
  $http.get('/categories/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.category = data;
    console.log(data)
  });
	
	Category.query({}, function(data){
    $scope.categories = data;
  });

  $scope.category = new Category();

  $scope.categoryDel = function(category_id){
    Category.delete({id: category_id});
    console.log('del')
  }

  $scope.editCategory = function(){
  	Category.update({ category: $scope.category, id: $scope.category.id }, function(){
      window.location.reload();
    });
  }
}