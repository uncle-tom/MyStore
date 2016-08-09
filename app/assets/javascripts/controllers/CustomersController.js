angular
  .module('MyStore')
  .controller('CustomersController', CustomersController);

  function CustomersController($scope, $http, Customer) {
    Customer.query({},function(data){
      $scope.customers = data;
    });
    
    $scope.customer = new Customer();
    $scope.addCustomer = function(){
      Customer.save($scope.customer, function(){
        console.log($scope.customer);
        window.location.reload();
      });
    }
  }
