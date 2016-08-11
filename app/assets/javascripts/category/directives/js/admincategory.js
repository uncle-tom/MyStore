angular
	.module('MyStore')
	.directive('admincategory', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/admincategory.html"
		}
	})