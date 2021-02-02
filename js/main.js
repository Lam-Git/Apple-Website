//3:00
const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /**click event on toggle menu**/
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });
  //owl-carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false /*true or false*/,
    autoplayTimeout: 3000 /*this is to make the slid move automatic 1:38 video */,
    dots: false /*delete the dots at the bottom*/,
    nav: true /*arrow at bottom*/,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
      responsive,
    ],
  });
  //click to scroll
  $(".move-up span").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  //AOS Instance
  AOS.init();
});
