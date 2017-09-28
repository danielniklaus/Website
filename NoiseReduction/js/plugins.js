/*
Plugin Name: 	BrowserSelector
Written by: 	Crivos - (http://www.crivos.com)
Version: 		0.1
*/

(function($, navigator) {
	$.extend({

		browserSelector: function() {

			var u = navigator.userAgent,
				ua = u.toLowerCase(),
				is = function (t) {
					return ua.indexOf(t) > -1;
				},
				g = 'gecko',
				w = 'webkit',
				s = 'safari',
				o = 'opera',
				h = document.documentElement,
				b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

			c = b.join(' ');
			h.className += ' ' + c;

		}

	});
})(jQuery, navigator);

/**********************************************************************************/

/*
Plugin Name: 	smoothScroll for jQuery.
Written by: 	Crivos - (http://www.crivos.com)
Version: 		0.1

Based on:

	SmoothScroll v1.2.1
	Licensed under the terms of the MIT license.

	People involved
	 - Balazs Galambosi (maintainer)
	 - Patrick Brunner  (original idea)
	 - Michael Herf     (Pulse Algorithm)

*/
(function($) {
	$.extend({

		smoothScroll: function() {

			// Scroll Variables (tweakable)
			var defaultOptions = {

				// Scrolling Core
				frameRate        : 150, // [Hz]
				animationTime    : 700, // [px]
				stepSize         : 80, // [px]

				// Pulse (less tweakable)
				// ratio of "tail" to "acceleration"
				pulseAlgorithm   : true,
				pulseScale       : 8,
				pulseNormalize   : 1,

				// Acceleration
				accelerationDelta : 20,  // 20
				accelerationMax   : 1,   // 1

				// Keyboard Settings
				keyboardSupport   : true,  // option
				arrowScroll       : 50,     // [px]

				// Other
				touchpadSupport   : true,
				fixedBackground   : true,
				excluded          : ""
			};

			var options = defaultOptions;

			// Other Variables
			var isExcluded = false;
			var isFrame = false;
			var direction = { x: 0, y: 0 };
			var initDone  = false;
			var root = document.documentElement;
			var activeElement;
			var observer;
			var deltaBuffer = [ 120, 120, 120 ];

			var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
						pageup: 33, pagedown: 34, end: 35, home: 36 };


			/***********************************************
			 * INITIALIZE
			 ***********************************************/

			/**
			 * Tests if smooth scrolling is allowed. Shuts down everything if not.
			 */
			function initTest() {

				var disableKeyboard = false;

				// disable keys for google reader (spacebar conflict)
				if (document.URL.indexOf("google.com/reader/view") > -1) {
					disableKeyboard = true;
				}

				// disable everything if the page is blacklisted
				if (options.excluded) {
					var domains = options.excluded.split(/[,\n] ?/);
					domains.push("mail.google.com"); // exclude Gmail for now
					for (var i = domains.length; i--;) {
						if (document.URL.indexOf(domains[i]) > -1) {
							observer && observer.disconnect();
							removeEvent("mousewheel", wheel);
							disableKeyboard = true;
							isExcluded = true;
							break;
						}
					}
				}

				// disable keyboard support if anything above requested it
				if (disableKeyboard) {
					removeEvent("keydown", keydown);
				}

				if (options.keyboardSupport && !disableKeyboard) {
					addEvent("keydown", keydown);
				}
			}

			/**
			 * Sets up scrolls array, determines if frames are involved.
			 */
			function init() {

				if (!document.body) return;

				var body = document.body;
				var html = document.documentElement;
				var windowHeight = window.innerHeight;
				var scrollHeight = body.scrollHeight;

				// check compat mode for root element
				root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
				activeElement = body;

				initTest();
				initDone = true;

				// Checks if this script is running in a frame
				if (top != self) {
					isFrame = true;
				}

				/**
				 * This fixes a bug where the areas left and right to
				 * the content does not trigger the onmousewheel event
				 * on some pages. e.g.: html, body { height: 100% }
				 */
				else if (scrollHeight > windowHeight &&
						(body.offsetHeight <= windowHeight ||
						 html.offsetHeight <= windowHeight)) {

					// DOMChange (throttle): fix height
					var pending = false;
					var refresh = function () {
						if (!pending && html.scrollHeight != document.height) {
							pending = true; // add a new pending action
							setTimeout(function () {
								html.style.height = document.height + 'px';
								pending = false;
							}, 500); // act rarely to stay fast
						}
					};
					html.style.height = 'auto';
					setTimeout(refresh, 10);

					var config = {
						attributes: true,
						childList: true,
						characterData: false
					};

					observer = new MutationObserver(refresh);
					observer.observe(body, config);

					// clearfix
					if (root.offsetHeight <= windowHeight) {
						var underlay = document.createElement("div");
						underlay.style.clear = "both";
						body.appendChild(underlay);
					}
				}

				// gmail performance fix
				if (document.URL.indexOf("mail.google.com") > -1) {
					var s = document.createElement("style");
					s.innerHTML = ".iu { visibility: hidden }";
					(document.getElementsByTagName("head")[0] || html).appendChild(s);
				}
				// facebook better home timeline performance
				// all the HTML resized images make rendering CPU intensive
				else if (document.URL.indexOf("www.facebook.com") > -1) {
					var home_stream = document.getElementById("home_stream");
					home_stream && (home_stream.style.webkitTransform = "translateZ(0)");
				}
				// disable fixed background
				if (!options.fixedBackground && !isExcluded) {
					body.style.backgroundAttachment = "scroll";
					html.style.backgroundAttachment = "scroll";
				}
			}


			/************************************************
			 * SCROLLING
			 ************************************************/

			var que = [];
			var pending = false;
			var lastScroll = +new Date;

			/**
			 * Pushes scroll actions to the scrolling queue.
			 */
			function scrollArray(elem, left, top, delay) {

				delay || (delay = 1000);
				directionCheck(left, top);

				if (options.accelerationMax != 1) {
					var now = +new Date;
					var elapsed = now - lastScroll;
					if (elapsed < options.accelerationDelta) {
						var factor = (1 + (30 / elapsed)) / 2;
						if (factor > 1) {
							factor = Math.min(factor, options.accelerationMax);
							left *= factor;
							top  *= factor;
						}
					}
					lastScroll = +new Date;
				}

				// push a scroll command
				que.push({
					x: left,
					y: top,
					lastX: (left < 0) ? 0.99 : -0.99,
					lastY: (top  < 0) ? 0.99 : -0.99,
					start: +new Date
				});

				// don't act if there's a pending queue
				if (pending) {
					return;
				}

				var scrollWindow = (elem === document.body);

				var step = function (time) {

					var now = +new Date;
					var scrollX = 0;
					var scrollY = 0;

					for (var i = 0; i < que.length; i++) {

						var item = que[i];
						var elapsed  = now - item.start;
						var finished = (elapsed >= options.animationTime);

						// scroll position: [0, 1]
						var position = (finished) ? 1 : elapsed / options.animationTime;

						// easing [optional]
						if (options.pulseAlgorithm) {
							position = pulse(position);
						}

						// only need the difference
						var x = (item.x * position - item.lastX) >> 0;
						var y = (item.y * position - item.lastY) >> 0;

						// add this to the total scrolling
						scrollX += x;
						scrollY += y;

						// update last values
						item.lastX += x;
						item.lastY += y;

						// delete and step back if it's over
						if (finished) {
							que.splice(i, 1); i--;
						}
					}

					// scroll left and top
					if (scrollWindow) {
						window.scrollBy(scrollX, scrollY);
					}
					else {
						if (scrollX) elem.scrollLeft += scrollX;
						if (scrollY) elem.scrollTop  += scrollY;
					}

					// clean up if there's nothing left to do
					if (!left && !top) {
						que = [];
					}

					if (que.length) {
						requestFrame(step, elem, (delay / options.frameRate + 1));
					} else {
						pending = false;
					}
				};

				// start a new queue of actions
				requestFrame(step, elem, 0);
				pending = true;
			}

			/***********************************************
			 * EVENTS
			 ***********************************************/

			/**
			 * Mouse wheel handler.
			 * @param {Object} event
			 */
			function wheel(event) {

				if (!initDone) {
					init();
				}

				var target = event.target;
				var overflowing = overflowingAncestor(target);

				// use default if there's no overflowing
				// element or default action is prevented
				if (!overflowing || event.defaultPrevented ||
					isNodeName(activeElement, "embed") ||
				   (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
					return true;
				}

				var deltaX = event.wheelDeltaX || 0;
				var deltaY = event.wheelDeltaY || 0;

				// use wheelDelta if deltaX/Y is not available
				if (!deltaX && !deltaY) {
					deltaY = event.wheelDelta || 0;
				}

				// check if it's a touchpad scroll that should be ignored
				if (!options.touchpadSupport && isTouchpad(deltaY)) {
					return true;
				}

				// scale by step size
				// delta is 120 most of the time
				// synaptics seems to send 1 sometimes
				if (Math.abs(deltaX) > 1.2) {
					deltaX *= options.stepSize / 120;
				}
				if (Math.abs(deltaY) > 1.2) {
					deltaY *= options.stepSize / 120;
				}

				scrollArray(overflowing, -deltaX, -deltaY);
				event.preventDefault();
			}

			/**
			 * Keydown event handler.
			 * @param {Object} event
			 */
			function keydown(event) {

				var target   = event.target;
				var modifier = event.ctrlKey || event.altKey || event.metaKey ||
							  (event.shiftKey && event.keyCode !== key.spacebar);

				// do nothing if user is editing text
				// or using a modifier key (except shift)
				// or in a dropdown
				if ( /input|textarea|select|embed/i.test(target.nodeName) ||
					 target.isContentEditable ||
					 event.defaultPrevented   ||
					 modifier ) {
				  return true;
				}
				// spacebar should trigger button press
				if (isNodeName(target, "button") &&
					event.keyCode === key.spacebar) {
				  return true;
				}

				var shift, x = 0, y = 0;
				var elem = overflowingAncestor(activeElement);
				var clientHeight = elem.clientHeight;

				if (elem == document.body) {
					clientHeight = window.innerHeight;
				}

				switch (event.keyCode) {
					case key.up:
						y = -options.arrowScroll;
						break;
					case key.down:
						y = options.arrowScroll;
						break;
					case key.spacebar: // (+ shift)
						shift = event.shiftKey ? 1 : -1;
						y = -shift * clientHeight * 0.9;
						break;
					case key.pageup:
						y = -clientHeight * 0.9;
						break;
					case key.pagedown:
						y = clientHeight * 0.9;
						break;
					case key.home:
						y = -elem.scrollTop;
						break;
					case key.end:
						var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
						y = (damt > 0) ? damt+10 : 0;
						break;
					case key.left:
						x = -options.arrowScroll;
						break;
					case key.right:
						x = options.arrowScroll;
						break;
					default:
						return true; // a key we don't care about
				}

				scrollArray(elem, x, y);
				event.preventDefault();
			}

			/**
			 * Mousedown event only for updating activeElement
			 */
			function mousedown(event) {
				activeElement = event.target;
			}


			/***********************************************
			 * OVERFLOW
			 ***********************************************/

			var cache = {}; // cleared out every once in while
			setInterval(function () { cache = {}; }, 10 * 1000);

			var uniqueID = (function () {
				var i = 0;
				return function (el) {
					return el.uniqueID || (el.uniqueID = i++);
				};
			})();

			function setCache(elems, overflowing) {
				for (var i = elems.length; i--;)
					cache[uniqueID(elems[i])] = overflowing;
				return overflowing;
			}

			function overflowingAncestor(el) {
				var elems = [];
				var rootScrollHeight = root.scrollHeight;
				do {
					var cached = cache[uniqueID(el)];
					if (cached) {
						return setCache(elems, cached);
					}
					elems.push(el);
					if (rootScrollHeight === el.scrollHeight) {
						if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
							return setCache(elems, document.body); // scrolling root in WebKit
						}
					} else if (el.clientHeight + 10 < el.scrollHeight) {
						overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
						if (overflow === "scroll" || overflow === "auto") {
							return setCache(elems, el);
						}
					}
				} while (el = el.parentNode);
			}


			/***********************************************
			 * HELPERS
			 ***********************************************/

			function addEvent(type, fn, bubble) {
				window.addEventListener(type, fn, (bubble||false));
			}

			function removeEvent(type, fn, bubble) {
				window.removeEventListener(type, fn, (bubble||false));
			}

			function isNodeName(el, tag) {
				return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
			}

			function directionCheck(x, y) {
				x = (x > 0) ? 1 : -1;
				y = (y > 0) ? 1 : -1;
				if (direction.x !== x || direction.y !== y) {
					direction.x = x;
					direction.y = y;
					que = [];
					lastScroll = 0;
				}
			}

			var deltaBufferTimer;

			function isTouchpad(deltaY) {
				if (!deltaY) return;
				deltaY = Math.abs(deltaY)
				deltaBuffer.push(deltaY);
				deltaBuffer.shift();
				clearTimeout(deltaBufferTimer);
				var allEquals    = (deltaBuffer[0] == deltaBuffer[1] &&
									deltaBuffer[1] == deltaBuffer[2]);
				var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
									isDivisible(deltaBuffer[1], 120) &&
									isDivisible(deltaBuffer[2], 120));
				return !(allEquals || allDivisable);
			}

			function isDivisible(n, divisor) {
				return (Math.floor(n / divisor) == n / divisor);
			}

			var requestFrame = (function () {
				  return  window.requestAnimationFrame       ||
						  window.webkitRequestAnimationFrame ||
						  function (callback, element, delay) {
							  window.setTimeout(callback, delay || (1000/60));
						  };
			})();

			var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;


			/***********************************************
			 * PULSE
			 ***********************************************/

			/**
			 * Viscous fluid with a pulse for part and decay for the rest.
			 * - Applies a fixed force over an interval (a damped acceleration), and
			 * - Lets the exponential bleed away the velocity over a longer interval
			 * - Michael Herf, http://stereopsis.com/stopping/
			 */
			function pulse_(x) {
				var val, start, expx;
				// test
				x = x * options.pulseScale;
				if (x < 1) { // acceleartion
					val = x - (1 - Math.exp(-x));
				} else {     // tail
					// the previous animation ended here:
					start = Math.exp(-1);
					// simple viscous drag
					x -= 1;
					expx = 1 - Math.exp(-x);
					val = start + (expx * (1 - start));
				}
				return val * options.pulseNormalize;
			}

			function pulse(x) {
				if (x >= 1) return 1;
				if (x <= 0) return 0;

				if (options.pulseNormalize == 1) {
					options.pulseNormalize /= pulse_(1);
				}
				return pulse_(x);
			}

			addEvent("mousedown", mousedown);
			addEvent("mousewheel", wheel);
			addEvent("load", init);

		}

	});
})(jQuery);

