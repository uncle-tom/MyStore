angular
	.module('MyStore')
	.directive('addnewcategory', function(){
		return {
			restrict: 'E',
			templateUrl: "category/directives/html/addnewcategory.html"
		}
	})