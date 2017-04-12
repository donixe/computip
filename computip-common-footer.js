jQuery(document).ready(function($) {
	var hm = window.location.hostname;
	$('a').not('a[href^="http://'+hm+'"]').not('a[href^="https://'+hm+'"]').each(function() {
		console.log($(this).attr('href'));
		$(this).attr('rel','nofollow')
			.attr('target', '_blank');
	});
	var e_br = $('article .post-body>br');
	e_br.eq(5).after(function() {
		return '<input type="hidden" name="IL_IN_ARTICLE">';
	});
});
