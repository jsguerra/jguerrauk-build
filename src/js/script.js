jQuery(function($) {

  'use strict';

  var HOME;

  // ================================
  // Home
  // ================================

  HOME = {

    init: function() {
      this.headerOpacity(),
      this.heroParallax(),
      this.scrollDown(),
      this.scrollUp(),
      this.wayPoints(),
      this.animations();
    },

    // Header Opacity Transition
    // ==============================================
    headerOpacity: function() {
      var $heroHeight = $('.hero-treatment').height(),
          $heroSeventy = $heroHeight * 0.7,
          $heroHeightBelow = $heroHeight * 0.5;

      $(window).on('scroll', function() {
        if ($(document).scrollTop() > $heroSeventy && $(this).width() >= 600) {
          $('#master-header').addClass('darken');
        } else {
          $('#master-header').removeClass('darken');
        }

        if ($(document).scrollTop() > $heroHeightBelow && $(this).width() >= 600) {
          $('.scroll-up').addClass('view');
        } else {
          $('.scroll-up').removeClass('view');
        }
      });
    },

    // Hero Treatment Parallax
    // ==============================================
    heroParallax: function() {
      // Variables
      var heroImage = document.querySelector(".hero-background");
      var xScrollPosition;
      var yScrollPosition;
 
      // CSS Translate3d function
      function setTranslate(xPos, yPos, el) {
       el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
      }

      // Parallax scroll function
      function scrollLoop() {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;
       
        setTranslate(0, yScrollPosition * -0.3, heroImage);
       
        requestAnimationFrame(scrollLoop);
      }

      // Window event listener on scroll
      window.addEventListener("scroll", scrollLoop, false);

      // Using Smooth Scroll for websites
      SmoothScroll({ stepSize: 80 });
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

    // Scroll Up Button
    // ==============================================
    wayPoints: function() {
      var $skills = $('.skills');
      
      $skills.waypoint(function() {
        console.log('I see you')
      }, { offset: '50%'});
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