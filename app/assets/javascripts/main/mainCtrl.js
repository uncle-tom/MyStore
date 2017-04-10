angular.module('MyStore').controller('mainCtrl', 
  ['$scope', '$state', '$http', '$stateParams', '$localStorage', '$sessionStorage', 'ngCart', 'Order',
   'Product', 'InvoiceItem', 'Address', 'products', mainCtrl]);

function mainCtrl($scope, $state, $http, $stateParams, 
  $localStorage, $sessionStorage, ngCart, Order, 
  Product, InvoiceItem, Address, products) {
  $scope.products = products;

  $scope.reviews = $state.current.data.reviews;
  $scope.team = [
	  {
	  	name:"Саша",
	  	photo: "assets/team/team01.jpg",
	  	description: "Директор"
	  }, 
	  {
	  	name:"ТотЧьеИмяНельзяНазывать",
	  	photo: "assets/team/team02.jpg",
	  	description: "Курьер"
	  },
	  {
	  	name:"Семенчик",
	  	photo: "assets/team/team03.jpg",
	  	description: "Быстроногий Гермес"
	  },
	  {
	  	name:"Вова",
	  	photo: "assets/team/team04.jpg",
	  	description: "Разработчик"
	  }
  ]

  $scope.swiper = {};

  $scope.next = function() {
      $scope.swiper.slideNext();
  };
  $scope.prev = function() {
    $scope.swiper.slidePrev();
  };
  
  //filter premium
  $scope.haspopularFilter = function(products, has_popular) {
    return products.has_popular === true;
  }

  $scope.new_order = new Order();

  $scope.updateOrder = function() {
    if(!$scope.new_order.id) {
      $scope.new_order.payment_type = $scope.user.payment_type;

      $scope.new_order.$save(function(order) {
        $scope.new_order.id = order.id;
        
        $.map(ngCart.getCart().items, function(el) {
              
          var invoice_item = new InvoiceItem({
            product_id: el._id, 
            price: el._price, 
            count: el._quantity,
            order_id: order.id,
            color: el.getData().color,
            size: el.getData().size
          });

          invoice_item.$save();

          var address = new Address({
            order_id: order.id,
            user_name: $scope.user.name,
            user_phone: $scope.user.phone,
            user_email: $scope.user.email,
            town: $scope.user.city,
            address: $scope.user.address, 
            notes: $scope.user.notes
          });

          address.$save();
          ngCart.empty()
        });
      })
    }
  }
}
