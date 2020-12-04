jQuery(function($) {

  'use strict';

  var HOME;

  // ================================
  // Home
  // ================================

  HOME = {

    init: function() {
      if ($('#home').length) {
        this.headerOpacity(),
        this.heroParallax(),
        this.scrollDown(),
        this.scrollUp(),
        // this.animations(),
        this.mySkills(),
        this.projectItem(),
        this.dateUpdate();
      }
    },

    // Header Opacity Transition
    // ==============================================
    headerOpacity: function() {
      var $heroHeight = $('.hero-treatment').height(),
          $heroSeventy = $heroHeight * 0.7,
          $heroHeightBelow = $heroHeight * 0.5;

      $(window).on('load scroll', function() {
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

    // Animate on scroll library
    // ==============================================
    // animations: function() {
    //   AOS.init({
    //     duration: 1000
    //   });
    // },

    // Add waypoints to skills section
    // ==============================================
    mySkills: function() {
      var $skills = $('.skills');
      
      $skills.waypoint(function(direction) {
        if (direction === 'down') {
          $('.skills-bar').addClass('animate-skill');
        } else {
          $('.skills-bar').removeClass('animate-skill');
        }
      }, { offset: '50%'});
    },

    // Project function
    // ==============================================
    projectItem: function() {
      // var $projectOpen = $('.project-item').find('.project-open');
      // var $projectClose = $('.project-item').find('.project-close');

      // $projectOpen.on('click', function() {
      //   $(this).parent().find('.project-content').addClass('zoomOut');
      //   $(this).parent().find('.project-content').removeClass('zoomIn');
      //   var $coordinates = $('#master-header').offset();
      //   console.log($coordinates);
      //   $(this).parent().find('.project-content').css('top', ($coordinates.top + 69) + 'px');
      // });

      // $projectClose.on('click', function() {
      //   $(this).parent().removeClass('zoomOut');
      //   $(this).parent().addClass('zoomIn');
      // });
    },

    // Project function
    // ==============================================
    dateUpdate: function() {
      var $date = $('.copyright-date');

      var $year = new Date();
      var $currentYear = $year.getFullYear();

      $date.text($currentYear);
    }
  };
  
  HOME.init();

}); //jQuery