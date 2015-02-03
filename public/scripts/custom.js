// Eventify, Responsive HTML5 Event Template - Version 1.1 //

// Javascripts //
$(document).ready(function () {
	
	// Top Bar //
	$('.top-bar nav').addClass('hidden');
	$('.menu-link').on('click', function (
		e) {
		e.preventDefault();
		$('.top-bar nav').toggleClass(
			'hidden');
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() <= 50) {
			$('.top-bar').removeClass('alt')
		} else {
			$('.top-bar').addClass('alt')
		}
	});
	$(window).load(function () {
		if ($(window).scrollTop() <= 30) {
			$('.top-bar').removeClass('alt')
		} else {
			$('.top-bar').addClass('alt')
		}
	});
	//
	$('#mainnav .nav a').click(function (e) {
		e.preventDefault();
		var des = $(this).attr('href');
		if ($('.navbar').hasClass(
			'in')) {
			$('.navbar .btn-navbar').trigger(
				'click');
		}
		goToSectionID(des);
	})
	
	// Local Scroll //
	$('#mainnav li').localScroll({
		duration: 1000
	});
	$('.logo').localScroll({
		duration: 1000
	});
	
	// One Page Nav //
	$('.top-bar').onePageNav({
		currentClass: 'current',
		filter: ':not(.external)'
	});
	
	// Calculate the viewport height //
	var viewHeight = $(window).height();
	$("#intro").css({
		'height': viewHeight
	});
	$(window).on('resize', function () {
		var viewHeight = $(window).height();
		$("#intro").css({
			'height': viewHeight
		});
	});
	
	// Flexslider
	// Can also be used with $(document).ready()
	$('.flexslider').flexslider({
		animation: "slide"
	});
	
	// Tabs //
	$('#schedule-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	})
	
	// Tooltip //
	$("[rel=tooltip]").tooltip();
	$("[data-rel=tooltip]").tooltip();
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#venue').parallax("50%", 0.02);
	
	// Carousel //
	$(".speakers-carousel").carousel({
		dispItems: 1,
		direction: "horizontal",
		pagination: false,
		loop: false,
		autoSlide: false,
		autoSlideInterval: 5000,
		delayAutoSlide: 2000,
		effect: "slide",
		animSpeed: "slow"
	});
	
	// Toggle //
	$('.toggle-item-title').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass(
			'ui-state-active');
	});
	
	// Countdown //
	$('#countdown_timer').countdown({
		// new Date(year, mth - 1 (april = 4 - 1 = 3), day, hr, min, sec) - date/time to count down to 
		// or numeric for seconds offset, or string for unit offset(s): 
		until: new Date(2015, 8, 17), 
		timezone: 1,
		layout: 
			'<ul id="counter_first">' +
			'{d<}<li class="days"><em>{dn}</em> Days</li>{d>}' +
			'{h<}<li class="hours"><em>{hn}</em> Hours</li>{h>}' +
			'</ul><ul id="counter_second">' + 
			'{m<}<li class="minutes"><em>{mn}</em> Minutes</li>{m>}' +
			'{s<}<li class="seconds"><em>{sn}</em> Seconds</li>{s>}' +
			'</ul>',
		onTick: function() {
			countdownAnimation();		
		}
	});

	countdownArcs();

	function countdownArcs() { 

		$("#circular_countdown_days")
			.drawArc({
				layer: true,
				name: "days",
				strokeStyle: "rgba(0,0,0,0);",
				strokeWidth: 10,
				x: 0, //71
				y: 0,  //100
				radius: 63,
				start: 0,
				end:10
			});
		$("circular_countdown_hours")	
		.drawArc({
				layer: true,
				name: "hours",
				strokeStyle: "rgba(101,127,129,0.2)",
				strokeWidth: 10,
				x: 257, 
				y: 100,
				radius: 63,
				start: 0,
				end:10
			});
		$("circular_countdown_minutes")	
			.drawArc({
				layer: true,
				name: "minutes",
				strokeStyle: "rgba(255,255,0,0.3)",
				strokeWidth: 10,
				x: 437, 
				y: 100,
				radius: 63,
				start: 0,
				end:10
			});
		$("circular_countdown_seconds")		
			.drawArc({
				layer: true,
				name: "seconds",
				strokeStyle: "rgba(255,0,255,0.3)",
				strokeWidth: 10,
				x: 617, 
				y: 100,
				radius: 63,
				start: 0,
				end:10
			})
					
	}

	function countdownAnimation() {
		$("canvas")
		.animateLayer("days", {
			end:$('#countdown_timer ul li.days em').text() * 0.9863
		}, "fast", "swing")
		.animateLayer("hours", {
			end:$('#countdown_timer ul li.hours em').text() * 15
		}, "fast", "swing")
		.animateLayer("minutes", {
			end:$('#countdown_timer ul li.minutes em').text() * 6
		}, "fast", "swing")
		.animateLayer("seconds", {
			end:$('#countdown_timer ul li.seconds em').text() * 6
		}, "fast", "swing")
	}

	// Functions if countdown timer runs out:
	function liftOff() {
		$('.hasCountdown').css({
			display: 'none'
		});
		$('#countdown_timer').addClass('hidden');
		$('#register-button').addClass('hidden');
		$('.register-title').addClass('hidden');
		$('.register-box').append('<h2>We are at capacity and can no longer accept registrations.</h2>');
		$('.register-box').append('<button class="btn btn-large btn-primary disabled" disabled="true" id="register-button">Sold Out</button>');
	}
	
	// Twitter Feed //
	$('.tweet').twittie({
		dateFormat: '%B %d, %Y',
		template: '<div class="date">{{date}}</div> {{tweet}}',
		count: 3, // define the number of tweets to be displayed, if it's one, read the lines below
		hideReplies: true
	});
	// if you want to display only one tweet, please remove the following lines:
	// if so, don't forget you need to change style.css line 1036 display property to display: block;
	setInterval(function () {
		var item = $('.tweet ul').find('li:first');
		item.animate({
			'opacity': '0'
		}, 1000, function () {
			$(this).detach().appendTo('.tweet ul').removeAttr('style');
		});
	}, 12000);
	
	
	// Google Map //
	$('#map_canvas').gmap({
		'center': new google.maps.LatLng(40.77288, -73.98299), // Change this to your desired latitude and longitude
		'zoom': 17,
		'mapTypeControl': false,
		'navigationControl': false,
		'streetViewControl': false,
		'styles': [{
			stylers: [{
				gamma: 0.60
			}, {
				hue: "#5DBEB2"
			}, {
				invert_lightness: false
			}, {
				lightness: 2
			}, {
				saturation: -20
			}, {
				visibility: "on"
			}]
		}]
	});
	var image = {
		url: 'images/marker.png', // Define the map marker file here
		// This marker is 51 pixels wide by 63 pixels tall.
		size: new google.maps.Size(51, 63),
		// The origin for this image is 0,0.
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at 26,63.
		anchor: new google.maps.Point(26, 63)
	};
	$('#map_canvas').gmap().bind('init', function () {
		$('#map_canvas').gmap('addMarker', {
			'id': 'marker-1',
			'position': '40.77288,-73.98299',
			'bounds': false,
			'icon': image
		}).click(function () {
			$('#map_canvas').gmap('openInfoWindow', {
				'content': '<h4>Eventify</h4><p><strong>Downtown Conference Center</strong><br>Columbus Ave. New York, NY 10019 </p>'
			}, this);
		});
	});
	
	// end		
})