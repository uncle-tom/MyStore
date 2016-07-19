angular.module('MyStore').controller('pageCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', pageCtrl]);

function pageCtrl($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('pageCtrl');
}
