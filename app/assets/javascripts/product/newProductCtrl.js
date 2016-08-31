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

  $scope.colors = [
    {color: "Черный"},
    {color: "Не черный"},
    {color: "Белый"}
  ]

  $scope.sizes = [
    {size: "70C"},
    {size: "75C"},
    {size: "80C"},
    {size: "85C"},
    {size: "70B"},
    {size: "75B"},
    {size: "80B"},
  ];
}
