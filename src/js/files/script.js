// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
document.querySelectorAll
document.addEventListener("watcherCallback", function (e) {
	// Полная информация от наблюдателя
	const entry = e.detail.entry;
	// Наблюдаемый объект
	const targetElement = entry.target;

	if (targetElement.classList.contains('_watcher-view')) {
		const speed = targetElement.getAttribute('data-speed');
		const counters = targetElement.querySelectorAll('._count');
		counters.forEach(counter => {

			// const target = +counter.getAttribute('data-target');




			// function to increment the counter
			function updateCount() {
				const target = +counter.getAttribute('data-target');
				const count = +counter.innerHTML;

				const inc = Math.floor((target - count) / 100);

				if (count < target && inc > 0) {
					counter.innerHTML = (count + inc);
					// repeat the function
					setTimeout(updateCount, 1);
				}
				// if the count not equal to target, then add remaining count
				else {
					counter.innerHTML = target;
				}
			}
			updateCount();
		});
	}
});


if (!isMobile.any()) {
	const image = document.querySelector('.hero__image')
	const section = document.querySelector('.section-hero')
	let timer
	let cordinates = section.getBoundingClientRect();
	let imageX = (cordinates.left + window.scrollX + cordinates.right) / 2;
	let imageY = (cordinates.top + window.scrollY + cordinates.bottom) / 2;

	const ANGLE_COMPENSATION = 40;
	const ANGLE_COMPENSATION_Y = 20;
	section.addEventListener('mousemove', (event) => {
		clearTimeout(timer)
		image.style.removeProperty('transition')
		let mouseX = event.clientX;
		let mouseY = event.clientY;

		let xOffset = imageX - mouseX;
		let yOffset = imageY - mouseY;

		let maxYRotationAngle = 20;
		let maxXRotationAngle = 26;

		let xRotationAngle = yOffset / ANGLE_COMPENSATION_Y;
		let yRotationAngle = xOffset / ANGLE_COMPENSATION;

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
	section.addEventListener('mouseleave', (event) => {
		image.style.transition = 'transform .3s ease-in-out'
		timer = setTimeout(() => {
			image.style.removeProperty('transform')
		}, 1000)
	})
}