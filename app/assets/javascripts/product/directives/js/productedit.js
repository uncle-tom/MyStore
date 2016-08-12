angular
	.module('MyStore')
	.directive('editproduct', function(){
		return {
			restrict: 'E',
			templateUrl: "product/directives/html/productedit.html"
		}
	})