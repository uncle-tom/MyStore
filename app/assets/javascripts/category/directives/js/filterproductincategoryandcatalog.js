angular
	.module('MyStore')
	.directive('filterproductincategoryandcatalog', function(){
		return {
			restrict: 'E',
			templateUrl: "category/directives/html/filterproductincategoryandcatalog.html"
		}
	})