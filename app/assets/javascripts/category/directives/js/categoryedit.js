angular
	.module('MyStore')
	.directive('categoryedit', function(){
		return {
			restrict: 'E',
			templateUrl: "category/directives/html/categoryedit.html"
		}
	})