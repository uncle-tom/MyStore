// Product Resource
angular
  .module('MyStore')
  .factory("Product", function ($resource) {
    return $resource('/products/:id', 
      { 
        id: '@id'
      },
    {
      'all': { method: 'GET' }
    });
});