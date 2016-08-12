angular
	.module('MyStore')
	.directive('adminsidebar', function(){
		return {
			restrict: 'E',
			templateUrl: "admin/directives/html/adminsidebar.html"
		}
	})