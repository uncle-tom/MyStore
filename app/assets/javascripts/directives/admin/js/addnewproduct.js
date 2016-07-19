angular
	.module('MyStore')
	.directive('addnewproduct', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/addnewproduct.html"
		}
	})