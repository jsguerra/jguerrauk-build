jQuery(function($) {

  'use strict';

  var HOME;

  // ================================
  // Home
  // ================================

  HOME = {

    init: function() {
      this.headerOpacity(),
      this.scrollDown();
    },

    // Header Opacity Transition
    // ==============================================
    headerOpacity: function() {
      var $heroHeight = $('.hero-treatment').height(),
          $heroSeventy = $heroHeight * 0.7;

      $(window).on('scroll', function() {
        if ($(document).scrollTop() > $heroSeventy && $(this).width() >= 600) {
          $('#master-header').addClass('darken');
        } else {
          $('#master-header').removeClass('darken');
        }
      });
    },

    // Hero Scroll Down Arrow
    // ==============================================
    scrollDown: function() {
      $(".scroll-down").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-me").offset().top
        }, 1000);
      });
    }

  };
  
  HOME.init();

}); //jQuery