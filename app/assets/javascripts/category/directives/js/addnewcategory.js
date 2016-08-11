angular
	.module('MyStore')
	.directive('addnewcategory', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/addnewcategory.html"
		}
	})