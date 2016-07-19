angular
	.module('MyStore')
	.directive('addnewpage', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/addnewpage.html"
		}
	})