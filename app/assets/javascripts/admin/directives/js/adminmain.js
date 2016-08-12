angular
	.module('MyStore')
	.directive('adminmain', function(){
		return {
			restrict: 'E',
			templateUrl: "admin/directives/html/adminmain.html"
		}
	})