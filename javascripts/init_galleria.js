
jQuery(document).ready(function() {
if (jQuery('.galleria')[0])
{
  jQuery('.galleria').galleria({
    height: 600
  });

  Galleria.loadTheme('/javascripts/galleria/themes/gtww/galleria.gtww.js');
  Galleria.run('.galleria', {
    lightbox: true,
    showInfo: true
  });
}
});
