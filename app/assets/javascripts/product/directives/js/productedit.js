angular
	.module('MyStore')
	.directive('editproduct', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/productedit.html"
		}
	})