const tooltip = document.querySelector(".tooltip-phoneNumber");

document.getElementById("button-copy").addEventListener("click", () => {
  tooltip.dataset.title = "Номер скопирован ✔";
  setTimeout(() => {
    tooltip.dataset.title = "Нажмите, чтобы скопировать";
  }, 2000);
});
