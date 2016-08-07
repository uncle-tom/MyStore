angular.module('MyStore').controller('headerCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$stateParams', '$location', 'Product', headerCtrl]);

function headerCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, $location, Product) {
	console.log('headerCtrl');

	$scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}
