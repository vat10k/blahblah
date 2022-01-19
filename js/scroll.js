$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
})
$(document).ready(function () {
	$('.navbar-nav>li>a:not(.dropdown-toggle)').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});

$(document).ready((function () {
	$('#toggleMenu').click(function (e) {
		e.stopPropagation();
		$('.menu-navbar').toggleClass('opened');
		$('#toggleMenu').toggleClass('opened');
	});

	$('body,html').click(function (e) {
		$('.menu-navbar').removeClass('opened');
		$('#toggleMenu').removeClass('opened');
	});

	// $('.menu-navbar').click(function (e) {
	// 	e.stopPropagation();
	// });
}));


$(document).ready(function () {
	$('#roadmap').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		// rewind: true,
		dots: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		autoplay: false,
		// autoplaySpeed: 100,
		// autoPlay: 20000,
		// center:true,
		responsive: {

			0: {
				items: 1
			},
			600: {
				items: 3
			},
			// 1000: {
			// 	items: 
			// }
		}
	});
});

window.sr = ScrollReveal();

sr.reveal('.home-title', {
	duration: 1000,
	origin: 'bottom',
	distance: '110px',
	opacity: 0.1,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	rotate: { x: 0, y: -10, z: -1 },
});

sr.reveal('.home-subtitle', {
	duration: 2000,
	origin: 'bottom',
	distance: '50px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.aboutus-image-box', {
	duration: 2000,
	origin: 'left',
	distance: '100px',
	delay: 100,
	opacity: 0,
    // scale: 0.6
});

sr.reveal('.abt-item', {
	duration: 2000,
	origin: 'bottom',
	distance: '50px',
	delay: 200,
	opacity: 0,
    // scale: 0.6
});

// sr.reveal('.sr-bx3', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	// distance: '100px',
// 	delay: 300,
// 	opacity: 0,
//     scale: 0.6
// });

// sr.reveal('.sr-bx4', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	// distance: '100px',
// 	delay: 400,
// 	opacity: 0,
//     scale: 0.6
// });


sr.reveal('.title', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


// sr.reveal('.about-main-title', {
// 	duration: 1900,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.01,
// 	delay: 100,
// 	opacity: 0.3,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });


sr.reveal('.content', {
	duration: 1900,
	origin: 'bottom',
	distance: '40px',
	viewFactor: 0.01,
	delay: 200,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.about-btn', {
	duration: 1900,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.msn-img', {
	duration: 1900,
	viewFactor: 0.01,
	origin: 'bottom',
	distance: '70px',
	opacity: 0.1,
	delay: 100,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 90, y: 0, z: 0 },
});
sr.reveal('.benefit-list-item', {
	duration: 1900,
	viewFactor: 0.01,
	origin: 'bottom',
	distance: '70px',
	opacity: 0.1,
	delay: 100,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 90, y: 0, z: 0 },
});