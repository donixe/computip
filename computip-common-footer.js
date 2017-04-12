jQuery(document).ready(function($) {
	var hm = window.location.hostname;
	$('a').not('a[href^="http://'+hm+'"]').not('a[href^="https://'+hm+'"]').each(function() {
		console.log($(this).attr('href'));
		$(this).attr('rel','nofollow')
			.attr('target', '_blank');
	});

});
