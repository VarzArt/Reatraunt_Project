const card = document.querySelector(".header__top-cart");

card.addEventListener("click", () => {
  card.classList.add("visible");
  setTimeout(() => {
    card.classList.remove("visible");
  }, 2000);
});
