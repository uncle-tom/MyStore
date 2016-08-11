angular
	.module('MyStore')
	.directive('adminproduct', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/adminproduct.html"
		}
	})