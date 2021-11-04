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
});
