jQuery(document).ready(function($) {
	$('.post-thumbnail-front').each(function() {
		if(screen_width()>479) {
			var img_src = $(this).attr('src').replace('s72-c', 's128-c');
			$(this).attr('src', img_src);
		}
		else {
			var img_src = $(this).attr('src').replace('s72-c', 's480-c');
			$(this).attr('src', img_src);
		}
	});
});
