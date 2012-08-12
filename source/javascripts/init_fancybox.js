jQuery.noConflict();    // prevents conflicts with Ender.js
/*
jQuery(document).ready(function() {
  jQuery(".fancybox").fancybox();
});
*/
jQuery(document).ready(function() {
	jQuery(".fancybox").fancybox({
		prevEffect		: 'fade',
		nextEffect		: 'fade',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' }
		}
	});
});
