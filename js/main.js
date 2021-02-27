$(window).on("load", function () {
  /*--------- Preloader --------------*/
  $(".preloader").fadeOut("slow");
});
$(document).ready(function () {
  /*-------- Navbar Shrink ------------*/
  let navbar = document.querySelector(".navbar");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }
  /*------- Video Popup --------*/
  let open = document.querySelector(".video-play-btn");
  let close = document.querySelector(".video-popup-close");
  let videoPopup = document.querySelector(".video-popup");
  function show() {
    videoPopup.classList.add("open");
  }
  function hide() {
    videoPopup.classList.remove("open");
  }
  open.addEventListener("click", show);
  close.addEventListener("click", hide);
  /*----------- Features Carousel --------------*/
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*----------- Screenshts Carousel --------------*/
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  /*----------- Testimonials Carousel --------------*/
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*----------- Team Carousel --------------*/
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*----------- Page Scroll - ScrollIt---------*/
  $.scrollIt({
    topOffset: -50,
  });
  /*--------- Navbar Collapse --------*/
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  /*------Toggle Theme---------*/
  function toggleTheme() {
    if (localStorage.getItem("app-theme") !== null) {
      if (localStorage.getItem("app-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();
  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("app-theme", "dark");
    } else {
      localStorage.setItem("app-theme", "light");
    }
    updateIcon();
  });
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").addClass("fa-moon");
      $(".toggle-theme i").removeClass("fa-sun");
    }
  }
});
