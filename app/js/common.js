$(function() {

	// Custom JS


    // particlesJS('particles-js',
    //
    //     {
    //         "particles": {
    //             "number": {
    //                 "value": 246,
    //                 "density": {
    //                     "enable": true,
    //                     "value_area": 868.0624057955
    //                 }
    //             },
    //             "color": {
    //                 "value": "#d9ca6e"
    //             },
    //             "shape": {
    //                 "type": "circle",
    //                 "stroke": {
    //                     "width": 0,
    //                     "color": "#000000"
    //                 },
    //                 "polygon": {
    //                     "nb_sides": 5
    //                 },
    //                 "image": {
    //                     "src": "img/github.svg",
    //                     "width": 100,
    //                     "height": 100
    //                 }
    //             },
    //             "opacity": {
    //                 "value": 0.5,
    //                 "random": true,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 1,
    //                     "opacity_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "size": {
    //                 "value": 8.017060304327615,
    //                 "random": false,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 40,
    //                     "size_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "line_linked": {
    //                 "enable": true,
    //                 "distance": 160.3412060865523,
    //                 "color": "#f2e69a",
    //                 "opacity": 0.4,
    //                 "width": 1
    //             },
    //             "move": {
    //                 "enable": true,
    //                 "speed": 6,
    //                 "direction": "none",
    //                 "random": false,
    //                 "straight": false,
    //                 "out_mode": "out",
    //                 "bounce": false,
    //                 "attract": {
    //                     "enable": false,
    //                     "rotateX": 600,
    //                     "rotateY": 1200
    //                 }
    //             }
    //         },
    //         "interactivity": {
    //             "detect_on": "canvas",
    //             "events": {
    //                 "onhover": {
    //                     "enable": true,
    //                     "mode": "repulse"
    //                 },
    //                 "onclick": {
    //                     "enable": true,
    //                     "mode": "push"
    //                 },
    //                 "resize": true
    //             },
    //             "modes": {
    //                 "grab": {
    //                     "distance": 400,
    //                     "line_linked": {
    //                         "opacity": 1
    //                     }
    //                 },
    //                 "bubble": {
    //                     "distance": 400,
    //                     "size": 40,
    //                     "duration": 2,
    //                     "opacity": 8,
    //                     "speed": 3
    //                 },
    //                 "repulse": {
    //                     "distance": 200,
    //                     "duration": 0.4
    //                 },
    //                 "push": {
    //                     "particles_nb": 4
    //                 },
    //                 "remove": {
    //                     "particles_nb": 2
    //                 }
    //             }
    //         },
    //         "retina_detect": true
    //     }
    //
    // );



        //        for footer accordion
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
        // init for wow plugin
        new WOW().init();
        // AOS.init();
        $('.carousel').carousel();

    });
//add dots class to element
//     $('.swiper__list').addClass('dots__list');
//     $('.steps__inner').addClass('dots__list');

// init for header lang toggle
    $(document).ready(function(){
        $(".header__lang").click(function(){
            $(".menuLanguage__tooltip").toggle();
        });
// init for swiper slider
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            // centeredSlides: true,
            centeredSlides: !0,
            loop: true,
            speed: 1e3,
            roundLengths: !0,
            grabCursor: !0,
            watchSlidesProgress: !0,
            slidesPerView: 3,
            spaceBetween: 60,
            autoplay: true,
            breakpoints: {
                991: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1
                },
                520: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 1
                },
                320: {
                    slidesPerView: 1
                }
            }
        });



        $(document).ready(function (event) {

            // Init ScrollMagic
            var ctrl = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave'
                }
            });

                var tlIndexSect1 = new TimelineMax();
                new ScrollMagic.Scene({
                    triggerElement: "#trigger1",
                    duration: 2000
                })
                    .setPin("#platform")
                    // .loglevel(3)
                    .triggerHook(0.1)
                    // .addIndicators()
                    .addTo(ctrl);



                    var scene2 = new ScrollMagic.Scene({
                        triggerElement: "#trigger1",
                        duration: 2000
                    })


                        .setTween(tlIndexSect1.to('.line-roadmap .line', 50, {
                            opacity: 1,
                            width: 100 + '%',
                            ease: Linear.easeNone
                        }, 1))
                        .setTween(tlIndexSect1.to('.content-road-double.examp-1', 5.5, {
                            opacity: 1,
                            visibility: 'visible',
                            ease: Linear.easeNone
                        }, 1.5))
                        .setTween(tlIndexSect1.to('.content-road.examp-1', 5.5, {
                            opacity: 0,
                            x: -1000,
                            ease: Linear.easeNone
                        }, 14))

                        .setTween(tlIndexSect1.to('.content-road-double.examp-2', 5.5, {
                            opacity: 1,
                            visibility: 'visible',
                            ease: Linear.easeNone
                        }, 15))
                        .setTween(tlIndexSect1.to('.content-road.examp-2', 5.5, {
                            opacity: 0,
                            x: -1000,
                            ease: Linear.easeNone
                        }, 25))

                        .setTween(tlIndexSect1.to('.content-road-double.examp-3', 5.5, {
                            opacity: 1,
                            visibility: 'visible',
                            ease: Linear.easeNone
                        }, 26))
                        .setTween(tlIndexSect1.to('.content-road.examp-3', 5.5, {
                            opacity: 0,
                            x: -1000,
                            ease: Linear.easeNone
                        }, 36))
                        .triggerHook(0.1)
                        .addTo(ctrl);

        });


        var docWidth = document.documentElement.offsetWidth;

        [].forEach.call(
            document.querySelectorAll('*'),
            function(el) {
                if (el.offsetWidth > docWidth) {
                    console.log(el);
                }
            }
        );

function slider() {
	var slider = $(".main-section").find('.slider');
	var dots = $(".main-section").find('.dots');
	var prev = $(".main-section").find('.prev');
	var next = $(".main-section").find('.next');
	if (slider.length) {
		slider.slick({
			arrows: false,
			autoplay: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 700,
			dots: true,
			appendDots: dots,
			edgeFriction: 0.5,
			fade: true,
			pauseOnFocus: false,
			autoplaySpeed: 5000,
			pauseOnHover: false
		});
		prev.click(function () {
			slider.slick('slickPrev');
		});
		next.click(function () {
			slider.slick('slickNext');
		});
	}
	var imgNext;
	slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var tl = new TimelineMax();
		var img = $(".main-section .slide .slide-right .img img");
		var container = $('.main-section .slide .slide-left .item');
		tl.to(container, 0.7, { opacity: 0, y: 100 }, 0).to(img, 0.7, { opacity: 0, x: 100 }, 0);
	});
	slider.on('afterChange', function () {
		var container = $(".slick-current").find(".item");
		var tl = new TimelineMax();
		var img = $(".main-section .slide .slide-right .img img");
		tl.staggerTo(container, 2, { opacity: 1, ease: Power4.easeOut, y: 0 }, 0.3).to(img, 3, { opacity: 1, ease: Power4.easeOut, x: 0 }, 0);
	});
}
slider();
});
























