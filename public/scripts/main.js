;(function(window, document, $) {

'use strict';

$('img').each(function() {
  
  var img = this;

  if (img.width) {
    process(img);
  } else {
    $(img).on('load', function() {
      process(img);
    });
  }
  
});


function process(img) {
  
  var $img = $(img);
  var canvas = document.createElement('canvas');


  var scale = parseFloat($img.data('scale')) || (1/4);
  var size = parseFloat($img.data('size')) || (60 * (1/scale));
  var angle = parseFloat($img.data('angle'));
  var depth = parseFloat($img.data('depth')) || 3;
  var background = '#' + ($img.data('background') || '777');
  var style = $img.data('style') || 'Blobs';
  var palette = $img.data('palette') || 'Lab';

  if (isNaN(angle)) {
    angle = 45;
  }
  
  new CloseEnough.Head(img, {
    canvas: canvas,
    size: size,
    background: background,
    maquette: {
      angle: angle,
      scale: scale,
      background: background
    },
    style: new CloseEnough.style[style]({
      depth: depth,
      palette: new CloseEnough.palette[palette]()
    })
  }).render();
  
  // img.width = canvas.width;
  // img.height = canvas.height;
  // img.src = canvas.toDataURL();
  $img.replaceWith(canvas);
}

})(window, document, jQuery);