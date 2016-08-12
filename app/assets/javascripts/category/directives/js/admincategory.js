angular
	.module('MyStore')
	.directive('admincategory', function(){
		return {
			restrict: 'E',
			templateUrl: "category/directives/html/admincategory.html"
		}
	})