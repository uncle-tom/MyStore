angular.module('MyStore').controller('mainCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', mainCtrl]);

function mainCtrl($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('yes');
	$http.get('assets/hotels.json').success(function(data, status, headers, config){
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
  
}
