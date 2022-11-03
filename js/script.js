'use strict';

// Mobile navigation
const mobileNavBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

mobileNavBtn.addEventListener('click', ()=> {
    header.classList.toggle('nav-open');
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll('.local-link');

allLinks.forEach(function(link){
	link.addEventListener('click', function(e){
		e.preventDefault();
		const href = link.getAttribute("href");
		console.log(href);

		// Scroll back to top
		if (href == "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		if (href != "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({behavior: "smooth"});
		}

		if (link.classList.contains("header__nav-link-box"))
			headerEl.classList.toggle("nav-open");
	});
});

// Pricing toogle btn
const toogleBtn = document.querySelector('.toogle__input');
let priceBasic = document.querySelector('.price-basic');
let priceStandard = document.querySelector('.price-standard');
let priceProfessional = document.querySelector('.price-professional');

toogleBtn.addEventListener('click', ()=> {
    if (toogleBtn.checked) {
        priceBasic.textContent = '299.9';
        priceStandard.textContent = '799.9';
        priceProfessional.textContent = '999.9';
    } else {
        priceBasic.textContent = '29.99';
        priceStandard.textContent = '69.99';
        priceProfessional.textContent = '99.99';
    }
});