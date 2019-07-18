jQuery(function($) {

  'use strict';

  var HOME;

  // ================================
  // Home
  // ================================

  HOME = {

    init: function() {
      this.headerOpacity(),
      this.scrollDown(),
      this.scrollUp(),
      this.animations();
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
      var $heroHeight = $('.hero-treatment').height();

      $(".scroll-down").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".about-me").offset().top
        }, 1500);
      });
    },

    // Scroll Up Button
    // ==============================================
    scrollUp: function() {
      var $heroHeight = $('.hero-treatment').height();

      $(".scroll-up").on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
      });
    },

    // Animate on scroll library
    // ==============================================
    animations: function() {
      AOS.init({
        duration: 1000
      });
    }
  };
  
  HOME.init();

}); //jQuery