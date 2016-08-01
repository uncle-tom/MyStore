angular.module('MyStore').controller('addNewProduct', 
  [	
  	'$scope', 
	  '$http', 
	  '$localStorage', 
	  '$sessionStorage', 
	  'Auth', 
	  'Product', 
  	addNewProduct
  ]);

function addNewProduct($scope, $http, $localStorage, $sessionStorage, Auth, Product) {
	console.log('newProductCtrl');

	$scope.product = new Product;

  $scope.addProduct = function(){
    $scope.product.$save(function(){
      console.log($scope.product);
      window.location.reload();
    })
  }
}
