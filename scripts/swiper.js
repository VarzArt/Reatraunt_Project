document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".menu-carousel", {
    loop: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 220,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    speed: 600,
    centeredSlides: true,
    navigation: {
      nextEl: ".menu-navigation__next",
      prevEl: ".menu-navigation__prev",
    },
  });
});
