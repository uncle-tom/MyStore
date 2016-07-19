angular.module('MyStore').controller('addNewProduct', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', addNewProduct]);

function addNewProduct($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('newProductCtrl');
}
