angular
	.module('MyStore')
	.directive('adminmain', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/adminmain.html"
		}
	})