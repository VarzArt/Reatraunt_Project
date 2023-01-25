const reviews = document.querySelectorAll(".feedback-content");
const buttons = document.querySelectorAll(".feedback-radiobuttons__item");

let addClassToReview = function (item) {
  for (let i = 0; i < buttons.length; i++) {
    const radio = item[i].querySelector(".radio__input");
    radio.addEventListener("change", () => {
      for (let review of reviews) {
        review.classList.remove("active");
      }
      let val = radio.value;
      let reviewOnce = document.getElementById("content-" + val);
      reviewOnce.classList.add("active");
    });
  }
};

addClassToReview(buttons);
