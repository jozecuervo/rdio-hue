/*! Rdio Hue - v0.1.0 - 2014-11-26
* https://github.com/jhernandez/rdio-hue
* Copyright (c) 2014 Jose Hernandez; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.rdio_hue = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.rdio_hue = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.rdio_hue.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.rdio_hue.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].rdio_hue = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
