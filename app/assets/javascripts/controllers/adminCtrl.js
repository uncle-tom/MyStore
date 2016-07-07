angular.module('MyStore').controller('adminCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', adminCtrl]);

function adminCtrl($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('admin work');
}