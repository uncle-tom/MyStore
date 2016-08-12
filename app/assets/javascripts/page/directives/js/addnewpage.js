angular
	.module('MyStore')
	.directive('addnewpage', function(){
		return {
			restrict: 'E',
			templateUrl: "page/directives/html/addnewpage.html"
		}
	})