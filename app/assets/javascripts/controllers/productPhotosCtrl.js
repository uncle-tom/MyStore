angular.module('MyStore').controller('productPhotosCtrl', 
  [ 
    '$scope', 
    '$http', 
    '$localStorage', 
    '$sessionStorage', 
    'Auth',
    '$stateParams',
    'Product',
    'Photo',
    'FileUploader',
    productPhotos
  ]);

function productPhotos($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, Product, Photo, FileUploader) {
  $scope.product = Product.get({id: $stateParams.id});

  var uploader = $scope.uploader = new FileUploader({
    url: '/products/'+$stateParams.id+'/photos'
  });

  uploader.onCompleteAll = function() {
    console.info('onCompleteAll');
    window.location.reload(); // reload the page
  };

  $scope.set_main = function(hotel_id, photo_id) {
    console.log(photo_id);
    Product.update({ id: $stateParams.id, product: {cover_photo_id: photo_id} }, function(response) {
      console.log(response);
      //AlertNS.helpers.showAlert(2);
      alert('Главная фотография товара была успешно заменена!')
    });
  }
  
  $scope.delete = function(photo_id) {
    console.log('yes')
    if(confirm('Вы уверены, что хотите удалить эту фотографию?')){
      Photo.delete({ product_id: $stateParams.id, id: photo_id }, function(response) {
        window.location.reload();
        $state.go('products', {id: $stateParams.id})
        // Optional function. Clear html form, redirect or whatever.
      });
    }
  };
}
