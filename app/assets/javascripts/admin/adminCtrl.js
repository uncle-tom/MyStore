angular.module('MyStore').controller('adminCtrl', 
  ['$rootScope', '$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$translate', adminCtrl]);

function adminCtrl($rootScope, $scope, $http, $localStorage, $sessionStorage, Auth, $translate) {
	console.log('admin work');

	$scope.changeLanguage = function (key) {
    console.log('click')
    $translate.use(key);
  };
}