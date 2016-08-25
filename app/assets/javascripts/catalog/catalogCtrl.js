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

  $scope.qty = 5000;
  //filter price_min
  $scope.minpriceFilter = function(products, qty, price) {
    return products.price <= $scope.qty
  }
  
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.filterIncludes = [];
  // filters
  $scope.includesFilter = function(colors){
    var i = $.inArray(colors, $scope.filterIncludes);
    if (i > -1) {
      $scope.filterIncludes.splice(i, 1);
    } else {
      $scope.filterIncludes.push(colors);
    }
  }
  $scope.catalogFilter = function(products) {
    if ($scope.filterIncludes.length > 0) {
      if ($.inArray(products.colors, $scope.filterIncludes) < 0)
        return;
    }
    return products;
  }
}
