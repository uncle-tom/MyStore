angular.module('MyStore').controller('invoicesCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', invoicesCtrl]);

function invoicesCtrl($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('invoicesCtrl');
}