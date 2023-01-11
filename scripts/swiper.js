document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".menu-carousel", {
    loop: false,
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			600: {
				slidesPerView: 3,
				spaceBetween: 60
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
