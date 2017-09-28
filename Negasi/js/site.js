$(function() {"use strict";
	if ($('#owl-slider1').length) {
		$("#owl-slider1").owlCarousel({
			autoPlay : 3000, //Set AutoPlay to 3 seconds
			items : 2,
			itemsDesktop : [1199, 2],
			itemsDesktopSmall : [979, 2],
			itemsMobile : [600, 1]
		});
	}
	if ($(".slider-two").length) {
		$(".slider-two").owlCarousel({
			pagination : true,
			items : 1,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [979, 1],
			itemsTablet : [768, 1],
			itemsMobile : [600, 1]
		});
	}
	if ($("#who-we-are-slider").length) {
		$("#who-we-are-slider").owlCarousel({
			autoPlay : 3000, //Set AutoPlay to 3 seconds
			items : 3,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3],
			itemsTablet : [768, 3],
			itemsMobile : [767, 1]
		});
	}
	if ($(".who-slider").length) {

		$(".who-slider").owlCarousel({
			navigation : true,
			pagination : false,
			navigationText : false,
			items : 1,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [979, 1],
			itemsTablet : [768, 1],
			itemsMobile : [600, 1]
		});

	}
	if ($("#testimonial-slider").length) {
		$("#testimonial-slider").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			items : 1,
			itemsDesktop : [1600, 1],
			itemsDesktopSmall : [1200, 1],
			itemsTablet : [768, 1],
			itemsMobile : [320, 1]
			// "singleItem:true" is a shortcut for:
			// items : 1,
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false
		});
		
		var count = 0;
		$('.testimonial-slider-img .owl-pagination .owl-page').each(function(){
			var data_img =$(".testimonial-slider-img .owl-item .item").eq(count).attr('data-img');
			$(this).find('span').append('<img src="'+ data_img +'" class="img-circle">')
			count++
		})
		setTimeout(function() {
		count = 0
	}, 2000)
		
	}
	$(window).resize(function(){
			setTimeout(function(){
		var count = 0;
		$('.testimonial-slider-img .owl-pagination .owl-page').each(function(){
			var data_img =$(".testimonial-slider-img .owl-item .item").eq(count).attr('data-img');
			$(this).find('span').append('<img src="'+ data_img +'" class="img-circle">')
			count++
		})
		
		},200)
	})
	if ($("#blog-slider").length) {
		$("#blog-slider").owlCarousel({
			autoPlay : 3000, //Set AutoPlay to 3 seconds
			items : 2,
			itemsDesktop : [1199, 2],
			itemsDesktopSmall : [979, 2],
			itemsTablet : [768, 2],
			itemsMobile : [767, 1]
		});
	}

	if ($(".partners-slider").length) {
		$(".partners-slider").owlCarousel({
			navigation : true, // Show next and prev buttons
			autoPlay : 3000, //Set AutoPlay to 3 seconds
			items : 5,
			itemsDesktop : [1199, 5],
			itemsDesktopSmall : [1024, 3],
			itemsTablet : [768, 3],
			itemsMobile : [320, 1]
			// "singleItem:true" is a shortcut for:
			// items : 1,
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false
		});
	}

	if ($('.flexslider').length) {
		$('.flexslider').flexslider({
			animation : "slide"
		});
	}
	
	if($('.progress-bar').length){
		$('.progress-bar').appear(function() {
		$('.progress-bar').each(function() {
			var x = $(this).attr('aria-valuenow');
			$(this).css({
				"width" : x + '%'
			}, 300);
		});
	});
	}
	
	if($(window).width() < 768) {
		$('.header .navbar-nav > li > a').on('click',function(){
			$(this).next('.sub-menu').slideToggle();
		});
	}
		if($(window).width() < 768) {
		$('.header-three .one-page-scroll .pages a').on('click',function(){
			$(this).next('.sub-menu').slideToggle();
		});
	}
	


	$('.control').on('click', function() {
		$(this).remove();
		var video = '<iframe src="' + $('.left-sec img').attr('data-video') + '"></iframe>'
		$('.left-sec img').after(video);
		return false;
	});
	
	$('.control').on('click', function(){
		$(this).remove();
		$('.playerbar').remove();
		var video1 = '<iframe src="' + $('.video-blog img').attr('data-video') + '"></iframe>'
		$('.video-blog img').after(video1);
		return false;
	});
	

	$('#header .nav ,.pagination li ').find('li').on('click', function() {
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
	});

	$('.open-info').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.item').addClass('open_slide');
	})

	$('.cross').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.item').removeClass('open_slide');
	})

	$('.top-large-arrow').on('click',function() {
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
	});

	if ($('.happy-client').length) {
		var x = $(window).scrollTop();
		//alert(x)
		var y = (($(".happy-client").offset().top) - 500);
		if (x > y) {
			if ($('.client-happy').text() < 100)
				$('.client-happy').countTo({
					from : 0,
					to : 1355,
					speed : 1000,
					refreshInterval : 50
				});
			if ($('.finise-project').text() < 100)
				$('.finise-project').countTo({
					from : 0,
					to : 1355,
					speed : 1000,
					refreshInterval : 50
				});
			if ($('.fb-likes').text() < 10)
				$('.fb-likes').countTo({
					from : 0,
					to : 18,
					speed : 1000,
					refreshInterval : 4
				});
			if ($('.member-t').text() < 10)
				$('.member-t').countTo({
					from : 0,
					to : 46,
					speed : 1000,
					refreshInterval : 10
				});
		}
	}


/*===========================scroll function start here====================*/
if ($('.happy-client').length) {
	$(window).scroll(function() {
		var x = $(window).scrollTop();
		//alert(x)
		var y = (($(".happy-client").offset().top) - 500);
		if (x > y) {
			if ($('.client-happy').text() < 100)				$('.client-happy').countTo({
					from : 0,
					to : 1355,
					speed : 1000,
					refreshInterval : 50
				});
			if ($('.finise-project').text() < 100)
				$('.finise-project').countTo({
					from : 0,
					to : 1355,
					speed : 1000,
					refreshInterval : 50
				});
			if ($('.fb-likes').text() < 10)
				$('.fb-likes').countTo({
					from : 0,
					to : 18,
					speed : 1000,
					refreshInterval : 4
				});
			if ($('.member-t').text() < 10)
				$('.member-t').countTo({
					from : 0,
					to : 46,
					speed : 1000,
					refreshInterval : 10
				});
		}
	});
}

$(window).load(function(){
	$("#loading").fadeOut(500);
		// Filltering.................
if ($('#lates-work .thumb-wrap').length) {

	var $container = $('.thumb-wrap').isotope({
		itemSelector : '.main-item',
		layoutMode : 'fitRows'
	})

	$('#lates-work .nav-tabs li').on('click', function() {

		var filterValue = "." + $(this).attr('class');
		$container.isotope({
			filter : filterValue
		});
		

	});
}
});
	
});