const reviews = document.querySelectorAll(".feedback-content");
const buttons = document.querySelectorAll(".feedback-radiobuttons__item");

let addClassToReview = function (item) {
  const radio = item.querySelector(".radio__input");
  radio.addEventListener("change", function () {
    for (let review of reviews) {
      review.classList.remove("active");
    }
    let val = radio.value;
    let reviewOnce = document.getElementById("content-" + val);
    reviewOnce.classList.add("active");
  });
};

for (let i = 0; i < buttons.length; i++) {
  addClassToReview(buttons[i]);
}
