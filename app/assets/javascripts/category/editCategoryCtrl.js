angular.module('MyStore').controller('editCategoryCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 
  'Auth', editCategoryCtrl]);

function editCategoryCtrl($scope, $http, $stateParams, $localStorage, $sessionStorage, Auth) {

  if($stateParams.id) {
    $http.get('/categories/'+$stateParams.id+'.json').success(function(data, status, headers, config){
      $scope.category = data.category;
    })
  }
}
