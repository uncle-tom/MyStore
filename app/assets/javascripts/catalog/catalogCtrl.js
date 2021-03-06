angular.module('MyStore').controller('catalogCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$stateParams', '$location', 'Product', catalogCtrl]);

function catalogCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, $location, Product) {
	console.log('catalogCtrl');
	
	// $http.get('assets/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
 //    $scope.products = data;
 //  });
  

  Product.query({},function(data){
    $scope.products = data;
  });

  $scope.price = 5000;
  //filter price_min
  $scope.minpriceFilter = function(products) {
    return parseFloat(products.price) <= parseFloat($scope.price);
  }
  
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.colors = '';
  $scope.filterProductsByColor = function(color){
    $scope.colors = color;
    console.log($scope.colors)
  };

  $scope.sizes = '';
  $scope.filterProductsBySize = function(size){
    $scope.sizes = size;
    console.log($scope.sizes)
  };

  // $scope.sizeIncludes = [];
  // $scope.setSelectedSize = function(size) {
  //   var i = $.inArray(size, $scope.sizeIncludes);
  //   if (i > -1) {
  //     $scope.sizeIncludes.splice(i, 1);
  //   } else {
  //     $scope.sizeIncludes.push(size);
  //   }
  //   console.log($scope.sizeIncludes);
  // }

  // $scope.sizeFilter = function(products) {
  //   if ($scope.sizeIncludes.length > 0) {
  //     if ($.inArray(products.sizes, $scope.sizeIncludes) < 0)
  //       return;
  //   }
  //   return products;
  // }
}
