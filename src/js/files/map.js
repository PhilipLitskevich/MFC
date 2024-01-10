initMap();

async function initMap() {
	// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer } = ymaps3;
	const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

	// Иницилиазируем карту
	const map = new YMap(
		// Передаём ссылку на HTMLElement контейнера
		document.getElementById('map'),

		// Передаём параметры инициализации карты
		{
			location: {
				// Координаты центра карты
				center: [38.333503, 45.013715],
				// Уровень масштабирования
				zoom: 16
			}

		});

	// Добавляем слой для отображения схематической карты
	map.addChild(new YMapDefaultSchemeLayer({
		theme: "dark",
		customization: [

			// Изменяем цвет воды
			{
				tags: {
					all: ['water']
				},
				elements: 'geometry',
				stylers: [
					{
						color: '#60242B',
					}
				]
			},
			// Изменяем цвет подписей воды
			{
				tags: {
					all: ['water']
				},
				elements: 'label.text.fill',
				stylers: [
					{
						color: '#1F1222',
					}
				]
			},
			{
				tags: {
					all: ['water']
				},
				elements: 'label.text.outline',
				stylers: [
					{
						color: '#6A252C'
					}
				]
			},
			//Изменяем цвет наземных объектов (трава)
			{
				tags: {
					all: ['landscape']
				},
				elements: 'geometry',
				stylers: [
					{
						color: '#6F2721',
					}
				]
			},
			{
				tags: {
					all: ['land']
				},
				elements: 'geometry',
				stylers: [
					{
						color: '#67221D',
					}
				]
			},
			{
				tags: {
					all: ['transit']
				},
				elements: 'geometry',
				stylers: [
					{
						color: '#6F222B',
					}
				]
			},
			//Изменяем цвет структур (сооружения, дома)
			{
				tags: {
					all: ['structure']
				},
				elements: 'geometry',
				stylers: [
					{
						color: '#762428',
					}
				]
			},
			//Изменяем цвет структур (сооружения, дома)
			{
				tags: {
					all: ['road']
				},
				elements: 'geometry',
				stylers: [
					{
						color: '#83282C',
					}
				]
			},
			{
				tags: {
					all: ['road']
				},
				elements: 'geometry.fill',
				stylers: [
					{
						color: '#83282C',
					}
				]
			},
			{
				tags: {
					all: ['road']
				},
				elements: 'geometry.outline',
				stylers: [
					{
						color: '#702326',
					}
				]
			},
			{
				tags: {
					all: ['admin']
				},
				elements: 'geometry.fill',
				stylers: [
					{
						color: '#83282C',
					}
				]
			},
			{
				tags: {
					all: ['admin']
				},
				elements: 'geometry.outline',
				stylers: [
					{
						color: '#6E2225',
					}
				]
			},

			// Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
			{
				tags: {
					any: ['poi', 'transit_location']
				},
				elements: 'label.text.fill',
				stylers: [
					{
						color: '#241727'
					}
				]
			},
			{
				tags: {
					any: ['poi', 'transit_location']
				},
				elements: 'label.text.outline',
				stylers: [
					{
						color: '#84292D'
					}
				]
			},
			{
				tags: {
					any: ['shopping']
				},
				elements: 'label.icon',
				stylers: [
					{
						color: '#321B2A',
					}
				]
			},
			{
				tags: {
					any: ['food_and_drink']
				},
				elements: 'label.icon',
				stylers: [
					{
						color: '#851A11'
					}
				]
			},
			{
				tags: {
					any: ['admin', 'road']
				},
				elements: 'label.text.fill',
				stylers: [
					{
						color: '#200A0B'
					}
				]
			},
			{
				tags: {
					any: ['admin', 'road']
				},
				elements: 'label.text.outline',
				stylers: [
					{
						color: '#762428'
					}
				]
			}


		]
	}));

	const defaultMarker = new YMapDefaultMarker({
		coordinates: [38.333503, 45.013715],
		color: '#AA464B'
	})


	map.addChild(new ymaps3.YMapDefaultFeaturesLayer({ zIndex: 1800 }))
	.addChild(defaultMarker)
		
}

