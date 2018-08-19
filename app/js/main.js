$(function() {

	// accordion init
    $('.collapsible').collapsible();



    // nav dropdown init
    $('.dropdown-trigger').dropdown({
    	onOpenStart: function () {
    		$(this.el).addClass('open');
    		$(this.el).next().addClass('open');
    	},
    	onCloseStart: function () {
    		$(this.el).removeClass('open');
    	},
    	onCloseEnd: function () {
    		$(this.el).next().removeClass('open');
    	},
    	closeOnClick: false
    });



    // tooltip init
	(function (isActive) {
	    $(window).on('resize', function () {
		  	if ( window.matchMedia( '(max-width: 1200px)' ).matches) {
			  	$('.tooltipped').tooltip({
			  		margin: -10
			  	});
			  	isActive = true;
		  	} else {
		  		if (isActive) {
				  	$('.tooltipped').tooltip('destroy');
				  	isActive = false;
		  		}
		  	}
	  	}).trigger('resize');
	})();



	// video
	$('.about__video-play').on('click', function() {
		var video = $('.about__video')[0];
		video.play();
		video.setAttribute('controls', true);

		this.style.display = 'none';
	});

	$('.about__video').on('play', function() {
		$(this).closest('.about__video-wr').addClass('active');
	});

	$('.review__item-video-play').on('click', function() {
		
		if ( $(this).next('.review__item-video').length ) {
		
			var video = $(this).next('.review__item-video');
			video.appendTo('body');
			
			setTimeout(function () {
				video[0].play()
			}, 1000);
		}	
	});

	(function () {
		$('.review-emotion__item-video-play').on('click', function() {

			if ( !($(this).next('.review-emotion__item-video').hasClass('wasPlayed') ) ) {
			
				var video = $(this).next('.review-emotion__item-video');
				videoId = video.attr('id');
				
				video.removeAttr('id').addClass('wasPlayed');

				var videoCopy = video.clone();

				videoCopy.addClass('modal')
					.attr({
						id: videoId,
						controls: true
					})
					.modal({
						opacity: .9,
						endingTop: '50%',
						onOpenEnd: function () {
							$('.btn-close-wr').show();
							$('.btn-close').addClass('animated bounceInDown');
						},
						onCloseStart: function () {
							$('.btn-close-wr').hide();
							$('.btn-close').removeClass('animated bounceInDown');
							if ( $(this.el).hasClass('open') ) {
						    	$(this.el)[0].pause();
						    }
						}
					});
					
				videoCopy.appendTo('body');

				$('.btn-close').on('click', function() {
					videoCopy.modal('close');
				}); 
				
				setTimeout(function () {
					videoCopy[0].play()
				}, 1000);
			}	
		});

	}());



	// modal submit init
	$('#modal-submit').modal({
		opacity: .9,
		endingTop: '50%',
		onOpenEnd: function () {
			$('.btn-close-wr').show();
			$('.btn-close').addClass('animated bounceInDown');
		},
		onCloseStart: function () {
			$('.btn-close-wr').hide();
			$('.btn-close').removeClass('animated bounceInDown');
		}
	});

	$('.btn-close').on('click', function() {
		$('#modal-submit').modal('close');
	}); 

	// modal video init
	$('.review__item-video').modal({
		opacity: .9,
		endingTop: '50%',
		onOpenEnd: function () {
			$('.btn-close-wr').show();
			$('.btn-close').addClass('animated bounceInDown');
		},
		onCloseStart: function () {
			$('.btn-close-wr').hide();
			$('.btn-close').removeClass('animated bounceInDown');
			if ( $(this.el).hasClass('open') ) {
		    	$(this.el)[0].pause();
		    }
		}
	});

	$('.btn-close').on('click', function() {
		$('.review__item-video').modal('close');
	}); 

	

  	// slick init
  	$('.action__nav').slick({
	  	autoplaySpeed: 5000,
	  	speed: 300,
	  	dots: true,
	  	appendDots: $('.action__nav-slick'),
	  	appendArrows: $('.action__nav-slick'),
	  	prevArrow: '<span class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	slidesToShow: 1,
	  	asNavFor: '.action__nav-for'
  	});

  	$('.action__nav-for').slick({
	  	autoplaySpeed: 5000,
	  	speed: 300,
	  	cssEase: 'step-end',
	  	arrows: false,
	  	dots: false,
	  	slidesToShow: 1,
	  	asNavFor: '.action__nav',
	  	fade: true
  	});

  	$('.team__list').slick({
	  	speed: 1000,
	  	dots: true,
	  	appendDots: $('.team__slick'),
	  	appendArrows: $('.team__slick'),
	  	prevArrow: '<span class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	slidesToShow: 1
	  	
  	});

  	$('.review__list').slick({
	  	autoplay: true,
	  	autoplaySpeed: 8000,
	  	speed: 1000,
	  	dots: true,
	  	appendDots: $('.review__slick'),
	  	appendArrows: $('.review__slick'),
	  	prevArrow: '<span class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	slidesToShow: 1,
	  	fade: true
  	});

  	$('.review__list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  		var video = $(this).find('.review__-item-video');

	    if ( video.hasClass('open') ) {
	    	$(video)[0].pause();
			$(video).modal('close');
	    }
	});

  	$('.useful__list').not('body[data-page="blog-category"] .useful__list').slick({
	  	speed: 500,	
	  	dots: true,
	  	slidesToShow: 3,
	  	infinite: false,
	  	appendDots: $('.useful__slick'),
	  	appendArrows: $('.useful__slick'),
	  	prevArrow: '<span class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
  	 	responsive: [
		    {
		        breakpoint: 993,
		        settings: {
				  	centerMode: false,
				  	slidesToShow: 2
			    }
		    },
		    {
		        breakpoint: 601,
		        settings: {
				  	slidesToShow: 1
			    }
		    }
		]
  	});

  	$('.price__repair-list').slick({
	  	speed: 500,
	  	slidesToShow: 1,
	  	prevArrow: '<span class="slick-prev">&#x2190;</span>',
	  	nextArrow: '<span class="slick-next">&#x2192;</span>',
	  	dots: false,
	  	mobileFirst: true,
  	    infinite: false,
	  	// variableWidth: true,
	  	responsive: [
		    {
		        breakpoint: 600,
		        settings: "unslick"
		    }
		]
  	});

  	$('.model__list').slick({
	  	speed: 500,
	  	dots: true,
	  	slidesToShow: 4,
  	    infinite: false,
 		appendDots: $('.model__slick'),
	  	appendArrows: $('.model__slick'),
	  	prevArrow: '<span class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	responsive: [
		    {
		        breakpoint: 1201,
		        settings: {
				  	slidesToShow: 2
			    }
		    },
		    {
		        breakpoint: 601,
		        settings: {
				  	slidesToShow: 1
			    }
		    }
		]
  	});

  	$('.review-more__list').slick({
	  	dots: true,
	  	appendDots: $('.review-more__slick'),
	  	appendArrows: $('.review-more__slick'),
	  	prevArrow: '<span class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1180.144 -9869.532 27.336 13.253"><path data-name="Path 869" d="M-1179.5-9868.766l13.287 11.169 12.747-11.169" fill="none" stroke-width="2"/></svg></span>',
	  	slidesToShow: 1,
  	});



  	// match heiight of elements

  	$(window).on('resize', function () {
	  	$('.team__item').matchHeight();
	  	$('.review__item').matchHeight();
	  	$('.useful__item').matchHeight();
  	}).trigger('resize');





  	// position of slick-dots at max-width: 600px
  	// $(window).on('resize', function () {
  		
	  // 	if ( window.matchMedia( '(max-width: 600px)' ).matches ) {
		 //  	$('.team__list .slick-dots').css( 'bottom', +( $('.team__item-img').outerHeight() ) + 20 + 'px' );
	  // 	} else {
	  // 		$('.team__list .slick-dots').css( 'bottom', '120px' );
	  // 	}

  	// }).trigger('resize');



  	// page scroll nav
  	$(function(){
	    $.scrollIt();
	});

	$(window).scroll(function() {
		  	
	  	if ( $(window).scrollTop() < $('.main-header').outerHeight() ) {
			$('.page-nav').removeClass('visible');
		} else {
			$('.page-nav').addClass('visible');
		}
	}).trigger('scroll');



	// tabs in block price
  	if ( window.matchMedia( '(max-width: 600px)' ).matches ) {
		$('.slick-slide:first-child .price__repair-item, .price__service-item:first-child').addClass('active');
  	} else {
		$('.price__repair-item:first-child, .price__service-item:first-child').addClass('active');
  	}


	$('.price__body').on('click', '.price__repair-item a', function(e) {
		e.preventDefault();

		var
			$this = $(this),
			repairItem = $this.closest('.price__repair-item'),
			allRepairItems = $('.price__repair-item'),
			neededId = $this.attr('href').slice(1),
			serviceItem = $('#' + neededId),
			allServiceItems = $('.price__service-item');

		allRepairItems.removeClass('active');
		repairItem.addClass('active');
		allServiceItems.removeClass('active');
		serviceItem.addClass('active');
	});



	// select init
	$('select').formSelect();



	// ajax for block price
	function getAjaxPrice() {
		var data_id = $('.price__form :selected').data('id');

		$(this).off('change', getAjaxPrice);
	        	
    	$('.price__body').empty();

    	$('.price__spinner').show();
        
        $.ajax({
	        url: '/ajax-for-price',
	        type: "POST",
	        data: {id: data_id},
	        success: function(res){
	        	setTimeout(function (argument) {
		        	$('.price__spinner').hide();

	        		$('.price__body').append(res).animated('fadeInUp');

	                $('.price__repair-item:first-child, .price__service-item:first-child').addClass('active');

	                $('.price__repair-list').slick({
					  	speed: 500,
					  	slidesToShow: 2,
					  	prevArrow: '<span class="slick-prev">&#x2190;</span>',
					  	nextArrow: '<span class="slick-next">&#x2192;</span>',
					  	dots: false,
					  	mobileFirst: true,
				  	    infinite: false,
					  	variableWidth: true,
					  	responsive: [
						    {
						        breakpoint: 600,
						        settings: "unslick"
						    }
						]
				  	});

					$(this).on('change', getAjaxPrice);
	        	}, 500);
	        }
        });
	}

	$('.price__form select').on('change', getAjaxPrice).trigger('change');



	$(window).on('resize', function () {

	  	if ( window.matchMedia( '(max-width: 992px)' ).matches) {
	  		$('.team-all__item-property').each(function () {
	  			
	  			var item = $(this).closest('.team-all__item'),
	  				number = item.find('.team-all__item-num'),
	  				image = item.find('.team-all__item-img');
	  			
	  			$(this).prepend(number);
	  			$(this).append(image);
	  		});
	  	} else {
	  		$('.team-all__item-property').each(function () {
	  			
	  			var container = $(this).closest('.container'),
	  				number = $(this).find('.team-all__item-num'),
	  				image = $(this).find('.team-all__item-img');
	  			
	  			container.prepend(image);
	  			container.prepend(number);
	  		});
	  	}
  	}).trigger('resize');



	// position for pointer in block popular
	$(window).on('resize', function () {
		$('.popular__item').each(function(index) {
			if ( parseInt( $(this).css('left') ) > 0 ) {
				$(this).addClass('inverted');
			} else {
				$(this).removeClass('inverted');
			}
		});
  	}).trigger('resize');


	// animation by scroll
	$('.main-header__h3, .main-header__h1').animated('fadeIn');
	$('.main-header__txt, .main-header__form').animated('fadeInUp');
	$('.main-header__btn-down').animated('bounceIn', '100%');

	$('.title__h1').animated('fadeIn');
	$('.title__txt').animated('fadeInUp');

	$('.action__nav-item-h3, .action__nav-item-note, .action__nav-item-btn').animated('fadeInUp');
	$('.action__nav-for').animated('fadeIn');
	
	$('.device__h2, .device__txt').animated('fadeIn');
	$('.device__item').animated('fadeInUp');

	$('.model__h3').animated('fadeIn');
	$('.model__list .slick-track .slick-slide').animated('fadeInUp');

	$('.price__h3, .price__form').animated('fadeIn');
	$('.price__line').animated('slideInLeft');
	$('.price__body').animated('fadeInUp');

	$('.popular__h2').animated('fadeIn');
	$('.popular__wr').animated('fadeInUp');

	$('.article__img').animated('fadeIn');
	$('.article__content').animated('fadeInUp');

	$('.guarant__item').animated('bounceIn');

	$('.about__txt').animated('fadeIn');
	$('.about__video-wr').animated('fadeInUp');

	$('.promo__h3').animated('fadeIn');
	$('.promo__item').animated('bounceIn');

	$('.team__item-num, .team__item-img').animated('fadeIn');
	$('.team__item-work, .team__item-name, .team__item-spec, .team__item-desc, .team__item-btn').animated('fadeInUp');

	$('.question__h3').animated('fadeIn');
	$('.question__item, .question__btn').animated('fadeInUp');

	$('.example__h3, .example__photo').animated('fadeIn');
	$('.example__txt').animated('fadeInUp');

	$('.useful__h3, .useful__list .slick-track .slick-slide').animated('fadeIn');

	$('.review__item-video-play, .review__item-txt, .review__item-name').animated('fadeInUp');

	$('.review-more__item-img, .review-more__item-txt, .review-more__item-name').animated('fadeInUp');

	$('.review-emotion__h3').animated('fadeIn');
	$('.review-emotion__item').animated('fadeIn');

	$('.request__h2').animated('fadeIn');
	$('.request__form').animated('fadeInUp');

	$('.request-bottom__h2').animated('fadeIn');
	$('.request-bottom__form').animated('fadeInUp');

	$('.contact__h3, .contact__txt, .contact__map').animated('fadeIn');
	$('.contact__item').animated('fadeInUp');

});



// twentytwenty init
$(window).on('load', function() {
    $(".twentytwenty-container").twentytwenty({
  		orientation: 'vertical',
  		before_label: 'До',
    	after_label: 'После'
    });

 //    $('.main-header__bg').on('load', function () {
	// 	$(this)[0].play();
	// });

		// document.querySelector('.main-header__bg').play();
});



