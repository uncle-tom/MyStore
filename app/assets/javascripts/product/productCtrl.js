angular.module('MyStore').controller('productCtrl', 
  ['$scope', '$stateParams', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Product', 'Category',
  productCtrl]);

function productCtrl($scope, $stateParams, $http, $localStorage, $sessionStorage, Auth, $stateParams, Product, Category) {	
	$http.get('/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.product = data;
    
    $scope.product.category_ids = [];
    $($scope.product.categories).map(function(el){
      $scope.product.category_ids.push(this.id);
    });
  });

  Product.query({}, function(data){
    $scope.products = data;
  });

  Category.query({}, function(data){
    $scope.categories = data;
  });

	$scope.setImage = function setImage(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };  

  $scope.product = new Product();

  $scope.productDel = function(product_id){
    Product.delete({id: product_id});
    console.log('del')
  }

  $scope.exists_cat = function(cat_id){
    return ($scope.product.category_ids.indexOf(cat_id) != -1);
  }

  $scope.toggle_cat = function(cat_id){
    var indx = $scope.product.category_ids.indexOf(cat_id);
    if(!$scope.exists_cat(cat_id)) {
      $scope.product.category_ids.push(cat_id);
    } else {
      $scope.product.category_ids.splice(indx,1);
    }
  }

  $scope.productEdit = function(product_id){
    console.log('productEdit');
    Product.update({ product: $scope.product, id: $scope.product.id }, function(resp){
      console.log(resp);
      window.location.reload();
    });
  }

  $scope.images = [
    {
      url:"https://scontent-waw1-1.xx.fbcdn.net/t31.0-8/13227725_572348286259991_2582891693683454351_o.jpg"
    }
  ]  

  $scope.predicate = 'id';
  $scope.reverse = true;

  
}
