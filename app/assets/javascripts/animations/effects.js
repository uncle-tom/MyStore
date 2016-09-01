$(function(){
  init();
});

function init() {
	// Fixed admin-sidebar_left
	var height_admin_sidebar_left = 85;
	var width = document.body.clientWidth;	
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_left && width > 600 ) {
			$('.admin-sidebar_left').css('position', 'fixed');
			$('.admin-sidebar_left').css('top', '0px');
		} else {
			$('.admin-sidebar_left').css('position', 'relative');
			$('.admin-sidebar_left').css('top', '0px');
		}
	});

	//Fixed admin-sidebar_right_position
	var height_admin_sidebar_right_position = 150;
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_right_position && width > 600 ) {
			$('.addproduct_cirlce_button').fadeIn()
		} else {
			$('.addproduct_cirlce_button').fadeOut()
		}
	});

	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
}