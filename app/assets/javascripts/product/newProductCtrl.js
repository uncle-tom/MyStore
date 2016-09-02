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
  $scope.product.categories_ids = [];

  var uploader = $scope.uploader = new FileUploader({});

  $scope.addProduct = function(){
    $scope.product.$save(function(){
      uploader.url = '/products/'+$scope.product.id+'/photos';

      $.map(uploader.queue, function(file_obj) {
        file_obj.url = '/products/'+$scope.product.id+'/photos';
      })
      
      uploader.onCompleteAll = function() {
        $scope.product.categories_ids = [];
        $($scope.product.categories).map(function(el){
          $scope.product.category_ids.push(this.id);
        });

        $state.go('editproduct', {id: $scope.product.id});
      };

      if(uploader.queue.length > 0){
        uploader.uploadAll();
      } else {
        $state.go('editproduct', {id: $scope.product.id});
      }
    })
  }

  $scope.exists_cat = function(cat_id){
    if(!$scope.product.categories_ids) return false;

    return ($scope.product.categories_ids.indexOf(cat_id) != -1);
  }

  $scope.toggle_cat = function(cat_id){
    var indx = $scope.product.categories_ids.indexOf(cat_id);
    if(!$scope.exists_cat(cat_id)) {
      $scope.product.categories_ids.push(cat_id);
    } else {
      $scope.product.categories_ids.splice(indx,1);
    }
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
