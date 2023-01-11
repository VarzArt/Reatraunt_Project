const headerMenuButton = document.querySelector(".header__top_menuBtn");
const menuItems = [
  ...document.querySelectorAll(".header__top_menuBtn-nav-item"),
];

headerMenuButton.addEventListener("click", () => {
  menuItems.forEach((el) => {
    el.classList.toggle("active");
  });
});
