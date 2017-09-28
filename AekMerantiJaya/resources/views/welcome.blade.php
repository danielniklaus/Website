<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="header wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
        <div class="container">
            <div class="logo">
                <h1><a href="index.html"><i><img src="images/logo.png" alt="" /></i>Mega Power<span>A Best Industry</span></a></h1>
            </div>
            <div class="header-left">
                <nav class="navbar navbar-default">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                        <div class="header-right search">
                            <form action="#" method="post">
                                <input type="search" name="Search" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}" required="">
                                <input type="submit" value=" ">
                            </form>
                        </div>
                        <nav class="link-effect-9" id="link-effect-9">
                            <ul class="nav navbar-nav">
                                <li class="active"><a class="hvr-bounce-to-bottom" href="index.html">Home</a></li>
                                <li><a href="services.html" class="hvr-bounce-to-bottom">Services</a></li>
                                <li><a href="gallery.html" class="hvr-bounce-to-bottom">Gallery</a></li>
                                <li><a href="codes.html" class="hvr-bounce-to-bottom">Short Codes</a></li>
                                <li><a href="contact.html" class="hvr-bounce-to-bottom">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <!-- /.navbar-collapse -->
                </nav>
            </div>
        </div>
    </div>
<!-- //header -->
<!-- banner -->
<div class="banner">
    <div class="container">
        <div class="banner-info">
            <div class="col-md-7 banner-left wow flipInY" data-wow-duration="1.5s" data-wow-delay="0s">
                <h3>Welcome To <span> Mega Power Industrial </span> Manufacturer and Exporter</h3>
                <p>Sed ut perspiciatis unde omnis.</p>
                <a class="hvr-outline-out scroll" href="#about">See More About Us</a>
            </div>
            <div class="col-md-5 banner-right wow flipInY" data-wow-duration="1.5s" data-wow-delay="0s">
                    <div class="ban-icon ban-col1">
                        <img src="images/icon1.png" alt="" />
                    </div>
                    <div class="ban-icon ban-col2">
                        <img src="images/icon2.png" alt="" />
                    </div>
                    <div class="ban-icon3">
                    <img src="images/icon3.png" alt="" />
                    </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!-- //banner -->
<!-- banner-bottom -->
<div id="about" class="banner-bottom wow bounceInUp" data-wow-duration="1s" data-wow-delay="0s">
    <div class="container">
        <h3>About Us</h3>
        <p class="para1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        <div class="col-md-4 bottom-grid multi-gd-text">
            <a href="gallery.html"><img src="images/pic6.jpg" alt=" "/></a>
        </div>
        <div class="col-md-4 bottom-grid mar-pad">
                <script>
                        // You can also use "$(window).load(function() {"
                        $(function () {
                         // Slideshow 4
                        $("#slider3").responsiveSlides({
                            auto: true,
                            pager: true,
                            nav: false,
                            speed: 500,
                            namespace: "callbacks",
                            before: function () {
                        $('.events').append("<li>before event fired.</li>");
                        },
                        after: function () {
                            $('.events').append("<li>after event fired.</li>");
                            }
                            });
                        });
                </script>
            <div  id="top" class="callbacks_container">
                <ul class="rslides" id="slider3">
                    <li>
                        <h4>Exercitationem</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                            qui blanditiis.</p>
                    </li>
                    <li>
                        <h4>Dignissimos</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                            qui blanditiis.</p>
                    </li>
                    <li>
                        <h4>Exercitationem</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                            qui blanditiis.</p>
                    </li>
                    <li>
                        <h4>Dignissimos</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                            qui blanditiis.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-4 bottom-grid multi-gd-text">
            <a href="gallery.html"><img src="images/pic7.jpg" alt=" "/></a>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!-- //banner-bottom -->
