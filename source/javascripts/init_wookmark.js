jQuery(document).ready(function () {
    if (!jQuery('body').hasClass('no-sidebar') && jQuery('#wookmark').length) 
        jQuery("body").addClass("collapse-sidebar");

    var container = jQuery('#wookmark');
    if (container.length) {
        var items = jQuery('#tiles li');
        jQuery('a', items).addClass('gal').colorbox({
            rel:'gal',
            maxWidth:'80%',
            maxHeight:'90%'
        });
        jQuery('#tiles').imagesLoaded(function(){
            items.wookmark({
                autoResize:true,
		container:container,
		offset:4,
		itemWidth:200
	    });
        });
    }
});
