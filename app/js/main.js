$(function () {
	//Ввод имени в инпут с большой буквы
	document
		.querySelector(".request__form-input--name")
		.addEventListener("keypress", (e) => {
			e.target.value =
				e.target.value[0].toUpperCase() + e.target.value.slice(1);
		});

	//авто-закрытие мобильного меню
	$(".burger, .menu__item a").on("click", function () {
		if (window.innerWidth <= 1440) {
			$(".menu__header").toggleClass("menu__header--active"),
				$(".burger").toggleClass("burger--active");
		} else {
			//не выполнять
		}
	});

	$(".menu__header-close").on("click", function () {
		$(".menu__header").removeClass("menu__header--active");
		$(".burger").removeClass("burger--active");
	});

	//about-slider
	$(".about__slider").slick({
		centerMode: true,
		dots: true,
		centerMode: true,
		variableWidth: true,
		slidesToShow: 3,
		prevArrow:
			'<button type="button" class="slick-prev"><span class="sr-only">Стрелка слайдера влево</span><svg> <use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
		nextArrow:
			' <button type="button" class="slick-next"><span class="sr-only">Стрелка слайдера вправо</span><svg> <use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 700,
				settings: {
					arrows: false,
				},
			},
		],
	});

	//completed__slider
	$(".completed__slider").slick({
		slidesToShow: 1,
		prevArrow:
			'<button type="button" class="slick-prev"><span class="sr-only">Стрелка слайдера влево</span><svg> <use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
		nextArrow:
			' <button type="button" class="slick-next"><span class="sr-only">Стрелка слайдера вправо</span><svg> <use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
	});

	$(".scroll").click(function (event) {
		console.log(11111);
		event.preventDefault();
		$("body").animate({ scrollTop: 0 }, 1500);
	});

	$(".menu a, header a").on("click", function (e) {
		e.preventDefault();
		const id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({ scrollTop: top }, 1500);
	});
});
