angular
	.module('MyStore')
	.directive('invoiceslist', function(){
		return {
			restrict: 'E',
			templateUrl: "cart/admin/directives/html/invoiceslist.html"
		}
	})