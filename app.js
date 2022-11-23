// SCROLLS

document.getElementById('scrollToAbout').addEventListener('click', scrollToElement);

function scrollToElement (e) {
	element = document.getElementById('AboutToScroll');
	element.scrollIntoView({behavior: "smooth"});
};

document.getElementById('scrollToMenu').addEventListener('click', scrollToMenu);

function scrollToMenu (e) {
	element = document.getElementById('menuToScroll');
	element.scrollIntoView({behavior: "smooth"});
};

document.getElementById('scrollToBooking').addEventListener('click', scrollToBooking);

function scrollToBooking (e) {
	element = document.getElementById('bookingToScroll');
	element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
};

document.getElementById('scrollToPhoto').addEventListener('click', scrollToPhoto);

function scrollToPhoto (e) {
	element = document.getElementById('photoToScroll');
	element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
};

// CARD-TOOLTIP

let card = document.querySelector('.header__top-cart');

card.addEventListener('click', () => {
	card.classList.add('visible');
	setTimeout(function(){
		card.classList.remove('visible');
	}, 2000);
})

// CLIPBOARD

let clipboard = new ClipboardJS('#button-copy', {
	text: function(trigger) {
		return trigger.getAttribute('data-clipboard-text');
	}
});

// TOOLTIP-NUMBER

let tooltip = document.querySelector('.tooltip-phoneNumber');

document.getElementById('button-copy').addEventListener('click', () => {
	tooltip.dataset.title = "Номер скопирован ✔";
	setTimeout(function(){
		tooltip.dataset.title = "Нажмите, чтобы скопировать";
	}, 2000);
});

// BOOKING-FORM

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const bookingOverlay = document.getElementById('booking-overlay');

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const bookingModal = document.querySelector(button.dataset.modalTarget);
		openModal(bookingModal);
	})
});

bookingOverlay.addEventListener('click', () => {
	const bookingModals = document.querySelectorAll('.modal-form.active');
	bookingModals.forEach(bookingModal => {
		closeModal(bookingModal);
	})
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-form')
    closeModal(modal)
  })
})

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add('active');
	bookingOverlay.classList.add('active');
};

function closeModal(modal) {
	if(modal == null) return;
	modal.classList.remove('active');
	bookingOverlay.classList.remove('active');
};

//BOOKING-FORM-SUBMIT + BOOKING-SUCCESS-TOOLTIP

let mainForm = document.forms.bookingForm;

mainForm.addEventListener('submit', (event) => {
	event.preventDefault();
	setTimeout(function(){
		event.target.reset();
	}, 2000);
})

let inputsNode = document.querySelectorAll('.form__input');

let inputsArray = Array.prototype.slice.call(inputsNode);

let label = document.querySelectorAll('.form__label');

let bookingModal = document.querySelector('.modal-form');

let submit = document.querySelector('.form__submit');

let successTooltip = document.querySelector('.booking__successTooltip');

submit.addEventListener('click', () => {

	let inputsArrayValues = inputsArray.map((el) => el.value);

		if(!inputsArrayValues.includes("")) {
		
			let formObj = {};

			successTooltip.classList.add('visible');

			for(let i = 0; i < label.length; i++) {
				let textLabel = label[i].textContent;
				formObj[textLabel] = inputsArrayValues[i];
			};

			let formObjtoArr = Object.entries(formObj);

			formObjtoArr.forEach(([key,value]) => {
				console.table(key, value);
			})

			setTimeout(function(){
				bookingModal.classList.remove('active');
				bookingOverlay.classList.remove('active');
				successTooltip.classList.remove('visible');
			}, 2000);
		}
})

// SLIDE-SHOW

let slides = document.querySelectorAll('.main-image .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
};

// SWIPER

document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.menu-carousel', {
		loop: false,
		slidesPerView: 3,
		speed: 600,
		centeredSlides: true,
		navigation: {
			nextEl: '.menu-navigation__next',
			prevEl: '.menu-navigation__prev',
		}
	})
})

// BUTTON-TOOLTIP

let orderButton = document.querySelectorAll('.menu-carousel__info-button');
let orderItem = document.querySelectorAll('.menu-carousel__item');
let orderInfo = document.querySelectorAll('.menu-carousel__info');

orderButton.forEach(button => {
	button.addEventListener('click', () => {
		for (let i = 0; i < orderItem.length; i++) {
			if (orderItem[i].classList.contains('swiper-slide-active')) {
				orderInfo[i].classList.add('visible');
			};
			setTimeout(function(){
				orderInfo[i].classList.remove('visible');
			}, 2000);
		};
	})
})

// REVIEWS

let reviews = document.querySelectorAll('.feedback-content');
let buttons = document.querySelectorAll('.feedback-radiobuttons__item');

let addClassToReview = function (item) {
  let radio = item.querySelector('.radio__input');
  radio.addEventListener('change', function () {
		for(let review of reviews) {
			review.classList.remove('active');
		}
    let val = radio.value;
		let reviewOnce = document.getElementById('content-' + val);
		reviewOnce.classList.add('active');
  });
};

for (let i = 0; i < buttons.length; i++) {
  addClassToReview(buttons[i]);
}

// GALLERY

const imgs = document.querySelectorAll('.galery-photo');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const activeImage = document.querySelector('#active-image');
const closeIcon = document.querySelector('#close');
const galery = document.querySelector('.gallery')

let scroll = window.scrollY;

imgs.forEach(img => img.addEventListener('click', displayImage));

function displayImage(e) {
	activeImage.src = e.target.src;
	overlay.style.display = 'block';
	modal.style.display = 'block';
}

closeIcon.addEventListener('click', closeImage);

function closeImage() {
	overlay.style.display = 'none';
	modal.style.display = 'none';
}

overlay.addEventListener('click', closeImageByOverlay);

function closeImageByOverlay () {
	overlay.style.display = 'none';
	modal.style.display = 'none';
}

const next = document.querySelector('#right').addEventListener('click', nextImage);

function nextImage() {
	for(let i = 0; i < imgs.length; i++) {
		if(activeImage.src === imgs[i].src) {
			var nextImageSrc = imgs[i].nextElementSibling;
		}
	}
	if(nextImageSrc === null) {
		activeImage.src = imgs[0].src;
	} else {
		activeImage.src = nextImageSrc.src
	}
}

const prev = document.querySelector('#left').addEventListener('click', prevImage);

function prevImage() {
	for(let i = 0; i < imgs.length; i++) {
		if(activeImage.src === imgs[i].src) {
			var nextImageSrc = imgs[i].previousElementSibling;
		}
	}

	if(nextImageSrc === null) {
		activeImage.src = imgs[imgs.length-1].src;
	} else {
		activeImage.src = nextImageSrc.src
	}
}

