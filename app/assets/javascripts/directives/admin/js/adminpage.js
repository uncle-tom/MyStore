angular
	.module('MyStore')
	.directive('adminpage', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/adminpage.html"
		}
	})