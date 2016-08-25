angular.module('MyStore').controller('invoicesCtrl', 
  ['$scope', '$http', '$stateParams', '$state', '$location', 'Order',  invoicesCtrl]);

function invoicesCtrl($scope, $http, $stateParams, $state, $location, Order) {
  console.log('invoicesCtrl');
  
  $http.get('/orders/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.order = data;
  })

  Order.query({}, function(data){
    $scope.orders = data;
  });

  $scope.order = new Order();

  $scope.orderDel = function(order_id){
    Order.delete({id: order_id});
    $state.go('admininvoices');
  }

  $scope.changeStatus = function(order_id, order_status){
    Order.update({id: order_id, order_status: order_status},function(resp){
      console.log(resp);
    });
  }
}
