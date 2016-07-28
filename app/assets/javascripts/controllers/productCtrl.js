angular.module('MyStore').controller('productCtrl', 
  ['$scope', '$stateParams', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Product',
  productCtrl]);

function productCtrl($scope, $stateParams, $http, $localStorage, $sessionStorage, Auth, $stateParams, Product) {	
	$http.get('/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.product = data;
    console.log(data)
  });

  Product.query({}, function(data){
    $scope.products = data;
  });

	$scope.setImage = function setImage(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };  

  $scope.product = new Product();

  $scope.productDel = function(product_id){
    Product.delete({id: product_id});
    console.log('del')
  }

  $scope.productEdit = function(product_id){
    Product.update({ product: $scope.product, id: $scope.product.id }, function(){
      window.location.reload();
    });
  }
}
