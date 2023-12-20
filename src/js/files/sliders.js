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
				aboutSwiper = undefined; // обнуляем экземпляр Swiper
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
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();


// Инициализация слайдеров
// function initSliders() {
// 	// Перечень слайдеров
// 	// Проверяем, есть ли слайдер на стронице
// 	if (document.querySelector('.about__slider')) { // Указываем скласс нужного слайдера
// 		// Создаем слайдер
// 		aboutSwiper = new Swiper('.about__slider', { // Указываем скласс нужного слайдера
// 			// Подключаем модули слайдера
// 			// для конкретного случая
// 			modules: [Navigation],

// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 			speed: 1000,
// 			loop: true,
	
// 			// Кнопки "влево/вправо"
// 			navigation: {
// 				prevEl: '.swiper-button-prev',
// 				nextEl: '.swiper-button-next',
// 			},
// 		});
// 	}
// }

// function destroySwiper() {
//   if (aboutSwiper !== undefined && aboutSwiper !== null) {
//     aboutSwiper.destroy(true, true);
//     // aboutSwiper.disable();
// 		console.log('сработало')
//     // aboutSwiper = undefined;
//   }
// }

// function checkBreakpoint() {
//   // Получите текущую ширину экрана
//   let windowWidth = window.innerWidth;

//   // Определите брейкпоинт, при котором нужно разобрать слайдер
//   let breakpoint = 768;

//   // Проверьте, находится ли ширина экрана ниже брейкпоинта
//   if (windowWidth < breakpoint) {
//     // Разобрать слайдер, если он уже инициализирован
//     destroySwiper();
//   } else {
//     // Инициализировать слайдер, если он не инициализирован
//     initSliders();
//   }
// }

// // Запустите функцию при загрузке страницы и изменении размера окна
// window.addEventListener('resize', checkBreakpoint);
// window.addEventListener('load', checkBreakpoint);