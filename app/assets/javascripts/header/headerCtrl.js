angular.module('MyStore').controller('headerCtrl', 
  ['$rootScope', '$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$stateParams', '$location', '$translate', 'Product', headerCtrl]);

function headerCtrl($rootScope, $scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, $location, $translate, Product) {
	console.log('headerCtrl');

	$rootScope.$on('clickedOnChangeOrder', function() {
    console.log('clickedOnChangeOrder');
    $rootScope.showShadowScreen = !$rootScope.showShadowScreen;
  });

	$scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.changeLanguage = function (key) {
    console.log('click')
    $translate.use(key);
  };
}
