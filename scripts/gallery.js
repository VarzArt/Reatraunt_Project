const imgs = document.querySelectorAll(".galery-photo");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const activeImage = document.querySelector("#active-image");
const closeIcon = document.querySelector("#close");
const galery = document.querySelector(".gallery");

const scroll = window.scrollY;

imgs.forEach((img) => img.addEventListener("click", displayImage));

function displayImage(e) {
  activeImage.src = e.target.src;
  overlay.style.display = "block";
  modal.style.display = "block";
}

closeIcon.addEventListener("click", closeImage);

function closeImage() {
  overlay.style.display = "none";
  modal.style.display = "none";
}

overlay.addEventListener("click", closeImageByOverlay);

function closeImageByOverlay() {
  overlay.style.display = "none";
  modal.style.display = "none";
}

document.querySelector("#right").addEventListener("click", nextImage);

function nextImage() {
  for (let i = 0; i < imgs.length; i++) {
    if (activeImage.src === imgs[i].src) {
      var nextImageSrc = imgs[i].nextElementSibling;
    }
  }
  if (nextImageSrc === null) {
    activeImage.src = imgs[0].src;
  } else {
    activeImage.src = nextImageSrc.src;
  }
}

document.querySelector("#left").addEventListener("click", prevImage);

function prevImage() {
  for (let i = 0; i < imgs.length; i++) {
    if (activeImage.src === imgs[i].src) {
      var nextImageSrc = imgs[i].previousElementSibling;
    }
  }

  if (nextImageSrc === null) {
    activeImage.src = imgs[imgs.length - 1].src;
  } else {
    activeImage.src = nextImageSrc.src;
  }
}
