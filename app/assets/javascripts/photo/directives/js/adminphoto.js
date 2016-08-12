angular
	.module('MyStore')
	.directive('adminphoto', function(){
		return {
			restrict: 'E',
			templateUrl: "photo/directives/html/adminphoto.html"
		}
	})