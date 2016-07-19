angular.module('MyStore').controller('productCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$stateParams', productCtrl]);

function productCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams) {
	console.log('product');
	
	// $http.get('assets/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
 //    $scope.products = data;
 //  });

	$http.get('assets/1.json').success(function(data, status, headers, config){
    $scope.product = data;
   	$scope.setImage($scope.product.images[2]);
  });

  $http.get('assets/hotels.json').success(function(data, status, headers, config){
    $scope.products = data;
  });

	$scope.setImage = function setImage(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };  
}
