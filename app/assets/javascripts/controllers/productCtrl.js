angular.module('MyStore').controller('productCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', productCtrl]);

function productCtrl($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('product');
}
