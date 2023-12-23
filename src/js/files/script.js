// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
document.addEventListener("watcherCallback", function (e) {
	// Полная информация от наблюдателя
	const entry = e.detail.entry;
	// Наблюдаемый объект
	const targetElement = entry.target;

	if (targetElement.classList.contains('_watcher-view')) {

		// Счетчик
		// const time = targetElement.getAttribute('data-time');
		const time = 2000;
		const counters = targetElement.querySelectorAll('._count');
		counters.forEach(counter => {
			const target = +counter.getAttribute('data-target');
			let speed = Math.floor(time / target);
			function updateCount() {
				const count = +counter.innerHTML;

				if (count < target) {
					if ((target - count) > 10000) {
						counter.innerHTML = (count + 301);
					} else if ((target - count) > 3000) {
						counter.innerHTML = (count + 101);
					} else if ((target - count) > 501) {
						counter.innerHTML = (count + 21);
					} else if ((target - count) > 99) {
						counter.innerHTML = (count + 7);
					} else if ((target - count) > 55) {
						counter.innerHTML = (count + 3);
					} else {
						counter.innerHTML = (count + 1);
					}
					setTimeout(updateCount, speed);
				}
				else {
					counter.innerHTML = target;
				}
			}
			updateCount();
		});
	}
});

// 3D Анимация картинки

if (!isMobile.any()) {
	const image = document.querySelector('.hero__image')
	const section = document.querySelector('.section-hero')
	let timer
	let cordinates = section.getBoundingClientRect();
	let imageX = (cordinates.left + window.scrollX + cordinates.right) / 2;
	let imageY = (cordinates.top + window.scrollY + cordinates.bottom) / 2;

	const ANGLE_COMPENSATION = 38; // При уменьшении числа увеличивается чувствительность
	const ANGLE_COMPENSATION_Y = 20;
	section.addEventListener('mousemove', (event) => {
		clearTimeout(timer)
		image.style.removeProperty('transition')
		let mouseX = event.clientX;
		let mouseY = event.clientY;

		let xOffset = imageX - mouseX;
		let yOffset = imageY - mouseY;

		let maxYRotationAngle = 20; //Ограничивает максимальный угол наклона
		let maxXRotationAngle = 26;

		let xRotationAngle = yOffset / ANGLE_COMPENSATION_Y; //умножить на (-1) для инверсии
		let yRotationAngle = xOffset / ANGLE_COMPENSATION * (-1);

		if (xRotationAngle < 0 && Math.abs(xRotationAngle) > maxXRotationAngle) {
			xRotationAngle = - maxXRotationAngle;
		} else if (xRotationAngle > 0 && Math.abs(xRotationAngle) > maxXRotationAngle) {
			xRotationAngle = maxXRotationAngle;
		}

		if (yRotationAngle < 0 && Math.abs(yRotationAngle) > maxYRotationAngle) {
			yRotationAngle = - maxYRotationAngle;
		} else if (yRotationAngle > 0 && Math.abs(yRotationAngle) > maxYRotationAngle) {
			yRotationAngle = maxYRotationAngle;
		}
		image.style.transform = "rotateX(" + xRotationAngle + "deg) rotateY(" + yRotationAngle + "deg) "
	})
	// Возвращение в исходную позицию
	section.addEventListener('mouseleave', (event) => {
		image.style.transition = 'transform .3s ease-in-out'
		timer = setTimeout(() => {
			image.style.removeProperty('transform')
		}, 1000)
	})
}

document.addEventListener("formSent", function (e) {
	// Форма
	const currentForm= e.detail.form;
	document.querySelector('html').classList.remove('lock')
});
