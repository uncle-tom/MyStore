angular.module('MyStore').controller('addNewPage', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', addNewPage]);

function addNewPage($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('addNewPage');
}
