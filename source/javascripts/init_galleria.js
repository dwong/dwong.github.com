jQuery('#galleria').galleria({
  width: 700,
  height: 500
});

Galleria.loadTheme('/javascripts/galleria/themes/classic/galleria.classic.min.js');
Galleria.configure('imageCrop', false);
Galleria.run('#galleria');
