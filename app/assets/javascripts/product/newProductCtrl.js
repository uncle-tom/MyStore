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
    {
      color: "Черный",
      html: 'black',
      border: 'none',
    },
    {
      color: "Белый",
      html: 'white',
      border: '1px solid',
    },
    {
      color: "Голубой",
      html: 'lightskyblue',
      border: 'none',
    },
    {
      color: "Бежевый",
      html: 'beige',
      border: 'none',
    },
    {
      color: "Коричневый",
      html: '#964B00',
      border: 'none',
    },
    {
      color: "Красный",
      html: 'red',
      border: 'none',
    },
    {
      color: "Темно-красный",
      html: 'Darkred',
      border: 'none',
    },
    {
      color: "Бордовый",
      html: 'Maroon',
      border: 'none',
    },
    {
      color: "Синий",
      html: 'blue',
      border: 'none',
    },
    {
      color: "Серый",
      html: 'grey',
      border: 'none',
    },
    {
      color: "Персиковый",
      html: '#FFE5B4',
      border: 'none',
    },
    {
      color: "Зеленый",
      html: 'green',
      border: 'none',
    },
    {
      color: "Фиолетовый",
      html: 'purple',
      border: 'none',
    },
  ];

  $scope.sizes = [
    {size: "75A"},
    {size: "75B"},
    {size: "80B"},
    {size: "85B"},
    {size: "75C"},
    {size: "80C"},
    {size: "85C"},
    {size: "70D"},
    {size: "75D"},
    {size: "80D"},
    {size: "85D"},
    {size: "XS"},
    {size: "S"},
    {size: "M"},
    {size: "L"},
    {size: "XL"},
  ];

  $scope.sizes_setka = [
    {setka: "XS"},
    {setka: "S"},
    {setka: "M"},
    {setka: "L"},
    {setka: "XL"},
  ];
}
