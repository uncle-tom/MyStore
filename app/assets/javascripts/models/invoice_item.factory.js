angular.module('MyStore')
  .factory("InvoiceItem", function ($resource) {
    return $resource('/orders/:invoice_id/invoice_items/:id', 
      {
         invoice_id: '@invoice_id',
             id: '@id'
      },
      {
        'update': {method: 'PUT'}
      }
    );
  });
