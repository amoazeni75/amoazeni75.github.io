;
(function($) {
    "use strict";
    var nav_offset_top = $('.header_area').offset().top;

    function stickyHeader() {
        if ($('.header_area').length) {
            var strickyScrollPos = nav_offset_top;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.header_area').removeClass('fadeIn animated');
                $('.header_area').addClass('stricky-fixed fadeInDown animated')
            } else if ($(window).scrollTop() <= strickyScrollPos) {
                $('.header_area').removeClass('stricky-fixed fadeInDown animated');
                $('.header_area').addClass('slideIn animated')
            }
        }
    }
    $(window).on('scroll', function() {
        stickyHeader()
    })
    $(".skill_item_inner").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx) {
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

    function our_gallery() {
        if ($('.portfolio_area').length) {
            $(".portfolio_list_inner").imagesLoaded(function() {
                $(".portfolio_list_inner").isotope({
                    itemSelector: ".col-md-4",
                });
            });
            $(".porfolio_menu ul li").on('click', function() {
                $(".porfolio_menu ul li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr("data-filter");
                $(".portfolio_list_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    our_gallery();

    function blog_slider() {
        if ($('.blog_slider_inner').length) {
            $('.blog_slider_inner').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                autoplay: false,
                smartSpeed: 1500,
                navContainer: '.blog_slider_area',
                navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']
            });
        }
    }
    blog_slider();
    if ($('#mapBox').length) {
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
            styles: [{
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "hue": "#ff0000"
                }]
            }]
        });
    }
    $('.header_area .nav.navbar-nav li a[href^="#"]:not([href="#"])').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1500);
        event.preventDefault();
    });

    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
    // $(window).load(function() {
    //     $('#preloader_spinner').fadeOut();
    //     $('#preloader').delay(150).fadeOut('slow');
    //     $('body').delay(150).css({
    //         'overflow': 'visible'
    //     })
    // })
    $(window).load(function() {

        $(".loader_inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");
    
    });
})(jQuery)


document.getElementById("button_more_less_1").onclick = showMoreAndLess;
document.getElementById("button_more_less_2").onclick = showMoreAndLess;
document.getElementById("button_more_less_3").onclick = showMoreAndLess;

function showMoreAndLess(){
    // let button_show_more = document.getElementById("button_more_less_1");
    let id = this.getAttribute('part_number');
    let div_more = document.getElementById("show_more_"+id);
    if(div_more.style.display != "none"){
        this.innerHTML = "Read more"; 
        div_more.style.display = "none";
    }else{
        this.innerHTML = "Read less"; 
        div_more.style.display = "inline";
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
}