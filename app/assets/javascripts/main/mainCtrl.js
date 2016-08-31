angular.module('MyStore').controller('mainCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 'ngCart', 'Order',
   'Product', 'InvoiceItem', 'Address', mainCtrl]);

function mainCtrl($scope, $http, $stateParams, $localStorage, $sessionStorage, ngCart, Order, Product, InvoiceItem, Address) {

	$http.get('/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.product = data;
  });

	$http.get('products.json').success(function(data, status, headers, config){
    $scope.products = data;
  });

  $scope.reviews = [
	  {
	  	name:"Жанна *ZhAs* Асонова",
	  	photo: "https://pp.vk.me/c620116/v620116649/18d05/VDf1OvAEj9I.jpg",
	  	description: "Сегодня вновь стала обладательницей парочки шикарных комплектов и трусиков-слипов, все как всегда отлично: качество, помощь при выборе, доставка, последнее просто моментально- сегодня заказ, завтра уже курьер на пороге😌 спасибо огромное! Успехов Вам!"
	  }, 
	  {
	  	name:"Олеся Карпухина",
	  	photo: "assets/reviews/review1.jpg",
	  	description: "Заказывала комплект и х/б трусики!!Все очень хорошего качества, размер подошел отлично!!👍 Долго сомневалась, но потом все же решила заказать😊 Большое спасибо,Саше за помощь!! Так что кого гложат сомнения-не сомневайтесь!! У Саши все отлично!!😊"
	  },
	  {
	  	name:"Маргарита Чернышева",
	  	photo: "assets/reviews/review2.jpg",
	  	description: "На днях купила комплектик! Качество хорошее, кружева очень мягкие (не церапают, не раздражают). Ношу 75B, взяла размер в размер (75B). Сидит идеально, смотрится эффектно. Теперь сестра такой же хочет😀 Девчонки, берите, не сомневайтесь!"
	  },
	  {
	  	name:"Ольга Поручник",
	  	photo: "assets/reviews/review3.jpg",
	  	description: "Спасибо огромное! Сегодня получила свой комплект) Всё подошло идеально! Мягкое кружево, приятное к телу. Больше всего переживала за бюст, но зря. Держит прекрасно! Девочки, заказывайте смело👍 Саше огромное спасибо!"
	  }
  ]
  $scope.team = [
	  {
	  	name:"Саша",
	  	photo: "http://candyladyshop.ru/assets/img/team/team01.jpg",
	  	description: "Директор"
	  }, 
	  {
	  	name:"ТотЧьеИмяНельзяНазывать",
	  	photo: "http://candyladyshop.ru/assets/img/team/team02.jpg",
	  	description: "Курьер"
	  },
	  {
	  	name:"Семенчик",
	  	photo: "http://candyladyshop.ru/assets/img/team/team03.jpg",
	  	description: "Быстроногий Гермес"
	  },
	  {
	  	name:"Вова",
	  	photo: "http://candyladyshop.ru/assets/img/team/team04.jpg",
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
