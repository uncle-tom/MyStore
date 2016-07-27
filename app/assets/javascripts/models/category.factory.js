// Category Resource
angular
  .module('MyStore')
  .factory("Category", function ($resource) {
    return $resource('/categories/:id', 
      { 
        id: '@id'
      },
    {
      'query': { 
        method: 'GET', isArray: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      'save': {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      'delete': {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      'update': {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    });
});