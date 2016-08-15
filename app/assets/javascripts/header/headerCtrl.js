angular.module('MyStore').controller('headerCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$stateParams', '$location', '$translate', 'Product', headerCtrl]);

function headerCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, $location, $translate, Product) {
	console.log('headerCtrl');

	$scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.changeLanguage = function (key) {
    console.log('click')
    $translate.use(key);
  };
}
