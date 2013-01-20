//jQuery(document).ready(function(){if(jQuery('#wookmark').length){$('#tiles li').wookmark({autoResize:true,container:$('#wookmark'),offset:2,itemWidth:200})}});
jQuery(document).ready(function () {
  var container = jQuery('#wookmark');
    if (container.length) {
      jQuery("body").addClass("collapse-sidebar");
      jQuery('#tiles li').wookmark({autoResize:true,container:container,offset:4,itemWidth:200});
    }
});
