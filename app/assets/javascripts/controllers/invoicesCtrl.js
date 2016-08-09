angular.module('MyStore').controller('invoicesCtrl', 
  ['$scope', '$http', '$stateParams', '$location', 'Order',  invoicesCtrl]);

function invoicesCtrl($scope, $http, $stateParams, $location, Order) {
  console.log('invoicesCtrl');
  
  $http.get('/orders/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.order = data;
  })

  Order.query({}, function(data){
    $scope.orders = data;
  });
}