/**********************************************************************************/

/*
Plugin Name: 	waitForImages jQuery Plugin - v1.5.0 - 2013-07-20
Written by: 	https://github.com/alexanderdickson/waitForImages

*/
;(function ($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images.
    $.waitForImages = {
        hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage', 'cursor']
    };

    // Custom selector to find `img` elements that have a valid `src` attribute and have not already loaded.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid `src` attribute.
        if (!$(obj).is('img[src!=""]')) {
            return false;
        }

        // Firefox's `complete` property will always be `true` even if the image has not been downloaded.
        // Doing it this way works in Firefox.
        var img = new Image();
        img.src = obj.src;
        return !img.complete;
    };

    $.fn.waitForImages = function (finishedCallback, eachCallback, waitForAll) {

        var allImgsLength = 0;
        var allImgsLoaded = 0;

        // Handle options object.
        if ($.isPlainObject(arguments[0])) {
            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
			// This must be last as arguments[0]
			// is aliased with finishedCallback.
            finishedCallback = arguments[0].finished;
        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        return this.each(function () {
            // Build a list of all imgs, dependent on what images will be considered.
            var obj = $(this);
            var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            // To match `url()` references.
            // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {

                // Get all elements (including the original), as any one of them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in case it has a background image too.
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:uncached')
                    .each(function () {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            }

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
            }

            $.each(allImgs, function (i, img) {

                var image = new Image();

                // Handle the image loading and error with the same callback.
                $(image).on('load.' + eventNamespace + ' error.' + eventNamespace, function (event) {
                    allImgsLoaded++;

                    // If an error occurred with loading the image, set the third argument accordingly.
                    eachCallback.call(img.element, allImgsLoaded, allImgsLength, event.type == 'load');

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        return false;
                    }

                });

                image.src = img.src;
            });
        });
    };
}(jQuery));


