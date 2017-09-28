/*global jQuery, window, Modernizr, document, CONFIG*/

(function ($, window, Modernizr, document, CONFIG) {

	"use strict";
	
	/* ---------------------------------------------------------------------- */
	/*	Ready																  */
	/* ---------------------------------------------------------------------- */
	
	$(function () {
		
		(function () {

            /* ---------------------------------------------------- */
            /*	SmoothScroll										*/
            /* ---------------------------------------------------- */

			(function () {

				try {
					$.browserSelector();
					var $html = $('html');
					if ( $html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10') ) {
						$.smoothScroll();
					}
				} catch(err) {}	
				
			}());


			/* ---------------------------------------------------- */
			/*	Theme Custom Plugin									*/
			/* ---------------------------------------------------- */

			 $('body').Template(CONFIG.objTemplate);
			 
			/* ---------------------------------------------------- */
			/*	Sequence Fullscreen									*/
			/* ---------------------------------------------------- */
			
			(function () {
				
				if ($('#sequence-fullscreen').length) {

					var sequence = $('#sequence-fullscreen'),
						mySequence = sequence.sequence(CONFIG.objSequenceSliderFull).data('sequence');

					mySequence.afterLoaded = function () {
						var self = this,
							$window = $(window),
							resizeInit = function () {
								self.container.height($window.outerHeight(true));
							};
						resizeInit();
						$window.on('resize', function (e) {
							resizeInit();
						});
					};
					mySequence.afterLoaded.call(mySequence);
				}
				
			}());

			/* ---------------------------------------------------- */
			/*	Sequence											*/
			/* ---------------------------------------------------- */
			
			(function () {
				
				if ($('#sequence').length) {
					$('#sequence').sequence(CONFIG.objSequenceSlider);
				}
				
			}());

			/* ---------------------------------------------------- */
			/*	LayerSlider											*/
			/* ---------------------------------------------------- */

			if ($('#layerslider').length) {
				$('#layerslider').layerSlider(CONFIG.objLayerSlider);
			}

			/* ---------------------------------------------------- */
			/*	MediaElement										*/
			/* ---------------------------------------------------- */
			
			var $player = $('audio, video');

			if ($player.length) {
				$player.mediaelementplayer({
					audioWidth: '100%',
					audioHeight: 45,
					videoWidth: '100%',
					videoHeight: '100%'
				});
			}

			/* ---------------------------------------------------- */
			/*	FitVids												*/
			/* ---------------------------------------------------- */

			$('.section, #content').fitVids();

			/* ---------------------------------------------------- */
			/*	Player Full Width									*/
			/* ---------------------------------------------------- */

			if ($('.player').length) {
				$('.player').mb_YTPlayer();
			}	
				
			/* ---------------------------------------------------- */
			/*	Magnific Popup										*/
			/* ---------------------------------------------------- */
			
			if ($('.popup-gallery').length) {

				$('.popup-gallery').magnificPopup({ 
					delegate: '.popup-link',
					type: 'image',
					removalDelay: 500, 
					tLoading: 'Loading image #%curr%...',
					callbacks: {
					  beforeOpen: function() {
						 this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						 this.st.mainClass = 'mfp-move-horizontal';
					  }
					},
					gallery: {
					  enabled: true,
					  navigateByImgClick: true,
					  preload: [0,1] 
					},
					closeOnContentClick: true,
					midClick: true
				});
				
			}

			if ($('.image-link').length) {
				$('.image-link').magnificPopup({ 
					type: 'image'
				});
			}			
				
			/* ---------------------------------------------------- */
			/*	Tabs												*/
			/* ---------------------------------------------------- */
			
			if ($('.tabs-holder').length) {

				var $tabsHolder = $('.tabs-holder');

				$tabsHolder.each(function(i, val) {

					var $tabsNav = $('.tabs-nav', val),
						tabsNavLis = $tabsNav.children('li'),
						$tabsContainer = $('.tabs-container', val),
						eventtype = Modernizr.touch ? 'touchstart' : 'click';

					$tabsNav.each(function() {
						$(this).next().children('.tab-content').first().stop(true, true).show();
						$(this).children('li').first().addClass('active').stop(true, true).show();
					});

					$tabsNav.on(eventtype, 'a', function(e) {
						var $this = $(this).parent('li'),
							$index = $this.index();
						$this.siblings().removeClass('active').end().addClass('active');
						$this.parent().next().children('.tab-content').stop(true, true).hide().eq($index).stop(true, true).fadeIn(250);
						e.preventDefault();
					});
				});
			}
				
			/*----------------------------------------------------*/
			/*	Accordion and Toggle							  */
			/*----------------------------------------------------*/
			
			if ($('.acc-box').length) {

				var $box = $('.acc-box');

				$box.each(function () {
					var $trigger = $('.acc-trigger', $(this)),
					    eventtype = Modernizr.touch ? 'touchstart' : 'click';
					$trigger.on(eventtype, function() {
						var $this = $(this);
						if ($this.data('mode') === 'toggle') {
							$this.toggleClass('active').next().stop(true, true).slideToggle(300);
						} else {
							if ($this.next().is(':hidden')) {
								$trigger.removeClass('active').next().slideUp(300);
								$this.toggleClass('active').next().slideDown(300);
							} else if ($this.hasClass('active')) {
								$this.removeClass('active').next().slideUp(300);
							}
						}
						return false;
					});
				});
			}
				
			/*----------------------------------------------------*/
			/*	Alert Boxes										  */
			/*----------------------------------------------------*/
			
			var $notifications = $('.error, .success, .info, .notice');

			if ($notifications.length) {
				$notifications.notifications({ speed: 300 });
			}

			/* ---------------------------------------------------- */
			/*	Curtain												*/
			/* ---------------------------------------------------- */

			if ($('.slide-image').length) {
				$('.slide-image').each(function () { 
					$(this).append('\
						<div class="curtain">\n\
							<div class="ch-curtain">\n\
								<div class="ch-front"></div>\n\
								<div class="ch-back"></div>\n\
							</div>\n\
						</div>'); 
				});
			}
	
			/* ---------------------------------------------------- */
			/*	Google Maps											*/
			/* ---------------------------------------------------- */

			if ($('.google_map').length || $('.google_map_expand').length) {
				
				if (!(typeof window.google === 'object' && window.google.maps)) {
					throw 'Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false'
				}

				var methods = {
					mapAddress: function () {
						$('#map_address').gMap(CONFIG.objGoogleMap.objMapAddress);			
					},
					mapExtended: function () {
						$('#map_extended').gMap(CONFIG.objGoogleMap.objMapExtended);	
					}
				}
				methods.mapAddress();
				methods.mapExtended();

				if ($('.google_map_expand').length) {

					var $google_map_toggle = $('.google_map_toggle'), 
						$google_map_close = $('.google_map_close');

					$google_map_toggle.on('click touchstart', function (e) {
						e.preventDefault();
						var $this = $(this);
						if (!$this.hasClass('expand')) {
							$this.addClass('expand');
							$google_map_close.addClass('active');
							$this.animate({
								height: '400'
							});
						}
					});

					$google_map_close.on('click touchstart', function (e) {
						e.preventDefault();
						if ($google_map_toggle.hasClass('expand')) {
							$google_map_toggle.removeClass('expand');
							$(this).removeClass('active');
							$google_map_toggle.animate({
								height: '140'
							});
						}
					});
				}		
					
			}

			/* ---------------------------------------------------- */
			/*	Contact Form										*/
			/* ---------------------------------------------------- */

			if ($('.contact-form').length) {

				var $form = $('.contact-form'),
					$captcha = $('#captcha', $form),
					$loader = '<span>Loader...</span>';
					$form.append('<div class="hide contact-form-responce" />');

				if (CONFIG.objContactForm.captcha) {
					$captcha.css('display', 'block');
				}

				$form.each(function () {
					var $this = $(this),
						$response = $('.contact-form-responce', $this).append('<p></p>');
					$this.prepend('<input type="hidden" name="emailAddress" value="' + CONFIG.objContactForm.emailAddress + '" />');

					var value = CONFIG.objContactForm.captcha ? 1 : 0;
						$this.prepend('<input type="hidden" name="captcha" value="' + value + '" />');

					$this.submit(function () {

						$response.find('p').html($loader);
						
						var data = {
							action: "contact_form_request",
							values: $this.serialize()
						};
						
						//send data to server
						$.post("php/contact-send.php", data, function (response) {
							
							$('.wrong-data', $this).removeClass("wrong-data");
							$response.find('span').remove();	
							
							response = $.parseJSON(response);
							
							if (response.is_errors) {
								
								var p = $response.find('p');
								
								p.removeClass().addClass("error");
								$.each(response.info, function (input_name, input_label) {
									$("[name=" + input_name + "]", $this).addClass("wrong-data");
									p.append('Please enter correctly "' + input_label + '"!' + '</br>');
								});
								$response.show(300);
							} else {
								$response.find('p').removeClass().addClass('success');
								if (response.info === 'success') {
									$response.find('p').append('Your email has been sent!');
									$this.find('input, textarea, select').val('').attr('checked', false);
									$response.show(300).delay(2500).hide(400);
								}
								if (response.info === 'server_fail') {
									$response.find('p').append('Server failed. Send later!');
									$response.show(300);
								}
							}

							// Scroll to bottom of the form to show respond message
							var bottomPosition = $response.offset().top - 50;

							if ($(document).scrollTop() < bottomPosition) {
								$('html, body').animate({ scrollTop : bottomPosition });
							}
						});
						return false;
					});
				});

			}

			/* ---------------------------------------------------- */
			/*	CountTo												*/
			/* ---------------------------------------------------- */

			if ($('.counter').length) {
				var counter = $('.counter');
				if (!Modernizr.touch) {
					counter.waypoint(function (direction) {
						if (direction == 'down') {
							counter.countTo();
						}
					}, { offset: '64%'});		
				} else { counter.countTo();	}
			}

			/* ---------------------------------------------------- */
			/*	Tooltip Init										*/
			/* ---------------------------------------------------- */

			if ($('.tooltip').length) {
				$('.tooltip').tooltipster(CONFIG.objTooltipster);
			}
			
			/* ---------------------------------------------------- */
			/*	Init Progress Bar									*/
			/* ---------------------------------------------------- */

			if ($('.progress-bar').length) {
				$('.progress-bar').progressBar();
			}

			/* ---------------------------------------------------- */
			/*	Logo Text Color Hover								*/
			/* ---------------------------------------------------- */

			(function () {

				function getRandom(length) {
					return Math.floor(Math.random() * length);
				}

				function randomFrom(array) {
					var at = 0,
						length = array.length,
						current,
						tmp;

					if (length) {
						while (--length && at++ < length) {
							current = getRandom(length);
							tmp = array[current];
							array[current] = array[length];
							array[length] = tmp;
						}
					}
					return array.slice(-length);
				}

				if ($('#logo > a').length) {

					// TODO: reedit array

					var arrNumbers = [1, 2, 3, 4],
						$logo = $('#logo > a');

					$logo.on('mouseenter mouseleave', function (e) {
						e.preventDefault();

						var $this = $(this),
							storageData = randomFrom(arrNumbers)[0];

						if (e.type == 'mouseenter') {
							$(this).removeClass().addClass('color-' + storageData);
						} else {
							$(this).removeClass();
						}

					});
				}

			}());

			/* ---------------------------------------------------- */
			/*	Textislide											*/
			/* ---------------------------------------------------- */

			if ($('.slogan-group').length) {
				$('.slogan-group').textislide(CONFIG.objSloganGroup);
			}

			/* ---------------------------------------------------- */
			/*	Tweets Init											*/
			/* ---------------------------------------------------- */

			(function() {
				if ($('#tweet').length) {
					twitterFetcher.fetch(CONFIG.twitterFeed);
				}
			}());
			
			/* ---------------------------------------------------- */
			/*	Placeholder											*/
			/* ---------------------------------------------------- */

			if (typeof document.createElement("input").placeholder === 'undefined') {
				$('[placeholder]').focus(function() {
					var input = $(this);
					if (input.val() === input.attr('placeholder')) {
						input.val('');
						input.removeClass('placeholder');
					}
				}).blur(function() {
					var input = $(this);
					if (input.val() === '' || input.val() === input.attr('placeholder')) {
						input.addClass('placeholder');
						input.val(input.attr('placeholder'));
					}
				}).blur().parents('form').submit(function() {
					$(this).find('[placeholder]').each(function() {
						var input = $(this);
						if (input.val() === input.attr('placeholder')) {
							input.val('');
						}
					});
				});
			}

		}());
			
	});
	
	/* ---------------------------------------------------------------------- */
	/*	Plugins																  */
	/* ---------------------------------------------------------------------- */

		/* ---------------------------------------------------- */
		/*	Template											*/
		/* ---------------------------------------------------- */
		
		function Template(el, options) {
			this.el = $(el);
			this.init(options);
		}
		
		Template.DEFAULTS = {
			animatedElem: true,
			stickyHeader: true,
			repairWidthMegaMenu: 0
		}
		
		Template.prototype = {
			init: function (options) {
				var self = this;
					this.$window = $(window);
					this.o = $.extend({}, Template.DEFAULTS, options);
					
					this.el.append('<a href="#" id="back-top" title="Back To Top"></a>');
					this.refreshElements();
					
					this.navButton = $('<a/>', {
						id: 'responsive-nav-button',
						'class': 'responsive-nav-button',
						href: '#'
					}).insertBefore(this.navMain);
					
					this.navHide = $('<a/>', {
						id: 'advanced-menu-hide',
						href: '#'
					}).insertBefore(this.navMobile);
					
					this.headerOut = this.header.children('.header-out');
					this.topBar = this.header.prev('#top-bar');
					this.headerTypeFixed = this.el.filter('[class^="header-type-fixed"]');
					
					this.touch = Modernizr.touch;
					this.support = Modernizr.cssanimations && Modernizr.csstransitions;
					this.eventtype = this.touch ? 'touchstart' : 'click';
					
				// Navigation
				this.navInit(self);
				
				// Animated Elements
				if (this.support) {
					if (this.o.animatedElem && !this.touch) {
						this.animateElements(self);
					} else {
						this.el.removeClass('animated');
					}						
				}
				
				// Search Box
				this.searchBox();
				
				// Sticky Header
				if (this.o.stickyHeader) {
					this.sticky.stickyPre.call(self, this.$window);
				}
				
				// Owl Carousel Init
				this.owlSlider.init();
				
				// Parallax Image Init
				this.parallaxInit();

				// Blog Masonry
				if (this.postArea.length && this.postArea.hasClass('masonry')) {
					this.postMasonry(self);
				}
				
				// Folio
				if (this.folio.length) {
					this.portfolioInit();
					this.hoverInit();
				}
				
				// Services
				if (this.boxes.length) {
					this.contentBoxes.call(self);	
				}

				// Fullscreen
				if (this.fullscreen.length) {
					this.fullScreen();
				}
				
				// Event Scroll
				this.$window.on('scroll.Template', function (e) {
					if (self.o.stickyHeader) {
						self.sticky.stickyInit.call(self, e.currentTarget);	
					}
					if (!self.touch) {
						self.disableHover.call(self);
					}
					self.backTop.backTopScrollHandler.call(self, e.currentTarget);
				});
				
				// Back to Top
				this.backTop.backTopClickHandler(self);
			},
			disableHover : function (e) {
				var timer, me = this;		
					clearTimeout(timer);
				if (!me.el.hasClass('disable-hover')) {
					me.el.addClass('disable-hover');
				}
				timer = setTimeout(function () {
					me.el.removeClass('disable-hover');
				}, 500);
			},
			elements: {
				'#navigation': 'navMain',
				'#mobile-advanced': 'navMobile',
				'#header' : 'header',
				'#wrapper': 'wrapper',
				'.section': 'section',
				'.header-in .search-box': 'searchForm',
				'.portfolio-items': 'folio',
				'.load-more': 'loadMore',
				'.content-boxes': 'boxes',
				'#post-area': 'postArea',
				'#back-top' : 'backTopButton',
				'#fullscreen' : 'fullscreen',
				'.full-bg-image': 'parallaxImg'
			},
			$: function (selector) {
				return $(selector);
			},
			refreshElements: function() {
				for (var key in this.elements) {
					this[this.elements[key]] = this.$(key);
				}
			},
			animateElements: function (self) {
				if ($('.elementFade').length) {
					$('.elementFade').appear({
						accX: 0,
						accY: -150,
						data: 'elementFade',
						speedAddClass: 0
					});	
				}
				
				if ($('.slideUp').length) {
					$('.slideUp').appear({
						accX: 0,
						accY: -150,
						data: 'slideUp'
					});	
				}
				
				if ($('.slideLeft').length) {
					$('.slideLeft').appear({
						accX: 0,
						accY: -150,
						data: 'slideLeft'
					});	
				}
				
				if ($('.slideRight').length) {
					$('.slideRight').appear({
						accX: 0,
						accY: -150,
						data: 'slideRight'
					});	
				}
				if ($('.slideDown').length) {
					$('.slideDown').appear({
						accX: 0,
						accY: -150,
						data: 'slideDown'
					});	
				}
				
				if ($('.opacity').length) {
					$('.opacity').appear({
						accX: 0,
						accY: 300,
						data: 'opacity'
					});	
				}
				
				if ($('.opacity2x').length) {
					$('.opacity2x').appear({
						accX: 0,
						accY: 150,
						data: 'opacity2x'
					});	
				}
				
				if ($('.slideUp2x').length) {
					$('.slideUp2x').appear({
						accX: 0,
						accY: 300,
						data: 'slideUp2x',
						speedAddClass: 200
					});	
				}
				
				if ($('.scale').length) {
					$('.scale').appear({
						accX: 0,
						accY: 150,
						data: 'scale'
					});	
				}
				
				if ($('.extraRadius').length) {
					$('.extraRadius').appear({
						accX: 0,
						accY: -150,
						data: 'extraRadius'
					});	
				}
			},
			searchBox: function () {
				if (this.searchForm.length) {
					this.searchForm.searchBox();
				}
			},
			navInit: function (self) {
				self.mainNav(self, self.$window);
				self.touchNav(self, self.$window);

				self.$window.on('resize.nav', function (e) {
					var timer = setTimeout(function () {
						clearTimeout(timer);
						self.mainNav(self, e.currentTarget);
						self.touchNav(self, e.currentTarget);
					}, 30);
				});
			},
			mainNav: function (self, target) {
				
				var noTouchWidth = $(target).width() > 992;
				
				if (noTouchWidth) {
					
					var widthNav = self.navMain.width();

					self.navMain.children('ul').children('li').each(function (idx, val) {
						var $this = $(val),
							megaMenu = $this.children('.mega-menu');

						if (!megaMenu.length) {
							$this.find('ul').parent().each(function () {
								var $el = $(this),
									$currentItem = $el.find('> a'),
									$subList = $el.find('ul:first > li');

								if ($subList.length) {
									$currentItem.on('mouseenter', function () {
										$subList.css({ visibility: 'visible', opacity: 1, top: 0 });
									});
									$el.on('mouseleave', function () {
										$subList.css({ opacity: 0, top: '15px' });
									});
								}
								$el.data('is', $el.parents('ul').length === 1 ? true : false)
									.addClass(!$el.data('is') ? 'arrowright' : '');	
							});	
						}

						if (megaMenu.length) {
							
							var megaMenu = self.navMain.find('.mega-menu'),
								list = megaMenu.children('ul').find('ul'),
								length = list.length, 
								li, size = [], Max, m, s;

							list.css({ width: Math.ceil(widthNav / length) + 1 + self.o.repairWidthMegaMenu });	

							list.each(function (idx, value) {
								li = $(value).children('li');
								size.push(li.length);
							});

							for (m = 0; m < length; m++) {
								Max = Math.max.apply(0, size);
								if (size[m] < Max) {
									for (s = 0; s < Max - size[m]; s++) {
										$(list[m]).append('<li><a class="nothing">&nbsp;</a></li>');
									}
								}		
							}	
							
							$this.addClass('is-mega-menu').each(function () {
								var $el = $(this),
									$currentItem = $el.children('a'),
									$subList = megaMenu.find(' > ul li li'),
									$span = megaMenu.find('span');

								if ($subList.length) {
									$currentItem.on('mouseenter', function () {
										$span.css({ opacity: 1 });
										$subList.css({ visibility: 'visible', opacity: 1, top: 0 });
									});
									$el.on('mouseleave', function () {
										$span.css({ opacity: 0 });
										$subList.css({ opacity: 0, top: '15px' });
									});
								}
							});			
						}
						
					});		
				} else {
					self.navMobile.find('.mega-menu')
						.children('ul')
						.find('ul')
						.attr('style', '')
						.find('li:has(.nothing)').remove();
				}
			},
			touchNav: function (self, target) {
				if (self.touch || $(target).width() < 993) {
					
					if (!self.navMobile.children('ul').length) {
						self.navMobile.append(self.navMain.html());
						self.navMobile.find('.inner-tooltip').attr('style', '');
					}
					
					self.navButton.on(self.eventtype, function (e) {
						e.preventDefault();
						var $this = $(this);
						if (!self.wrapper.is('.active')) {
							$('html, body').animate({ scrollTop: 0 }, 0, function () {
								self.wrapper.css({
									height: self.navMobile.children('ul').outerHeight(true) + 
											self.navMobile.children('.search-box').outerHeight(true)
								}).addClass('active');		
							});
						}
					});
					self.navHide.on(self.eventtype, function (e) {
						e.preventDefault();
						if (self.wrapper.is('.active')) {
							self.wrapper.css({ height: 'auto' }).removeClass('active');
						}
					});	
				} else {
					self.navMobile.children('ul').remove().next().remove();
				}
			},
			owlSlider: {
				 init: function () {
					$.each(this.owlObject, function (selector, options) {
						if ($(selector).length) {
							$(selector).owlCarousel(options);
						}
					});
				 },
				 owlObject: {
					'.image-slider'  : CONFIG.objImageSlider,
					'.clients-items' : CONFIG.objClientsItems,
					'.quotes'        : CONFIG.objQuotes,
					'.cycle-rotator' : CONFIG.objCycleRotator
				}
			},
			parallaxInit: function () {
				if (!this.touch) {
					if (this.parallaxImg.length) {
						this.parallaxImg.parallax('center', 0.4);
					}
				}	
			},
			fullScreen: function () {
				var self = this;
				return ({
					init: function () {
						var $window = $(window),
						resize = function () {
							self.fullscreen.height($window.outerHeight(true));
						};
						resize();
						$window.on('resize.Template', function (e) {
							var timer = setTimeout(function () {
								clearTimeout(timer);
								resize();
							}, 30);
						});		
					}
				}.init());
			},
			filterFolio: function (filter) {
				if (!this.touch) {
					
					var mouseOver, $itemsFilter = $('a', filter);
						$itemsFilter.not('.active').hide();

					$.fn.filterShow = function( speed, easing, callback ) { 
						this.stop(true, true).animate( { 
							marginLeft : 'show', 
							marginRight : 'show', 
							paddingLeft : 'show', 
							paddingRight : 'show', 
							width : 'show' }, speed, easing, callback ); 
					};
					$.fn.filterHide = function( speed, easing, callback ) { 
						this.stop(true, true).animate( {
							marginLeft : 'hide', 
							marginRight : 'hide', 
							paddingLeft : 'hide', 
							paddingRight : 'hide', 
							width : 'hide' }, speed, easing, callback ); 
					};

					filter.on('mouseenter mouseleave click', function (e) {
						if (e.type === 'click') { e.preventDefault(); }

						clearTimeout(mouseOver);
						if (e.type === 'mouseenter') {
							mouseOver = setTimeout( function () {
								$itemsFilter.filterShow(300);
							}, 30);	
						} else if (e.type === 'mouseleave') {
							$itemsFilter.not('.active').filterHide(200);
						}
					});			
				} else if (this.touch) {
					filter.on('click', function (e) {
						if (e.type === 'click') { e.preventDefault(); }
					});	
				}
			},
			portfolioInit: function () {
				var $filter = $('#portfolio-filter');
				if ($filter.length) {
					this.filterFolio($filter);
				}
				this.folio.filter('#portfolio-items').mixItUp(CONFIG.objMixitup);
				var $loadMore = this.loadMore;
				
				if ($loadMore.length) {
					var i = 1, self = this, $next_href = null;
					
					$loadMore.on('click', function (e) {
						e.preventDefault();
						$.get($(this).attr('href'), function (data) {
							var $new_content = $('#portfolio-items', data).wrapInner('').html();
								$next_href = $('.load-more', data).attr('href');
								$('article:last', self.folio).after($new_content);
								self.folio.filter('#portfolio-items').mixItUp('append', $new_content);
								self.hoverInit();
								$loadMore.attr('data-rel') > i ? $loadMore.attr('href', $next_href) : $loadMore.remove();
						});
						i++;
					});	
				}
			},
			hoverInit: function () {
				this.folio.children('article').slideFade({
					find: '.item-overlay'
				});		
			},
			postMasonry: function (self) {
				this.postArea.each(function () {
					var $container = $(this);
					$container.waitForImages(function() {
						$container.masonry({
							itemSelector: 'article',
							columnWidth: $container.width() / 3
						});
						$container.addClass('init');
					});

					if (self.touch) {
						$('.social-share').on('click', function () { return false; });
					}
					var items = $container.children('article'), length = items.length;
						items.each(function (idx, element) {
							$(element).css({ zIndex: length - idx });
						});
				});
			},

			contentBoxes: function () {
				var self = this, items = this.boxes.find('li'),
					empty = function (mixed_var) { return (mixed_var === ""); }

				return ({
					getColor: function (el) { return el.data('color'); },
					getState: function (el) { return el.data('color-state'); },
					getHover: function (el) { return el.data('color-hover'); },
					SetCss: function (elem, el, head, textColor, stateColor, hoverColor) {
						if (!empty(textColor)) {
							$(elem).css({ color: textColor });
						}
						if (!empty(stateColor)) {
							$(elem).css({ backgroundColor: stateColor });
						}
						if (!empty(hoverColor)) {
							el.css({ backgroundColor: hoverColor });
						}
						if (!empty(head) && !empty(textColor)) {
							head.css({ color: textColor });
						}
					},
					eventTouch: function () {
						self.boxes.on(self.eventtype, 'li', function (e) {
							e.preventDefault();
							var $this = $(this);
							if ($this.hasClass('active')) {
								$this.removeClass('active');
							} else {
								$this.siblings('li').removeClass('active').end().addClass('active');
							}
						});
					},
					init: function () {
						var thisMethod = this;
						items.each(function (idx, elem) {
							var el = $(elem).children('.hover-box'), head = el.prev(),
								attrColor = thisMethod.getColor(el),
								attrState = thisMethod.getState(el),
								attrHover = thisMethod.getHover(el);
							thisMethod.SetCss(elem, el, head, attrColor, attrState, attrHover);
						});	
						
						if (self.touch) { this.eventTouch(); }
						
					}
				}.init());
			},
			sticky: {
				stickyInit: function (win) {
					var me = this, data;
					if (me.headerOut.length) {
						data = $.data(me.headerOut, 'data');
						me.sticky.stickyAction($.data(me.headerOut, 'data'), win, me, 'out');
					} else if (me.topBar.length) {
						data = $.data(me.header, 'data');
						me.sticky.stickyAction(data, win, me, 'in');
					} else if (me.fullscreen.length && this.headerTypeFixed.length) {
						data = $.data(me.fullscreen, 'data');
						me.sticky.stickyAction(data, win, me, 'fixed');
					} else {
						data = $.data(me.header, 'data');
						me.sticky.stickyAction(data, win, me, 'in');	
					}
				},
				stickyPre: function () {
					var headerOut = this.headerOut,
						header = this.header,
						fullscreen = this.fullscreen,
						has = ($('html').is('.chrome')) ? 0 : 30;
				
					if (headerOut.length) {
						$.data(headerOut, 'data', {
							offset: headerOut.offset().top,
							height: headerOut.outerHeight(true)
						});
						this.header.find('#logo').clone().insertBefore(this.navMain);	
						this.space = $('<div/>', { 'class': 'space' }).insertBefore(headerOut);
					} else if (this.topBar.length) {
						$.data(header, 'data', {
							offset: header.offset().top + has,
							height: header.height()
						});
						this.space = $('<div/>', { 'class': 'space' }).insertBefore(header);
					} else if (fullscreen.length && this.headerTypeFixed.length) {
						$.data(fullscreen, 'data', {
							offset: this.$window.height() - header.height()
						});
					} else {
						$.data(header, 'data', {
							offset: has,
							height: header.height()
						});
						this.space = $('<div/>', { 'class': 'space' }).insertBefore(header);
					}
				},
				stickyAction: function (data, win, me, prefix) {
					var scrollTop = $(win).scrollTop();
					
					if (scrollTop > data.offset) {
						if (prefix !== 'fixed') {
							me.space.css({ height: data.height });
						}
						if (!me.header.hasClass('header-shrink-' + prefix)) {
							me.header.addClass('header-shrink-' + prefix);
						}
					} else {
						if (prefix !== 'fixed') {
							me.space.css({ height: 'auto' });
						}
						if (me.header.hasClass('header-shrink-' + prefix)) {
							me.header.removeClass('header-shrink-' + prefix);
						}
					}
					if (scrollTop > data.offset + 50) {
						if (!me.header.hasClass('logo-bluth')) {
							me.header.addClass('logo-bluth');
						}
					} else if (scrollTop < data.offset + 150) {
						if (me.header.hasClass('logo-bluth')) {
							me.header.removeClass('logo-bluth');
						}
					}			
				}
			},
			backTop: {
				backTopScrollHandler: function (win) {
					$(win).scrollTop() > 200 ? this.backTopButton.fadeIn(400) : this.backTopButton.fadeOut(400);
				},
				backTopClickHandler: function (self) {
					self.backTopButton.on('click', function (e) {
						e.preventDefault();
						$('html, body').animate({ scrollTop: 0 }, 800);
					});
				}	
			}
		};

		/* Template Plugin Definition
		 * ================================== */
		
		$.fn.Template = function (option) {
			return this.each(function () {
				var $this = $(this), data = $this.data('Template'), 
					options = typeof option == 'object' && option;
				if (!data) {
					$this.data('Template', new Template(this, options));
				}
			});
		}
	
}(jQuery, window, Modernizr, document, CONFIG));