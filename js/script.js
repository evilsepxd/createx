$(document).ready(function(){
	$('.promo__slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		draggable: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnDotsHover: true,
		nextArrow: '<img src="icons/slider-btn.svg" alt="next-btn" class="slick-next slick-arrow">',
		prevArrow: '<img src="icons/slider-btn.svg" alt="prev-btn" class="slick-prev slick-arrow">',
		appendDots: '.promo__slider-dots'
	});

	const slickDotsContainer = document.querySelectorAll('.slick-dots li button');

	slickDotsContainer.forEach(dot => {
		dot.textContent = '0' + dot.textContent;
	});
});