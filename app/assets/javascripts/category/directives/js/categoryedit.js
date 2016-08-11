angular
	.module('MyStore')
	.directive('categoryedit', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/categoryedit.html"
		}
	})