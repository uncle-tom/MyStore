angular
	.module('MyStore')
	.directive('adminproduct', function(){
		return {
			restrict: 'E',
			templateUrl: "product/directives/html/adminproduct.html"
		}
	})