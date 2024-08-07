// ANIMATED MOBILE TOGGLE MENU
var menuOpen = false,
  animating = false;
var menu_drop = document.getElementById('menu-drop');
const menuBtn = document.getElementById('toggle-menu-button');
var menu_x = document.getElementById('menu-close-x');
var header_menu_list = document.getElementById('header-menu-list');

var open_menu_height = (header_menu_list.getElementsByTagName('li').length * 26) + 30; //top:10px + bottom:20px + li:26px

function toggleMenu() {
  if (!menuOpen && !animating) {
    animating = true;
    menu_drop.style.display = "block";
    menu_x.style.display = "block";
    TweenLite.fromTo(menu_drop, 0.4, { height: 0, marginBottom: 0 }, {
      height: open_menu_height, onComplete: function () {
        animating = false;
        menuOpen = true;
      }
    });
  } else if (menuOpen && !animating) {
    animating = true;
    TweenLite.to(menu_drop, 0.4, {
      height: 0, marginBottom: 0, onComplete: function () {
        menu_drop.style.display = "none";
        menu_x.style.display = "none";
        menuOpen = false;
        animating = false;
      }
    });
  }
}

// This is hacky for the migration – move into Header component one day

menuBtn.addEventListener('click', toggleMenu);

if (document.getElementById("fixerupper") != null || document.getElementById("fixerupper") != undefined) {
  //Developer Email 'FIX ME' Test
  document.getElementById("fixerupper").addEventListener("click", showEmail);
}

function emailemailemail() {
  return "hello+secretdeveloperaccess@modestindustries.co";
}

var secret = [{
  "message": "You did it, you found our secret message. In this object you'll find everything else you seek.",
  "email": function () { return emailemailemail(); }
}];

function showEmail() {
  alert("Well done! You've passed stage one... Now it's time to look for the 'secret', but beware because the console knows to conceal it...")
}

/* =============================================================

  Smooth Scroll 2.12
  Animate scrolling to anchor links, by Chris Ferdinandi.
  http://gomakethings.com

  Easing support contributed by Willem Liu.
  https://github.com/willemliu

  Easing functions forked from GaÃ«tan Renaudeau.
  https://gist.github.com/gre/1650294

  URL history support contributed by Robert Pate.
  https://github.com/robertpateii

  Fixed header support contributed by Arndt von Lucadou.
  https://github.com/a-v-l

  Free to use under the MIT License.
  http://gomakethings.com/mit/

 * ============================================================= */

(function () {

  'use strict';

  // Feature Test
  if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {

    // Function to animate the scroll
    var smoothScroll = function (anchor, duration, easing, url) {

      // Functions to control easing
      var easingPattern = function (type, time) {
        if (type == 'easeInQuad') return time * time; // accelerating from zero velocity
        if (type == 'easeOutQuad') return time * (2 - time); // decelerating to zero velocity
        if (type == 'easeInOutQuad') return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
        if (type == 'easeInCubic') return time * time * time; // accelerating from zero velocity
        if (type == 'easeOutCubic') return (--time) * time * time + 1; // decelerating to zero velocity
        if (type == 'easeInOutCubic') return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
        if (type == 'easeInQuart') return time * time * time * time; // accelerating from zero velocity
        if (type == 'easeOutQuart') return 1 - (--time) * time * time * time; // decelerating to zero velocity
        if (type == 'easeInOutQuart') return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
        if (type == 'easeInQuint') return time * time * time * time * time; // accelerating from zero velocity
        if (type == 'easeOutQuint') return 1 + (--time) * time * time * time * time; // decelerating to zero velocity
        if (type == 'easeInOutQuint') return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
        return time; // no easing, no acceleration
      };

      // Function to update URL
      var updateURL = function (url, anchor) {
        if (url === 'true' && history.pushState) {
          history.pushState(null, null, '#' + anchor.id);
        }
      };

      // Calculate how far and how fast to scroll
      // http://www.quirksmode.org/blog/archives/2008/01/using_the_assig.html
      var startLocation = window.pageYOffset;
      var scrollHeader = document.querySelector('.scroll-header');
      var headerHeight = scrollHeader === null ? 0 : scrollHeader.offsetHeight;
      var endLocation = function (anchor) {
        var distance = 0;
        if (anchor.offsetParent) {
          do {
            distance += anchor.offsetTop;
            anchor = anchor.offsetParent;
          } while (anchor);
        }
        return distance - headerHeight;
      };
      var distance = endLocation(anchor) - startLocation;
      var increments = distance / (duration / 16);
      var timeLapsed = 0;
      var percentage, position, stopAnimation;

      // Scroll the page by an increment, and check if it's time to stop
      var animateScroll = function () {
        timeLapsed += 16;
        percentage = (timeLapsed / duration);
        percentage = (percentage > 1) ? 1 : percentage;
        position = startLocation + (distance * easingPattern(easing, percentage));
        window.scrollTo(0, position);
        stopAnimation();
      };

      // Stop the animation
      if (increments >= 0) { // If scrolling down
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function () {
          var travelled = window.pageYOffset;
          if ((travelled >= (endLocation(anchor) - increments)) || ((window.innerHeight + travelled) >= document.body.scrollHeight)) {
            clearInterval(runAnimation);
            updateURL(url, anchor);
          }
        };
      } else { // If scrolling up
        // Stop animation when you reach the anchor OR the top of the page
        stopAnimation = function () {
          var travelled = window.pageYOffset;
          if (travelled <= endLocation(anchor) || travelled <= 0) {
            clearInterval(runAnimation);
            updateURL(url, anchor);
          }
        };
      }

      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);

    };

    // For each smooth scroll link
    var scrollToggle = document.querySelectorAll('.scroll');
    [].forEach.call(scrollToggle, function (toggle) {

      // When the smooth scroll link is clicked
      toggle.addEventListener('click', function (e) {

        // Prevent the default link behavior
        e.preventDefault();

        // Get anchor link and calculate distance from the top
        var dataID = toggle.getAttribute('href');
        var dataTarget = document.querySelector(dataID);
        var dataSpeed = toggle.getAttribute('data-speed');
        var dataEasing = toggle.getAttribute('data-easing');
        var dataURL = toggle.getAttribute('data-url');

        // If the anchor exists
        if (dataTarget) {
          // Scroll to the anchor
          smoothScroll(dataTarget, dataSpeed || 500, dataEasing || 'easeInOutCubic', dataURL || 'false');
        }

      }, false);

    });

  }

})();