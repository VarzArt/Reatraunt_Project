const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const bookingOverlay = document.getElementById("booking-overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookingModal = document.querySelector(button.dataset.modalTarget);
    openModal(bookingModal);
  });
});

bookingOverlay.addEventListener("click", () => {
  const bookingModals = document.querySelectorAll(".modal-form.active");
  bookingModals.forEach((bookingModal) => {
    closeModal(bookingModal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal-form");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  bookingOverlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  bookingOverlay.classList.remove("active");
}
