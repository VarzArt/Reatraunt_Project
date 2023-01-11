const orderButton = document.querySelectorAll(".menu-carousel__info-button");
const orderItem = document.querySelectorAll(".menu-carousel__item");
const orderInfo = document.querySelectorAll(".menu-carousel__info");

orderButton.forEach((button) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < orderItem.length; i++) {
      if (orderItem[i].classList.contains("swiper-slide-active")) {
        orderInfo[i].classList.add("visible");
      }
      setTimeout(function () {
        orderInfo[i].classList.remove("visible");
      }, 2000);
    }
  });
});
