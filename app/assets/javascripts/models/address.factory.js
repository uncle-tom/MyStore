angular.module('MyStore')
  .factory("Address", function ($resource) {
    return $resource('/addresses/:id', 
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
