jQuery(document).ready(function () {
    if (jQuery('#wookmark').length) 
      jQuery("body").addClass("collapse-sidebar");
});
jQuery(window).load(function () {
  var container = jQuery('#wookmark');
    if (container.length) {
      jQuery('#tiles li').wookmark({autoResize:true,container:container,offset:4,itemWidth:200});
      jQuery('#wookmark #tiles a').colorbox({
          rel:'gal',
          maxWidth:'80%',
          maxHeight:'90%'
      });
    }
});