/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);


/**********************************************************************************/


/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 *
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
    $.fn.appear = function (options) {
		
		var transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

        var settings = $.extend({
            data: undefined,
			speedAddClass: 300,
			speedRemoveClass: 100,
            // X & Y accuracy
            accX: 0,
            accY: 0
        }, options);
		
        return this.each(function (id) {

            var t = $(this);
			
            //whether the element is currently visible
            t.appeared = false;
			
            var w = $(window),
			check = function () {

                //is the element hidden?
                if (!t.is(':visible')) {
					
                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft(),
					b = w.scrollTop(),
					o = t.offset(),
					x = o.left,
					y = o.top,

					ax = settings.accX,
					ay = settings.accY,
					th = t.height(),
					wh = w.height(),
					tw = t.width(),
					ww = w.width();
				
                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };
			
			var fn = function (e) {
				if (e.data) {
					setTimeout(function() {
						$(e.currentTarget).addClass(e.data + 'Run').one(transEndEventName, function () {
							$(this).removeClass(e.data);
						});
					}, id * settings.speedAddClass);
				}
			}

            //create a modified fn with some additional logic
            var modifiedFn = function () {
				
                //mark the element as visible
                t.appeared = true;
				
                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
			t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);
			
            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
	
    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
		
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);


/**********************************************************************************/

/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter),
			inject = '', regExp = /<br>/;

		if (a.length) {
			$(a).each(function(i, item) {
				if (regExp.test(item)) {
					inject += item;
				} else {
					if (item !== "") {
						inject += '<span class="' + klass + ( i+1 ) + '">' + item + '</span>' + after;
					}
				}
			});
			t.empty().append(inject);
		}
	}
	var methods = {
		init : function() {
			return this.each(function() {
				injector($(this), '', 'char', '');
			});
		},
		words : function() {
			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});
		}
	};	

	$.fn.lettering = function( method ) {
		// Method calling logic
		
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);

/**********************************************************************************/

/*
 * Textislide.js.custom
 * MIT licensed
 */

