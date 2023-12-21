/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

if (typeof Navigation === 'undefined') {
  console.error('Module Navigation is not available');
}

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia( '(max-width:48em)' );
// keep track of swiper instances to destroy later
let aboutSwiper; 

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const breakpointChecker = function() {
	// if larger viewport and multi-row layout needed
	if (breakpoint.matches === true) {
		 // clean up old instances and inline styles when available
		 if (aboutSwiper !== undefined) {
				aboutSwiper.destroy(true, true);
				aboutSwiper = undefined;
				console.log(aboutSwiper + ' после разрушения')
		 }
		 // or/and do nothing
		 return;
	// else if a small viewport and single column layout needed
	} else if (breakpoint.matches === false) {
		 // fire small viewport version of swiper
		 enableSwiper();
	}
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const enableSwiper = function() {
  aboutSwiper = new Swiper('.about__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],

		slidesPerGroupSkip: 0, // установите значение по умолчанию
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
	console.log(aboutSwiper + ' после создания')
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();
