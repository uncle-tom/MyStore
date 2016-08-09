angular.module('MyStore').controller('invoicesCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 
  'Auth', 'ngCart', '$location', 'Order',  invoicesCtrl]);

function invoicesCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, $location, Order) {
  console.log('invoicesCtrl');
  
  Order.query({}, function(data){
    $scope.orders = data;
  });
}
