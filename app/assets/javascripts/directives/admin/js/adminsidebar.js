angular
	.module('MyStore')
	.directive('adminsidebar', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/adminsidebar.html"
		}
	})