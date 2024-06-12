(function($) {
  "use strict";

  // Smooth scrolling with jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu after click
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse if page is not at top
  navbarCollapse();
  // Collapse navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Scroll to top
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

//Ads
let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;


    const showAd = () => {
        popupOverlay.classList.add("active");
        popupTimer = setInterval(() => {
            console. log(remainingTime);
            skipButton.innerHTML = `Skip in ${remainingTime}s`;
            remainingTime--;

            if (remainingTime < 0) {
                allowedToSkip = true;
                skipButton.innerHTML = "Skip";
                clearInterval(popupTimer);
         }

     }, 1000);
};

const skipAd = () => {
    popupOverlay.classList.remove("active");
};

skipButton.addEventListener("click", () => {
    if (allowedToSkip) {
        skipAd();
    }
    
});

const startTimer = () => { 
    if (window.scrollY > 100) {
    showAd()
    window.removeEventListener("scroll", startTimer);
    }
};

window.addEventListener("scroll", startTimer);

