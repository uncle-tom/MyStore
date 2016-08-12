angular
	.module('MyStore')
	.directive('adminpage', function(){
		return {
			restrict: 'E',
			templateUrl: "page/directives/html/adminpage.html"
		}
	})