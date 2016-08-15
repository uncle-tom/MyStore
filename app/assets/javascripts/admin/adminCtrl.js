angular.module('MyStore').controller('adminCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$translate', adminCtrl]);

function adminCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $translate) {
	console.log('admin work');

	$scope.colors = [
	  {color: "Черный"},
	  {color: "Не черный"},
	  {color: "Белый"}
	]

	$scope.sizes = [
		{size: "70C"},
		{size: "75C"},
		{size: "80C"},
		{size: "85C"},
		{size: "70B"},
		{size: "75B"},
		{size: "80B"},
	]
	$scope.changeLanguage = function (key) {
    console.log('click')
    $translate.use(key);
  };
}