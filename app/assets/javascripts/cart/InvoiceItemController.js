angular
  .module('MyStore')
  .controller('InvoiceItemController', InvoiceItemController);

  function InvoiceItemController($scope, InvoiceItem, $stateParams, $http) {
    InvoiceItem.query({invoice_id: $stateParams.id}, function(data, status, headers, config){
      $scope.invoice_items = data;
      console.log(data);
    })
  }