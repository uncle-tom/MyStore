angular.module('MyStore').controller('categoryCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', categoryCtrl]);

function categoryCtrl($scope, $http, $localStorage, $sessionStorage, Auth) {
	console.log('category');
}
