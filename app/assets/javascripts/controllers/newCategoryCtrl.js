angular.module('MyStore').controller('addNewCategory', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', addNewCategory]);

function addNewCategory($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('addNewCategory');
}
