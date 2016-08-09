angular.module('MyStore').controller('invoicesCtrl', 
  ['$scope', '$http', '$stateParams', '$location', 'Order',  invoicesCtrl]);

function invoicesCtrl($scope, $http, $stateParams, $location, Order) {
  console.log('invoicesCtrl');
  
  Order.query({}, function(data){
    $scope.orders = data;
  });
}
