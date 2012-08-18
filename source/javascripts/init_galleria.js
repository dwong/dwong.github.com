
jQuery(document).ready(function() {
if (jQuery('.galleria')[0])
{
  jQuery('.galleria').galleria({
    width: 700,
    height: 500
  });

  Galleria.loadTheme('/javascripts/galleria/themes/classic/galleria.classic.min.js');
  Galleria.run('.galleria', {
    lightbox: true
  });
}
});