(function($, window) {
	
	function Textislide (element, options) {
		var base = this;
		
		base.el = $(element);
		base.slides = base.el.children();
		base.items = base.slides.find('.item');
		base.itemsAmount = base.items.length;
		base.maximumItem = base.itemsAmount - 1;
		
		base.options = $.extend({}, $.fn.textislide.defaults, options);
		base.loadContent(options);
	}
	
	Textislide.prototype = {
		loadContent: function (options) {
			var base = this;
				base.checkBrowser();
				base.setVars(options);
		},
		
        setVars: function (options) {
            var base = this;
			
            base.wrapItems();
			base.slideItems = base.el.find('.slide-item');
			base.wrapper = base.el.find('.slide-wrapper');
			base.prevItem = 0;
			base.prevArr = [0];
			base.currentItem = 0;
			
			if (base.browser.supportCSS3 === true) {
				base.setData(options);
			}
            base.onStart();
        },	
		
		setData: function (options) {
			var base = this;
			
			base.slideItems.each(function () {
				var $item = $(this),
					$elements = $item.find(':header');
					
				$elements.each(function (id, value) {
					var $element = $(value), $text, $current,
						elementData = $.extend(true, {}, options.headlinesSettings[id], base.getData($element[0]));

					$text = $('<div class="text">' + $element.html() + '</div>').hide();
					$element.html($text);
					$current = $('<span>').text($text.html()).prependTo($element);
					
					$element.data({
						data: elementData,
						text: {
							'text': $text,
							'current': $current
						}
					});
				});
			});
		},
		
		onStart: function () {
			var base = this;
			
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.stopOnHover();
			base.response();
			
			base.el.css('opacity', 0);
			base.play();
            base.el.css('opacity', 1);
		
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
			if (base.options.autoStart === true && base.browser.supportCSS3 === true) {
				base.from(base.slideItems.eq(base.currentItem));
			} 
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }	
			
		},
		
		wrapItems : function () {
            var base = this;
				base.items
					.wrapAll('<div class="slide-wrapper">')
					.wrap('<div class="slide-item"></div>');
				base.el.find('.slide-wrapper').wrap('<div class="wrapper-outer">');
				base.outer = base.el.find(".wrapper-outer");
			base.el.css("display", "block");
        },
		
        updateVars: function () {
            var base = this;
				base.calculateAll();
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }			
        },

        response: function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, 200);
                }
            };
            $(window).resize(base.resizer);
        },
		
        appendItemsSizes: function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - 1;
		
            base.slideItems.each(function (index) {
				var $this = $(this);
				  $this.css({ "width": base.itemWidth });
					if (index % 1 === 0 || index === lastItem) {
						if (!(index > lastItem)) {
							roundPages += 1;
						}
					}
				  $this.data("roundPages", roundPages);
            });
        },
		
        appendWrapperSizes: function () {
            var base = this,
                width = base.items.length * base.itemWidth;
            base.wrapper.css({
                "width": width * 2
            });
            base.appendItemsSizes();
        },	
		
        calculateAll: function () {
            var base = this;
				base.calculateWidth();
				base.appendWrapperSizes();
				base.loops();
        },
		
        calculateWidth: function () {
            var base = this;
				base.itemWidth = Math.round(base.el.width());
        },
		
		buildControls: function () {
			var base = this;
		
			if (base.options.pagination === true) {
				base.Controls = $('<div class="controls" />').appendTo(base.slides);
			}
			if (base.options.pagination === true) {
				base.buildPagination();
            }
		},
		
		buildPagination: function () {
			var base = this;

			base.paginationWrapper = $('<div class="control-nav"></div>');
			base.Controls.append(base.paginationWrapper);
			
            base.paginationWrapper.on("touchend.Controls mouseup.Controls", ".page", function (e) {
                e.preventDefault();
                if (Number($(this).data("page")) !== base.currentItem) {
                    base.goTo(Number($(this).data('page')), true);
                }
            });
		},
		
        updateControls: function () {
            var base = this;
				base.updatePagination();
        },
		
        updatePagination: function () {
            var base = this,
                counter = 0,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) { return false; }

            base.paginationWrapper.html("");
			
            lastPage = base.itemsAmount - base.itemsAmount % 1;
			
            for (i = 0; i < base.itemsAmount; i += 1) {
				counter += 1;
		
				if (lastPage === i) {
					lastItem = base.itemsAmount - 1;
				}
				paginationButton = $("<div/>", { "class" : "page" });
				paginationButtonInner = $("<span/>", { "text": counter });
				paginationButton.append(paginationButtonInner);
				
				paginationButton.data('page', lastPage === i ? lastItem : i);
				paginationButton.data('roundPages', counter);
				
				base.paginationWrapper.append(paginationButton);
            }
			base.checkPagination();
        },
		
        checkPagination: function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find('.page').each(function () {
				var $this = $(this);
                if ($this.data('roundPages') === $(base.slideItems[base.currentItem]).data('roundPages')) {
					$this.siblings().removeClass('active').end().addClass('active');
                }
            });
        },
		
        goTo: function (position) {
            var base = this;
            if (base.isTransition) { return false;  }
				base.currentItem = position;
            if (base.browser.supportCSS3 === true) {
				base.transition3d(base.positionsInArray[position]);
				base.afterGo();
				base.singleItemTransition();
			} else {
				base.css2slide(base.positionsInArray[position], 1000);
				base.afterGo();
			}
			return false;
        },
		
        afterGo: function () {
            var base = this;
				base.prevArr.push(base.currentItem);
				base.prevItem = base.prevArr[base.prevArr.length - 2];
			
			var $prevItem = base.slideItems.eq(base.prevItem);
				base.slideItems.eq(base.prevItem);
				
			if (base.browser.supportCSS3 === true) {
				base.to($prevItem);
			}
            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
				if (base.options.autoHeight === true) {
					base.autoHeight();
				}	
                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
        },
		
        checkAp: function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play: function () {
            var base = this;
				base.apStatus = "play";
			if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next();
            }, base.options.autoPlay);
        },
		
        stop: function () {
            var base = this;
				base.apStatus = "stop";
				window.clearInterval(base.autoPlayInterval);
        },
		
        stopOnHover: function () {
            var base = this;
            if (base.options.autoPlay !== false) {
                base.el.on("mouseover", function () {
                    base.stop();
                }).on("mouseout", function () {
                    base.play();
                });
            }
        },
		
        autoHeight: function () {
            var base = this;
		
            function addHeight() {
                var $currentItem = $(base.slideItems[base.currentItem]).height();
					base.outer.css('height', $currentItem + 'px');
					if (!base.outer.hasClass('autoHeight')) {
						window.setTimeout(function () {
							base.outer.addClass('autoHeight');
						}, 0);
					}
            }
            addHeight();
        },
		
        next: function () {
            var base = this;

            if (base.isTransition) { return false; }

            base.currentItem += 1;
            if (base.currentItem > base.maximumItem) {
                base.currentItem = 0;
            }
            base.goTo(base.currentItem);
        },
		
        singleItemTransition: function () {
            var base = this,
                outClass = 'text-fade-out',
                inClass = 'text-fade-in',
                $currentItem = base.slideItems.eq(base.currentItem),
				$prevItem = base.slideItems.eq(base.prevItem),
				prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                animEnd = base.animEndName();
				
            base.isTransition = true;

			base.from($currentItem);

			function transStyles(prevPos) {
				return {
					"position" : "relative",
					"left" : prevPos + "px"
				};
			}

			$prevItem.css(transStyles(prevPos)).addClass(outClass)
				.on(animEnd, function () {
					base.endPrev = true;
					$prevItem.off(animEnd);
					base.clearTransStyle($prevItem, outClass);
				});

			$currentItem.addClass(inClass)
				.on(animEnd, function () {
					base.endCurrent = true;
					$currentItem.off(animEnd);
					base.clearTransStyle($currentItem, inClass);
				});
        },
		
		animEndName: function () {
			var animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			};
			return animEndEventNames[Modernizr.prefixed('animation')];
		},
		
        clearTransStyle: function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },
		
        loops: function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

				item = $(base.slideItems[i]);
				roundPageNum = item.data("roundPages");
				if (roundPageNum !== prev) {
					base.pagesInArray[prev] = base.positionsInArray[i];
					prev = roundPageNum;
				}
            }
        },
		
        doTranslate: function (pixels) {
            return {
                "-webkit-transform": "translateX(" + pixels + "px)",
                "-moz-transform": "translateX(" + pixels + "px)",
                "-o-transform": "translateX(" + pixels + "px)",
                "-ms-transform": "translateX(" + pixels + "px)",
                "transform": "translateX(" + pixels + "px)"
            };
        },
		
        transition3d: function (value) {
            var base = this;
				base.wrapper.css(base.doTranslate(value));
        },
		
        css2slide: function (value, speed) {
            var base = this;
				base.wrapper.stop(true, true).animate({
					"left" : value
				}, {
					duration : speed
				});
        },
		
        checkBrowser: function () {
			var base = this;
				base.browser = {
					"supportCSS3" : Modernizr.cssanimations && Modernizr.csstransitions,
					"touch" : Modernizr.touch
				};
        },
		
		from: function (element, cb) {
			var base = this;
			
			element.each(function () {
				var $item = $(this),
					$elements = $item.find(':header');
					
				$elements.each(function (idx, value) {
					var $element = $(value),
						elementData = $element.data('data'),
						textData = $element.data('text') || {},
						$current = textData.current,
						$elem = textData.text, $chars;

					$current.text($elem.html()).lettering('words');
					$chars = $current.find('[class^="word"]');
					
					if (base.isInEffect(elementData.from.effect)) {
						$chars.css('visibility', 'hidden');
					} else if (base.isOutEffect(elementData.from.effect)) {
						$chars.css('visibility', 'visible');
					}

					base.animateChars($chars, elementData.from, function () {
						if (cb) {
							cb(base);
						}
					});	
				});
			});
			
		},
		
	    to: function (element, cb) {
			var base = this;
			
			element.each(function () {
				var $item = $(this),
					$elements = $item.find(':header');	
					
				$elements.each(function (idx, value) {
					var $element = $(value),
						elementData = $element.data('data'),
						textData = $element.data('text') || {},
						$current = textData.current,
						$elem = textData.text, $chars;
					
					$current.text($elem.html()).lettering('words');
					$chars = $current.find('[class^="word"]');

					base.animateChars($chars, elementData.to, function () {
						if (cb) {
							cb(base);
						}
					});
				});
			});
		},
		
		animateChars: function ($chars, options, cb) {
			var base = this, 
				count = $chars.length;
		
			if (!count) {
				cb && cb();
				return;
			}

			$.each($chars, function (i, c) {
				var $char = $(c);

				function complete() {
					if (base.isInEffect(options.effect)) {
						$char.css('visibility', 'visible'); 
					} else if (base.isOutEffect(options.effect)) {
						$char.css('visibility', 'hidden');
					}
					count -= 1;
					if (!count && cb) {
						cb();
					}
				}
				var delay = options.sync ? options.delay : options.delay * i;
					$char.text() ? setTimeout(function() { base.animate($char, options.effect, complete) }, delay) : complete();
			});
		},
		
		isInEffect: function  (effect) {
            return /In/.test(effect);
        },
		isOutEffect: function (effect) {
            return /Out/.test(effect);
        },
		
		getData: function (node) {
			var attrs = node.attributes || [], data = {};

			if (!attrs.length) { return data; }
			$.each(attrs, function (i, attr) {
				if (/^data-from-*/.test(attr.nodeName)) {
					data.from = {};
					data.from[attr.nodeName.replace(/data-from-/, '')] = attr.nodeValue;
				} else if (/^data-to-*/.test(attr.nodeName)) {
					data.to = {};
					data.to[attr.nodeName.replace(/data-to-/, '')] = attr.nodeValue;
				} else if (/^data-*/.test(attr.nodeName)) {
					data[attr.nodeName] = attr.nodeValue;
				}
			});
			return data;
		},		

		animate: function ($c, effect, cb) {
			$c.addClass('animate ' + effect).css('visibility', 'visible').show();
			$c.one('animationend webkitAnimationEnd oAnimationEnd', function () {
				$c.removeClass('animate ' + effect);
				cb && cb();
			});	
		}
	}

	$.fn.textislide = function (option) {
		return this.each(function () {
			var $this = $(this), 
				data = $this.data('textislide'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('textislide', new Textislide(this, options));
			}
		});
	};
	
	$.fn.textislide.defaults = {
		pagination: true,
		autoStart: false,
		autoPlay: false,
		autoHeight: false
	};	

}(jQuery, window));

