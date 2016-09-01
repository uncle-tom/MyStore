angular.module('MyStore').controller('addNewProduct', 
  [	
  	'$scope', 
    '$state',
	  '$http', 
	  '$localStorage', 
	  '$sessionStorage', 
	  'Auth', 
	  'Product',
    'FileUploader',
  	addNewProduct
  ]);

function addNewProduct($scope, $state, $http, $localStorage, $sessionStorage, Auth, Product, FileUploader) {
	console.log('newProductCtrl');

	$scope.product = new Product;

  var uploader = $scope.uploader = new FileUploader({});

  $scope.addProduct = function(){
    $scope.product.$save(function(){
      uploader.url = '/products/'+$scope.product.id+'/photos';

      $.map(uploader.queue, function(file_obj) {
        file_obj.url = '/products/'+$scope.product.id+'/photos';
      })
      
      uploader.onCompleteAll = function() {
        $state.go('editproduct', {id: $scope.product.id});
      };

      uploader.uploadAll();
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
