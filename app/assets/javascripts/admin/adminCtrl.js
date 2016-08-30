angular.module('MyStore').controller('adminCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$translate', adminCtrl]);

function adminCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $translate) {
	console.log('admin work');

	
	$scope.changeLanguage = function (key) {
    console.log('click')
    $translate.use(key);
  };
}