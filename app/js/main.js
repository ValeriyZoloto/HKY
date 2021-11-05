$(function () {
	//mob-menu
	$(".burger").on("click", function () {
		$(".menu__header").addClass("menu__header--active");
	});

	$(".menu__header-close").on("click", function () {
		$(".menu__header").removeClass("menu__header--active");
	});

	$(".burger, .menu__item a").on("click", function () {
		$(".burger").toggleClass("burger--active");
	});

	//about-slider
	$(".about__slider").slick({
		centerMode: true,
		dots: true,
		// centerPadding: "60px",
		// arrows: false,
		centerMode: true,
		variableWidth: true,
		slidesToShow: 3,
		prevArrow:
			'<button type="button" class="slick-prev"><span class="sr-only">Стрелка слайдера влево</span><svg> <use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
		nextArrow:
			' <button type="button" class="slick-next"><span class="sr-only">Стрелка слайдера вправо</span><svg> <use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
	});
});
