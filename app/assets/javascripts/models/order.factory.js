angular.module('MyStore')
  .factory("Order", function ($resource) {
    return $resource('/orders/:id', 
      { 
        id: '@id'
      },
      {
        'update': {method: 'PUT'}
      }
    );
  });
