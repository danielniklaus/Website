/* ---------------------------------------------------------------------- */
/*	Template Settings													  */
/* ---------------------------------------------------------------------- */

	var CONFIG = (function ($, window) {
		
		return {
			/* ---------------------------------------------------- */
			/*	Tweets												*/
			/* ---------------------------------------------------- */

			twitterFeed: {
				"id": '351293746240958465',                 // Twitter Widget ID
				"domId": 'tweet',
				"maxTweets": 1,								// Number of tweets to display
				"enableLinks": true,
				"showUser": false,
				"showTime": true,
				"showRetweet": false,
				"showInteraction": false
			},

			/* ---------------------------------------------------- */
			/*	Email Settings										*/
			/* ---------------------------------------------------- */

			objContactForm: {
				captcha: false,						 // Boolean:  (true/false)
				emailAddress: 'lefan@webtemplatemasters.com'
			},

			/* ---------------------------------------------------- */
			/*	Main Settings										*/
			/* ---------------------------------------------------- */

			objTemplate: {
				animatedElem: true, 				// Boolean:  (true/false)
				stickyHeader: true, 				// Boolean:  (true/false)
				repairWidthMegaMenu: 30
			},

			/* ---------------------------------------------------- */
			/*	Layer Slider										*/
			/* ---------------------------------------------------- */

			objLayerSlider: {
				responsive : true,					// Boolean:  (true/false)
				responsiveUnder: 1130,
				layersContainer: 1130,
				autoStart : true,					// Boolean:  If true, slideshow will automatically start after loading the page. (true/false)
				pauseOnHover : true,				// Boolean: If ture, SlideShow will pause when you move the mouse pointer over the LayerSlider container. (true/false)
				firstLayer : 1,						// Integer:  LayerSlider will begin with this layer. (Positive Integer)
				animateFirstLayer : true,			// Boolean:  (true/false)
				randomSlideshow : false,			// Boolean:  (true/false)
				twoWaySlideshow : true,				// Boolean: If true, slideshow will go backwards if you click the prev button. (true/false)
				loops : 0,
				forceLoopNum : true,				// Boolean:  (true/false)
				autoPlayVideos : false,				// Boolean:  (true/false)
				autoPauseSlideshow : 'auto',
				keybNav : true,						 // Boolean: Keyboard navigation. You can navigate with the left and right arrow keys. (true/false)
				touchNav : true,					 // Boolean:  (true/false)
				skin : 'engorgio',						 // String: You can change the skin of the Slider. (name_of_the_skin) 
				skinsPath : 'js/layerslider/skins/', // String: You can change the default path of the skins folder. Note, that you must use the slash at the end of the path. (path_of_the_skins_folder/)
				showBarTimer : false,				 // Boolean:  (true/false)
				showCircleTimer : false,			 // Boolean:  (true/false)
				globalBGColor : '#fff',				// CSS Color Methods. Background color of LayerSlider. You can use all CSS methods, like hexa colors, rgb(r,g,b) method, color names, etc. Note, that background sublayers are covering the background. 
				navPrevNext : true,					 // Boolean: If false, Prev and Next buttons will be invisible. (true/false)
				navStartStop : true,				 // Boolean: If false, Start and Stop buttons will be invisible. (true/false)
				navButtons : true,					 // Boolean: If false, slide buttons will be invisible. (true/false)
				hoverPrevNext : true,				 // Boolean:  (true/false)
				hoverBottomNav : false,				 // Boolean:  (true/false)
				thumbnailNavigation : 'disabled'
			},
			
			/* ---------------------------------------------------- */
			/*	Portfolio Mixitup									*/
			/* ---------------------------------------------------- */
			
			objMixitup: {
				animation: {
					enable: true,
					duration: 400,
					effects: 'fade translateX(10%) scale(0.55) translateY(10%) stagger(96ms)',
					easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)'
				},
				controls: {
					enable: true,
					live: false,
					toggleFilterButtons: false,
					toggleLogic: 'or',
					activeClass: 'active'
				},
				layout: {
					display: 'inline-block',
					containerClass: '',
					containerClassFail: 'fail'
				},
				load: {
					filter: 'all'
				},
				selectors: {
					target: '.mix',
					filter: '.filter'
				}
			},
			
			/* ---------------------------------------------------- */
			/*	Google Map											*/
			/* ---------------------------------------------------- */

			objGoogleMap: {
				objMapAddress: {
					 address: "Quito, Ecuador",
					 zoom: 14,
					 markers:[
						 {
							 address: "Guayaquil, Ecuador",
							 html: "My Hometown",
							 popup: true
						 }
					 ]
				},
				objMapExtended: {
					controls: false,
					scrollwheel: true,
					markers: [
						{
							latitude: 47.670553,
							longitude: 9.588479,
							icon: {
								image: "images/map/gmap_pin.png",
								iconsize: [44, 54],
								iconanchor: [12,46]
							}
						}
					],
					icon: {
						image: "images/map/gmap_pin.png", 
						iconsize: [44, 54],
						iconanchor: [12, 46]
					},
					latitude: 47.67169,
					longitude: 9.603413,
					zoom: 14
				}
				
			},
			
			/* ---------------------------------------------------- */
			/*	Image Slider										*/
			/* ---------------------------------------------------- */

			objImageSlider: {
				autoPlay : 5000,
				stopOnHover : true,					
				navigation: true,
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem: true,
				theme : "owl-theme",
				transitionStyle : "scaleToFade"
			},

			/* ---------------------------------------------------- */
			/*	Clients Items										*/
			/* ---------------------------------------------------- */

			objClientsItems: {
				autoPlay : 5000,
				stopOnHover : true,					
				navigation: false,
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem: true,
				theme : "owl-theme",
				transitionStyle : "scaleToFade"
			},

			/* ---------------------------------------------------- */
			/*	Quotes												*/
			/* ---------------------------------------------------- */

			objQuotes: {
				autoPlay : 5000,
				stopOnHover : true,
				navigation: false,
				slideSpeed: 300,
				singleItem: true,
				transitionStyle : "backSlide"
			},

			/* ---------------------------------------------------- */
			/*	Cycle Rotator										*/
			/* ---------------------------------------------------- */

			objCycleRotator: {
				autoPlay : 3000,
				stopOnHover : true,
				navigation: false,
				pagination: true,
				slideSpeed: 300,
				singleItem: true,
				transitionStyle : "verticalSlide"
			},

			/* ---------------------------------------------------- */
			/*	Sequence Slider Fullscreen							*/
			/* ---------------------------------------------------- */

			objSequenceSliderFull: {
				nextButton: true,
				prevButton: true,
				pagination: true,
				animateStartingFrameIn: false,
				autoPlay: true,
				autoPlayDelay: 5000,
				preloader: true,
				preloadTheseFrames: [],
				fallback: {
					theme: "slide",
					speed: 500
				}
			},

			/* ---------------------------------------------------- */
			/*	Sequence Slider										*/
			/* ---------------------------------------------------- */

			objSequenceSlider: {
				nextButton: false,
				prevButton: false,
				pagination: true,
				animateStartingFrameIn: true,
				autoPlay: true,
				autoPlayDelay: 5000,
				preloader: true,
				preloadTheseFrames: []
			},

			/* ---------------------------------------------------- */
			/*	Textislide											*/
			/* ---------------------------------------------------- */

			objSloganGroup: {
				pagination: true,
				autoStart: true,
				autoPlay: 5000,
				autoHeight: true,
				headlinesSettings: {
					0: {
						from: { delay: 400 },
						to: { sync: true }
					},
					1: {
						from: { delay: 1500, sync: true },
						to: { sync: true }
					}
				}
			},

			/* ---------------------------------------------------- */
			/*	Tooltipster											*/
			/* ---------------------------------------------------- */

			objTooltipster : {
				animation: 'grow'	// Choose fade, grow, swing, slide, fall
			}

		}

	}(jQuery, window));
	
/* ---------------------------------------------------------------------- */
/*	end Template Settings												  */
/* ---------------------------------------------------------------------- */			
		