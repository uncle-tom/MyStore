angular
	.module('MyStore')
	.directive('addnewproduct', function(){
		return {
			restrict: 'E',
			templateUrl: "product/directives/html/addnewproduct.html"
		}
	})