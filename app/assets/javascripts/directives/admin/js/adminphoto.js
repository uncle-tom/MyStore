angular
	.module('MyStore')
	.directive('adminphoto', function(){
		return {
			restrict: 'E',
			templateUrl: "directives/admin/html/adminphoto.html"
		}
	})