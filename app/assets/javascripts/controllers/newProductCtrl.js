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

	$scope.product = new Product();
  $scope.addProduct = function(){
    Product.save($scope.product, function(){
      console.log($scope.product);
    });
  }
}