/**********************************************************************************/

/*
 * fitVids
 * MIT licensed
 *
 */

(function ($) {

	$.fn.fitVids = function(options) {
		var settings = {
			customSelector: null
		};
		
		if (!document.getElementById('fit-vids-style')) {

			var div = document.createElement('div'),
			ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
			cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

			div.className = 'fit-vids-style';
			div.id = 'fit-vids-style';
			div.style.display = 'none';
			div.innerHTML = cssStyles;

			ref.parentNode.insertBefore(div,ref);

		}

		if (options) {
			$.extend(settings, options);
		}

		return this.each(function () {
			var selectors = [
				"iframe[src*='player.vimeo.com']",
				"iframe[src*='youtube.com']",
				"iframe[src*='youtube-nocookie.com']",
				"iframe[src*='kickstarter.com'][src*='video.html']",
				"object",
				"embed"
			];

			if (settings.customSelector) {
				selectors.push(settings.customSelector);
			}

			var $allVideos = $(this).find(selectors.join(',')).not("iframe[src^='http:/\/\']");
			$allVideos = $allVideos.not("object object"); // SwfObj conflict patch

			$allVideos.each(function(){
				var $this = $(this);
				if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
					return;
				}
				var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
				width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
				aspectRatio = height / width;
				
				if(!$this.attr('id')) {
					var videoID = 'fitvid' + Math.floor(Math.random()*999999);
					$this.attr('id', videoID);
				}
				$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
				$this.removeAttr('height').removeAttr('width');
			});
		});

	};	
	
})(jQuery);

		
/**********************************************************************************/

/*
 * SlideFade 
 * MIT licensed
 *
 */

(function ($) {

	$.fn.slideFade = function (options) {
		
		if (!this.length) { return this; }
		
		var opts = $.extend(true, {}, $.fn.slideFade.defaults, options),
			round = Math.round, atan2 = Math.atan2,
			aniProp = [{ top: 0 }, { left: 0 }, { top: 0 }, { left: 0 }];
	
		var getDirection = function(ev, obj) {
			var o = obj.offset(),
				w = obj.outerWidth(),
				h = obj.outerHeight(),
				x = (ev.pageX - o.left - (w / 2) * (w > h ? (h / w) : 1)),
				y = (ev.pageY - o.top - (h / 2) * (h > w ? (w / h) : 1)),
				d = round(atan2(y, x) / 1.57079633 + 5) % 4;
			return d;
		};
	
		this.each(function (id, value) {
			if ($.data(this, 'css')) { return; }
			
			var $this = $(value),
				w = $this.width(),
				h = $this.height();
			$.data(this, 'css', {
				w: w,
				h: h,
				wm: w > h + 1 ? (h / w) : 1,
				hm: h > w + 1 ? (w / h) : 1,
				reset: [{
					left: 0,
					top: '-100%',
					display: 'block'
				}, {
					left: '100%',
					top: 0,
					display: 'block'
				}, {
					left: 0,
					top: '100%',
					display: 'block'
				}, {
					left: '-100%',
					top: 0,
					display: 'block'
				}]
			});
		});
		this.on('mouseenter.slidefade mouseleave.slidefade', function (event) {
			var $this = $(this), css = $.data(this, 'css'),
				$inner = ('find' in opts) ? $this.find(opts.find) : $this.children(opts.selector);
				
			if (event.type === 'mouseenter') {
				$inner
					.stop(true, true)
					.css(css.reset[getDirection(event, $this)])
					.stop(true, true)
					.animate({ top: 0, left: 0 }, opts.slide.duration);
			} else {
				$inner.fadeOut(opts.fade.duration, function () {
					$(this).stop(true, true).css(css.reset[0]);
				});
			}
		});
		return this;
	};
	
	$.fn.slideFade.defaults = {
		selector: 'a',
		slide: {
			duration: 200,
			easing: 'swing'
		},
		fade: {
			duration: 650,
			easing: 'swing'
		}
	};
		
})(jQuery);
	
		
/**********************************************************************************/

/*
 * countTo
 * MIT licensed
 *
 */