<!-- services -->
<div class="main_ser">
    <div class="container">
        <div class="col-md-7 main_ser_one wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
            <h3>Our Technology</h3>
            <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
            aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. </p>
            <div class="cont-grids">
                <div class="col-sm-6 cont-grid-one">
                    <div class="cont-grid-left wel-grid">
                        <div class="btm-clr4">
                            <figure class="icon">
                                <img src="images/icon1.png" alt=" " />
                            </figure>
                        </div>
                    </div>
                    <div class="cont-grid-right">
                        <h4>Voluptatem</h4>
                        <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="col-sm-6 cont-grid-one">
                    <div class="cont-grid-left wel-grid">
                        <div class="btm-clr4">
                            <figure class="icon">
                                <img src="images/icon2.png" alt=" " />
                            </figure>
                        </div>
                    </div>
                    <div class="cont-grid-right">
                        <h4>Voluptatem</h4>
                        <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="col-sm-6 cont-grid-one yes_magr">
                    <div class="cont-grid-left wel-grid">
                        <div class="btm-clr4">
                            <figure class="icon">
                                <img src="images/icon3.png" alt=" " />
                            </figure>
                        </div>
                    </div>
                    <div class="cont-grid-right">
                        <h4>Voluptatem</h4>
                        <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="col-sm-6 cont-grid-one yes_magr">
                    <div class="cont-grid-left wel-grid">
                        <div class="btm-clr4">
                            <figure class="icon">
                                <img src="images/icon1.png" alt=" " />
                            </figure>
                        </div>
                    </div>
                    <div class="cont-grid-right">
                        <h4>Voluptatem</h4>
                        <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="col-md-5 main_ser_two wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
            <img class="img-responsive" src="images/pic3.jpg" alt=" "/>
            <h4>Consequuntur Voluptatem</h4>
                <div class="accordion">
                            <div class="accordion-section">
                                <a class="accordion-section-title" href="#accordion-1">Voluptatem Accusantium <i class="glyphicon glyphicon-chevron-down"></i><div class="clearfix"></div>
                                </a>
                                <div id="accordion-1" class="accordion-section-content">
                                    <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
                                </div>
                            </div>

                            <div class="accordion-section">
                                <a class="accordion-section-title" href="#accordion-2">Interdum Fringilla<i class="glyphicon glyphicon-chevron-down"></i><div class="clearfix"></div>
                                </a>
                                <div id="accordion-2" class="accordion-section-content">
                                    <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
                                </div>
                            </div>

                            <div class="accordion-section">
                                <a class="accordion-section-title" href="#accordion-3">Curabitur Vitae <i class="glyphicon glyphicon-chevron-down"></i><div class="clearfix"></div>
                                </a>
                                <div id="accordion-3" class="accordion-section-content">
                                    <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
                                </div>
                            </div>
                            
                            
                </div>
                <script>
                            jQuery(document).ready(function() {
                                function close_accordion_section() {
                                    jQuery('.accordion .accordion-section-title').removeClass('active');
                                    jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                                }

                                jQuery('.accordion-section-title').click(function(e) {
                                    // Grab current anchor value
                                    var currentAttrValue = jQuery(this).attr('href');

                                    if(jQuery(e.target).is('.active')) {
                                        close_accordion_section();
                                    }else {
                                        close_accordion_section();

                                        // Add active class to section title
                                        jQuery(this).addClass('active');
                                        // Open up the hidden content panel
                                        jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
                                    }

                                    e.preventDefault();
                                });
                            });
                </script>

        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!-- //services -->
<!-- treatments -->
<div class="treatments">
    <h3>What We Do</h3>
    <p class="para1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
    <div class="col-md-4 treat-grids treat-pad wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0s">
        <h5>Our Featured Services</h5>
        <ul>
            <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Voluptatem accusantium volup</a></li>
            <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
            <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
            <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
            <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
        </ul>
    </div>
    <div class="col-md-4 treat-grids grid wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">   
        <figure class="effect-apollo">
            <img src="images/pic8.jpg" alt=" "/>
                <figcaption>
                    <p>Test Engineers</p>
                </figcaption>           
        </figure>
    </div>
    <div class="col-md-4 treat-grids treat-pad wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
        <h5>Smart Test Engineers</h5>
            <ul>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Voluptatem accusantium volup</a></li>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
            </ul>
    </div>
    <div class="col-md-4 treat-grids grid wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">   
        <figure class="effect-apollo">
            <img src="images/pic9.jpg" alt=" "/>
                <figcaption>
                    <p>Test Engineers</p>
                </figcaption>           
        </figure>
    </div>
    <div class="col-md-4 treat-grids treat-head treat_mar wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
        <h4>Our Best Constructors</h4>
        <p>At vero eos et accusamus et iusto 
        odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque 
        corrupti quos dolores et quas molestias 
        except.</p>
        <p>At vero eos et accusamus et iusto 
        odio dignissimos ducimus qui blanditiis.</p>
    </div>
    <div class="col-md-4 treat-grids grid treat_mar wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">
        <figure class="effect-apollo">
            <img src="images/pic10.jpg" alt=" "/>
                <figcaption>
                    <p>Test Engineers</p>
                </figcaption>           
        </figure>
    </div>
    <div class="clearfix"></div>
</div>
<!-- //treatments -->

<!-- footer -->
<div class="footer">
    <div class="container">
        <h2>Get In Touch</h2>
        <p class="para">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        <div class="col-md-6 footer-left wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
            <div class="col-sm-2 foo-left text-center">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </div>
            <div class="col-sm-10 foo-right">
                <h4>Information</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                qui blanditiis.</p>
                <ul class="fb_icons">
                    <li><a class="fb" href="#"></a></li>
                    <li><a class="twit" href="#"></a></li>
                    <li><a class="goog" href="#"></a></li>
                    <li><a class="pin" href="#"></a></li>
                    <li><a class="drib" href="#"></a></li>
                </ul>

            </div>
            <div class="clearfix"></div>
        </div>
        <div class="col-md-6 footer-right wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
            <div class="col-sm-2 foo-left text-center">
                <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
            </div>
            <div class="col-sm-10 foo-right">
                <h4>Newsletter</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis.</p>
                <form action="#" method="post">
                    <input type="text" name="Your email" value="Your email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your email';}" required="">
                    <input type="submit" value="Subscribe">
                </form>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
        <p class="copy-right">&copy; 2016 Mega Power. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
    </div>
</div>
<!-- //footer -->
<!-- smooth scrolling -->
    <script type="text/javascript">
        $(document).ready(function() {
        /*
            var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear' 
            };
        */                              
        $().UItoTop({ easingType: 'easeOutQuart' });
        });
    </script>
    <a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
<!-- //smooth scrolling -->
<script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>
    </body>
</html>
