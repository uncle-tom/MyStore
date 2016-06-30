angular.module('MyStore').controller('mainCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', mainCtrl]);

function mainCtrl($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('yes');
}