(function ($) {

	$.fn.countTo = function (options) {

		options = options || {};

		return $(this).each(function () {

			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from: $(this).data('from'),
				to: $(this).data('to'),
				speed: $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals: $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
			$self = $(this),
			loopCount = 0,
			value = settings.from,
			data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (loopCount >= loops) {
					
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
				}
			}

			function render(value) {
				var formattedValue = value.toFixed(settings.decimals);
				$self.children('.count').html(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0, // the number the element should start at
		to: 0, // the number the element should end at
		speed: 1000, // how long it should take to count between the target numbers
		refreshInterval: 10, // how often the element should be updated
		decimals: 0
	};

})(jQuery);

/**********************************************************************************/

/*
 * progressBar
 * MIT licensed
 *
 */

(function ($) {
	
	$.fn.progressBar = function(options, callback) {

		var defaults = {
			speed: 600,
			easing: 'swing'
		}, o = $.extend({}, defaults, options);

		return this.each(function() {

			var elem = $(this), methods = {};

			methods = {
				init: function () {
					this.touch = Modernizr.touch ? true : false;
					this.refreshElements();
					this.processing();
				},
				elements: {
					'.bar': 'bar',
					'.percent': 'per'
				},
				$: function(selector) { return $(selector, elem); },
				refreshElements: function () {
					for (var key in this.elements) {
						this[this.elements[key]] = this.$(key);
					}
				},
				getProgress: function() { return this.bar.data('progress'); },
				setProgress: function(self) {
					self.bar.animate({'width': self.getProgress() + '%'}, {
						duration: o.speed,
						easing: o.easing,
						step: function(progress) {
							self.per.text(Math.ceil(progress) + '%');
						},
						complete: function(scope, i, elem) {
							if (callback) {
								callback.call(this, i, elem);
							}
						}
					});
				},
				processing: function() {
					var self = this;
					if (self.touch) {
						self.setProgress(self);
					} else {
						elem.waypoint(function(direction) {
							if (direction == 'down') {
								self.setProgress(self);
							}
						}, { offset: '64%'});
					}
				}
			};
			methods.init();
		});
	};	
	
})(jQuery);

/**********************************************************************************/

/*
 * parallax
 * MIT licensed
 *
 */

(function ($) {
	
	$.fn.parallax = function(xpos, speed) {
		var firstTop, pos;
		return this.each(function (idx, value) {

			var $this = $(value);
				if (arguments.length < 1 || xpos === null)  { xpos = "50%"; }
				if (arguments.length < 2 || speed === null) { speed = 0.4; }

			return ({
				update: function() {
					firstTop = $this.offset().top;
					pos = $(window).scrollTop();
					$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speed) + "px");
				},
				init: function() {
					var self = this;
						self.update();
					$(window).on('scroll', self.update);
				}
			}.init());
		});

	};	

})(jQuery);

/**********************************************************************************/

/*
 * Notifications
 * MIT licensed
 *
 */

(function ($) {
	
	$.fn.notifications = function (options) {

		var defaults = { speed: 200 }, 
			o = $.extend({}, defaults, options);

		return this.each(function () {

			var closeBtn = $('<a class="alert-close" href="#"></a>'),
				closeButton = $(this).append(closeBtn).find('> .alert-close');

			function fadeItSlideIt(object) {
				object.fadeTo(o.speed, 0, function () {
					object.slideUp(o.speed);
				});
			}
			closeButton.click(function () {
				fadeItSlideIt($(this).parent());
				return false;
			});
		});
	};	
	
})(jQuery);

/**********************************************************************************/

/*

Tooltipster 3.1.2 | 2014-03-17
A rockin' custom tooltip jQuery plugin

Developed by Caleb Jacob under the MIT license http://opensource.org/licenses/MIT

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/* Tooltipster v3.1.2 */;(function(e,t,n){function o(t,n){this.callbacks={hide:[],show:[]};this.checkInterval=null;this.content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},s,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this.init()}function u(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function l(){return!f&&a}function c(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",s={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,delay:200,fixedWidth:0,maxWidth:0,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};o.prototype={init:function(){var t=this;if(n.querySelector){if(t.options.content!==null){t.setContent(t.options.content)}else{var r=t.$el.attr("title");if(typeof r==="undefined")r=null;t.setContent(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.content);if(typeof i!=="undefined")t.setContent(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!a&&t.options.iconDesktop||a&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!l()||t.options.touchDevices){t.mouseIsOverProxy=true;t.showTooltip()}}).on("mouseleave."+t.namespace,function(){if(!l()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(a&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t.showTooltipNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!l()||t.options.touchDevices){t.showTooltip()}})}}},showTooltip:function(){var e=this;if(e.status!="shown"&&e.status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e.showTooltipNow()}},e.options.delay)}else e.showTooltipNow()}},showTooltipNow:function(n){var i=this;i.options.functionBefore.call(i.$el,i.$el,function(){if(i.enabled&&i.content!==null){if(n)i.callbacks.show.push(n);i.callbacks.hide=[];clearTimeout(i.timerShow);i.timerShow=null;clearTimeout(i.timerHide);i.timerHide=null;if(i.options.onlyOne){e(".tooltipstered").not(i.$el).each(function(t,n){var i=e(n),s=i[r]("status"),o=i[r]("option","autoClose");if(s!=="hidden"&&s!=="disappearing"&&o){i[r]("hide")}})}var s=function(){i.status="shown";e.each(i.callbacks.show,function(e,t){t.call(i.$el)});i.callbacks.show=[]};if(i.status!=="hidden"){var o=0;if(i.status==="disappearing"){i.status="appearing";if(c()){i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+i.options.animation+"-show");if(i.options.speed>0)i.$tooltip.delay(i.options.speed);i.$tooltip.queue(s)}else{i.$tooltip.stop().fadeIn(s)}}else if(i.status==="shown"){s()}}else{i.status="appearing";var o=i.options.speed;var u="tooltipster-"+i.options.animation,f="-webkit-transition-duration: "+i.options.speed+"ms; -webkit-animation-duration: "+i.options.speed+"ms; -moz-transition-duration: "+i.options.speed+"ms; -moz-animation-duration: "+i.options.speed+"ms; -o-transition-duration: "+i.options.speed+"ms; -o-animation-duration: "+i.options.speed+"ms; -ms-transition-duration: "+i.options.speed+"ms; -ms-animation-duration: "+i.options.speed+"ms; transition-duration: "+i.options.speed+"ms; animation-duration: "+i.options.speed+"ms;",l=i.options.fixedWidth>0?"width:"+Math.round(i.options.fixedWidth)+"px;":"",h=i.options.maxWidth>0?"max-width:"+Math.round(i.options.maxWidth)+"px;":"",p=i.options.interactive?"pointer-events: auto;":"";i.$tooltip=e('<div class="tooltipster-base '+i.options.theme+'" style="'+l+" "+h+" "+p+" "+f+'"><div class="tooltipster-content"></div></div>');if(c())i.$tooltip.addClass(u);i.insertContent();i.$tooltip.appendTo("body");i.positionTooltip();i.options.functionReady.call(i.$el,i.$el,i.$tooltip);if(c()){i.$tooltip.addClass(u+"-show");if(i.options.speed>0)i.$tooltip.delay(i.options.speed);i.$tooltip.queue(s)}else{i.$tooltip.css("display","none").fadeIn(i.options.speed,s)}i.setCheckInterval();e(t).on("scroll."+i.namespace+" resize."+i.namespace,function(){i.positionTooltip()});if(i.options.autoClose){e("body").off("."+i.namespace);if(i.options.trigger=="hover"){if(a){setTimeout(function(){e("body").on("touchstart."+i.namespace,function(){i.hideTooltip()})},0)}if(i.options.interactive){if(a){i.$tooltip.on("touchstart."+i.namespace,function(e){e.stopPropagation()})}var d=null;i.$elProxy.add(i.$tooltip).on("mouseleave."+i.namespace+"-autoClose",function(){clearTimeout(d);d=setTimeout(function(){i.hideTooltip()},i.options.interactiveTolerance)}).on("mouseenter."+i.namespace+"-autoClose",function(){clearTimeout(d)})}else{i.$elProxy.on("mouseleave."+i.namespace+"-autoClose",function(){i.hideTooltip()})}}else if(i.options.trigger=="click"){setTimeout(function(){e("body").on("click."+i.namespace+" touchstart."+i.namespace,function(){i.hideTooltip()})},0);if(i.options.interactive){i.$tooltip.on("click."+i.namespace+" touchstart."+i.namespace,function(e){e.stopPropagation()})}}}}if(i.options.timer>0){i.timerHide=setTimeout(function(){i.timerHide=null;i.hideTooltip()},i.options.timer+o)}}})},setCheckInterval:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.status=="shown"||t.status=="appearing")t.hideTooltip();t.cancelCheckInterval()}else{if(t.options.positionTracker){var n=t.positionInfo(t.$elProxy),r=false;if(u(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(u(n.position,t.elProxyPosition.position))r=true}else{if(u(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.positionTooltip()}}}},200)},cancelCheckInterval:function(){clearInterval(this.checkInterval);this.checkInterval=null},hideTooltip:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.status=="shown"||r.status=="appearing"){r.status="disappearing";var s=function(){r.status="hidden";if(typeof r.content=="object"&&r.content!==null){r.content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(c()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.status=="hidden"){i()}},setContent:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.content=e},insertContent:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.content==="string"&&!e.options.contentAsHTML){t.text(e.content)}else{t.empty().append(e.content)}},updateTooltip:function(e){var t=this;t.setContent(e);if(t.content!==null){if(t.status!=="hidden"){t.insertContent();t.positionTooltip();if(t.options.updateAnimation){if(c()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hideTooltip()}},positionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},positionTooltip:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n.positionInfo(n.$elProxy);var r=null,s=e(t).width(),o=n.elProxyPosition,u=n.$tooltip.outerWidth(false),a=n.$tooltip.innerWidth()+1,f=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var l=n.$elProxy.attr("shape"),c=n.$elProxy.parent().attr("name"),h=e('img[usemap="#'+c+'"]'),p=h.offset().left,d=h.offset().top,v=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(l=="circle"){var m=parseInt(v[0]),g=parseInt(v[1]),y=parseInt(v[2]);o.dimension.height=y*2;o.dimension.width=y*2;o.offset.top=d+g-y;o.offset.left=p+m-y}else if(l=="rect"){var m=parseInt(v[0]),g=parseInt(v[1]),b=parseInt(v[2]),w=parseInt(v[3]);o.dimension.height=w-g;o.dimension.width=b-m;o.offset.top=d+g;o.offset.left=p+m}else if(l=="poly"){var E=[],S=[],x=0,T=0,N=0,C=0,k="even";for(i=0;i<v.length;i++){var L=parseInt(v[i]);if(k=="even"){if(L>N){N=L;if(i===0){x=N}}if(L<x){x=L}k="odd"}else{if(L>C){C=L;if(i==1){T=C}}if(L<T){T=L}k="even"}}o.dimension.height=C-T;o.dimension.width=N-x;o.offset.top=d+T;o.offset.left=p+x}else{o.dimension.height=h.outerHeight(false);o.dimension.width=h.outerWidth(false);o.offset.top=d;o.offset.left=p}}if(n.options.fixedWidth===0){n.$tooltip.css({width:Math.round(a)+"px","padding-left":"0px","padding-right":"0px"})}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+u-n>s){r=A-(s+n-u);A=s+n-u}}function B(n,r){if(o.offset.top-e(t).scrollTop()-f-_-12<0&&r.indexOf("top")>-1){P=n}if(o.offset.top+o.dimension.height+f+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=o.offset.top-f-_-12}}if(P=="top"){var j=o.offset.left+u-(o.offset.left+o.dimension.width);A=o.offset.left+D-j/2;M=o.offset.top-f-_-12;H();B("bottom","top")}if(P=="top-left"){A=o.offset.left+D;M=o.offset.top-f-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=o.offset.left+o.dimension.width+D-u;M=o.offset.top-f-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=o.offset.left+u-(o.offset.left+o.dimension.width);A=o.offset.left-j/2+D;M=o.offset.top+o.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=o.offset.left+D;M=o.offset.top+o.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=o.offset.left+o.dimension.width+D-u;M=o.offset.top+o.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=o.offset.left-D-u-12;O=o.offset.left+D+o.dimension.width+12;var F=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));M=o.offset.top-F/2-_;if(A<0&&O+u>s){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=u+A-I;n.$tooltip.css("width",q+"px");f=n.$tooltip.outerHeight(false);A=o.offset.left-D-q-12-I;F=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));M=o.offset.top-F/2-_}else if(A<0){A=o.offset.left+D+o.dimension.width+12;r="left"}}if(P=="right"){A=o.offset.left+D+o.dimension.width+12;O=o.offset.left-D-u-12;var F=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));M=o.offset.top-F/2-_;if(A+u>s&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=s-A-I;n.$tooltip.css("width",q+"px");f=n.$tooltip.outerHeight(false);F=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));M=o.offset.top-F/2-_}else if(A+u>s){A=o.offset.left-D-u-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(s,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster");if(n){switch(t[0]){case"content":case"update":if(typeof t[1]==="undefined"){r=n.content;return false}else{n.updateTooltip(t[1]);break};case"destroy":n.hideTooltip();if(n.$el[0]!==n.$elProxy[0])n.$elProxy.remove();var i=typeof n.content==="string"?n.content:e("<div></div>").append(n.content).html();n.$el.removeClass("tooltipstered").attr("title",i).removeData("tooltipster").off("."+n.namespace);break;case"disable":n.hideTooltip();n.enabled=false;break;case"elementIcon":r=n.$el[0]!==n.$elProxy[0]?n.$elProxy[0]:undefined;return false;case"elementTooltip":r=n.$tooltip?n.$tooltip[0]:undefined;return false;case"enable":n.enabled=true;break;case"hide":n.hideTooltip(t[1]);break;case"option":r=n.options[t[1]];return false;case"reposition":n.positionTooltip();break;case"show":n.showTooltipNow(t[1]);break;case"status":r=n.status;return false;default:throw new Error('Unknown method .tooltipster("'+t[0]+'")');break}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{return this.each(function(){if(!e(this).data("tooltipster")){e(this).data("tooltipster",new o(this,t[0]))}})}}};var a=!!("ontouchstart"in t);var f=false;e("body").one("mousemove",function(){f=true})})(jQuery,window,document);


/**********************************************************************************/


(function(a){a.fn.swipe=function(c){if(!this){return false}var k={fingers:1,threshold:75,timeThreshold:500,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var m="left";var l="right";var d="up";var s="down";var j="none";var v="horizontal";var q="vertical";var o="auto";var f="start";var i="move";var h="end";var n="cancel";var t="ontouchstart" in window,b=t?"touchstart":"mousedown",p=t?"touchmove":"mousemove",g=t?"touchend":"mouseup",r="touchcancel";var e="start";var u;if(c.allowPageScroll==undefined&&(c.swipe!=undefined||c.swipeStatus!=undefined)){c.allowPageScroll=j}if(c){a.extend(k,c)}return this.each(function(){var E=this;var I=a(this);var F=null;var J=0;var y={x:0,y:0};var B={x:0,y:0};var L={x:0,y:0};function A(P){var O=t?P.touches[0]:P;e=f;if(t){J=P.touches.length}distance=0;direction=null;if(J==k.fingers||!t){y.x=B.x=O.pageX;y.y=B.y=O.pageY;if(k.swipeStatus){z(P,e)}var N=new Date();u=N.getTime()}else{D(P)}E.addEventListener(p,K,false);E.addEventListener(g,M,false)}function K(Q){if(e==h||e==n){return}var P=t?Q.touches[0]:Q;B.x=P.pageX;B.y=P.pageY;direction=w();if(t){J=Q.touches.length}e=i;H(Q,direction);if(J==k.fingers||!t){distance=C();if(k.swipeStatus){z(Q,e,direction,distance)}if(!k.triggerOnTouchEnd){var O=new Date();var R=O.getTime();var N=R-u;if(distance>=k.threshold&&N<=k.timeThreshold){e=h;z(Q,e);D(Q)}}}else{e=n;z(Q,e);D(Q)}}function M(P){P.preventDefault();distance=C();direction=w();if(k.triggerOnTouchEnd){e=h;if((J==k.fingers||!t)&&B.x!=0){var O=new Date();var Q=O.getTime();var N=Q-u;if(distance>=k.threshold&&N<=k.timeThreshold){z(P,e);D(P)}else{e=n;z(P,e);D(P)}}else{e=n;z(P,e);D(P)}}else{if(e==i){e=n;z(P,e);D(P)}}E.removeEventListener(p,K,false);E.removeEventListener(g,M,false)}function D(N){J=0;y.x=0;y.y=0;B.x=0;B.y=0;L.x=0;L.y=0}function z(O,N){if(k.swipeStatus){k.swipeStatus.call(I,O,N,direction||null,distance||0)}if(N==n){if(k.click&&(J==1||!t)&&(isNaN(distance)||distance==0)){k.click.call(I,O,O.target)}}if(N==h){if(k.swipe){k.swipe.call(I,O,direction,distance)}switch(direction){case m:if(k.swipeLeft){k.swipeLeft.call(I,O,direction,distance)}break;case l:if(k.swipeRight){k.swipeRight.call(I,O,direction,distance)}break;case d:if(k.swipeUp){k.swipeUp.call(I,O,direction,distance)}break;case s:if(k.swipeDown){k.swipeDown.call(I,O,direction,distance)}break}}}function H(N,O){if(k.allowPageScroll==j){N.preventDefault()}else{var P=k.allowPageScroll==o;switch(O){case m:if((k.swipeLeft&&P)||(!P&&k.allowPageScroll!=v)){N.preventDefault()}break;case l:if((k.swipeRight&&P)||(!P&&k.allowPageScroll!=v)){N.preventDefault()}break;case d:if((k.swipeUp&&P)||(!P&&k.allowPageScroll!=q)){N.preventDefault()}break;case s:if((k.swipeDown&&P)||(!P&&k.allowPageScroll!=q)){N.preventDefault()}break}}}function C(){return Math.round(Math.sqrt(Math.pow(B.x-y.x,2)+Math.pow(B.y-y.y,2)))}function x(){var Q=y.x-B.x;var P=B.y-y.y;var N=Math.atan2(P,Q);var O=Math.round(N*180/Math.PI);if(O<0){O=360-Math.abs(O)}return O}function w(){var N=x();if((N<=45)&&(N>=0)){return m}else{if((N<=360)&&(N>=315)){return m}else{if((N>=135)&&(N<=225)){return l}else{if((N>45)&&(N<135)){return s}else{return d}}}}}try{this.addEventListener(b,A,false);this.addEventListener(r,D)}catch(G){}})}})(jQuery);
								
								
/**********************************************************************************/

/*
 * SearchBox
 * MIT licensed
 *
 */

(function ($) {

	$.searchBox = function (el, options) {
		this.el = $(el);
		this.init(options);
	}

	$.searchBox.DEFAULTS = {
		timerDelay: 50,
		event: 'click',
		selector: '.search-icon',
		parent: '.search-box'
	}

	$.searchBox.prototype = {
		init: function (options) {
			var self = this;
				this.o = $.extend({}, $.searchBox.DEFAULTS, options);
				this.body   = $('body');
				this.tooltip = $('.inner-tooltip', this.el);
				this.active = false;
				this.timer = false;
				this.bind();
		},
		bind: function () {
			this.body.on(this.o.event + ' mouseleave', this.o.selector, $.proxy(this.start_countdown, this));
		},
		start_countdown: function (e) {
			var $target = $(e.target), 
				type = e.type;
		
			clearTimeout(this.timer);
			
			if (type == this.o.event) {
				if ($target.is('.search-icon')) {
					e.preventDefault();
					if (this.tooltip.is(':hidden')) {
						this.timer = setTimeout($.proxy( this.display_tooltip, this, e), this.o.timerDelay);
					} else {
						this.timer = setTimeout($.proxy( this.hide_tooltip, this, e), this.o.timerDelay);
					}
				}
				 e.preventDefault();
			} else if (type == 'mouseleave') {
				this.timer = this.body.on('mousedown', $.proxy( this.hide_tooltip, this) );
			}
		},
		display_tooltip: function (e) {
			if (this.tooltip.is(':animated:visible')) return this;

			if (!this.active && this.tooltip.is(':hidden')) {
				this.tooltip.css({ opacity: 0, display: 'block' }).stop().addClass('active').animate({
					opacity: 1
				}, 300);
				this.active = true;
			}
		},
		hide_tooltip: function (e) {
			var el = $(e.target).not(this.o.selector);
			if (this.active && this.tooltip.is(':visible') && el.parents(this.o.parent).length == 0) {
				this.tooltip.stop(true, false).fadeOut(500, function () { 
					$(this).removeClass('active');
				});
				this.active = false;
			}
		}
	}

	$.fn.extend({ 
		searchBox: function (option) {
			
			if (!this.length) return this;
			
			return this.each(function () {
				var $this = $(this), data = $this.data('searchBox'),
					options = typeof option == 'object' && option;
				if (!data) {
					$this.data('searchBox', new $.searchBox(this, options));
				}
			});
		}
	});
	
})(jQuery);


/**********************************************************************************/