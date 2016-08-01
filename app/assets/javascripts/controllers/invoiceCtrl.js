angular.module('MyStore').controller('invoicesCtrl', 
  ['$scope', '$rootScope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$q', invoicesCtrl]);

function invoicesCtrl($scope, $rootScope, $http, $localStorage, $sessionStorage,  $q, Auth) {
	console.log('invoicesCtrl');
}