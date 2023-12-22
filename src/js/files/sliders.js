/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

const breakpoint = window.matchMedia('(max-width: 768px)');

let aboutSwiper;

const breakpointChecker = function () {
	if (breakpoint.matches === true) {
		if (aboutSwiper !== undefined) {
			aboutSwiper.detachEvents();
			aboutSwiper.destroy(true, true);
			document.querySelectorAll('.swiper-slide, .swiper-wrapper').forEach((elem) => { elem.removeAttribute("style") })
		}
		return;
	} else if (breakpoint.matches === false) {
		enableSwiper();
	}
};



const enableSwiper = function () {
	aboutSwiper = new Swiper('.about__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		centeredSlides: true,
		a11y: true,
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 1000,
		loop: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},
	});
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// keep an eye on viewport size changes
breakpoint.addEventListener('change', () => {
	breakpointChecker();
}
);
// kickstart
breakpointChecker();
