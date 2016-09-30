angular.module('MyStore').controller('editCategoryCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 
  'Auth', 'Category', editCategoryCtrl]);

function editCategoryCtrl($scope, $http, $state, $stateParams, $localStorage, $sessionStorage, Auth, Category) {

  if($stateParams.id) {
    $http.get('/categories/'+$stateParams.id+'.json').success(function(data, status, headers, config){
      $scope.category = data.category;
    })
  }

  $scope.editCategory = function(){
    Category.update({ category: $scope.category, id: $scope.category.id }, function(){
      $state.go('admincategory')
    });
  }

}
