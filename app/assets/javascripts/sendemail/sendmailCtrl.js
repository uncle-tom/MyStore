angular.module('MyStore').controller('sendemailCtrl', 
  ['$scope', '$stateParams', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams',
  sendemailCtrl]);

function sendemailCtrl($scope, $stateParams, $http, $localStorage, $sessionStorage, Auth, $stateParams) {	
  console.log('sendemailCtrl')
}
