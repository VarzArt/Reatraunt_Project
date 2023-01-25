const mainForm = document.forms.bookingForm;
const inputsNode = [...document.querySelectorAll(".form__input")];
const label = document.querySelectorAll(".form__label");
const bookingModal = document.querySelector(".modal-form");
const submit = document.querySelector(".form__submit");
const successTooltip = document.querySelector(".booking__successTooltip");

mainForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setTimeout(() => {
    event.target.reset();
  }, 2000);
});

submit.addEventListener("click", () => {
  const inputsArrayValues = inputsNode.map((el) => el.value);

  if (!inputsArrayValues.includes("")) {
    const formObj = {};

    successTooltip.classList.add("visible");

    for (let i = 0; i < label.length; i++) {
      let textLabel = label[i].textContent;
      formObj[textLabel] = inputsArrayValues[i];
    }

    let formObjToArr = Object.entries(formObj);

    formObjToArr.forEach(([key, value]) => {
      console.table(key, value);
    });

    setTimeout(() => {
      bookingModal.classList.remove("active");
      bookingOverlay.classList.remove("active");
      successTooltip.classList.remove("visible");
    }, 2000);
  }
});
