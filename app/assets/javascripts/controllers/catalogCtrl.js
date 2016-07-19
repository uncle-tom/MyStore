angular.module('MyStore').controller('catalogCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$stateParams', catalogCtrl]);

function catalogCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams) {
	console.log('catalogCtrl');
	
	// $http.get('assets/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
 //    $scope.products = data;
 //  });
  

  $http.get('assets/hotels.json').success(function(data, status, headers, config){
    $scope.products = data;
  });

  $scope.qty = 2500;
  //filter price_min
  $scope.minpriceFilter = function(products, qty, price_min) {
    return products.price_min <= $scope.qty
  }
}
