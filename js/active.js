(function ($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip();

    // :: Owl Carousel Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        $('.hero-post-slide').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 1000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });

        $('.world-catagory-slider, .world-catagory-slider2').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }

    // :: Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.sonar-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.sonar-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.gallery-img').magnificPopup({
            type: 'image'
        });
        $('.video-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // :: MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equalize').matchHeight({
            byRow: true,
            property: 'height'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    /* Search Area */
    var search = document.getElementById('search'),
        searchWrapper = document.getElementById('search-wrapper'),
        closeIcon = document.getElementById('close-icon');
    search.onfocus = function () {
        searchWrapper.classList.add('search-expanded');
        this.addEventListener('transitionend', function () {
            closeIcon.style.display = 'block';
        });
    };
    search.onblur = function () {
        searchWrapper.classList.remove('search-expanded');
        closeIcon.classList.add('closing');
        this.addEventListener('transitionend', function () {
            closeIcon.classList.remove('closing');
            closeIcon.style.display = 'none';
        });
    };
    closeIcon.onclick = function () {
        this.classList.add('closing');
        document.activeElement.blur();
        setTimeout(function () {
            closeIcon.classList.remove('closing');
        }, 1000);
    };

})(jQuery);

function initializeModal(modalID, buttonID) {
  // Get the modal element
  var modal = document.getElementById(modalID);

  // Get the button that opens the modal
  var btn = document.getElementById(buttonID);

  // Get the <span> element that closes the modal
  var span = modal.querySelector('.close');

  // When the user clicks on the button, open the modal
  btn.addEventListener('click', function() {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

window.addEventListener('load', function() {
  initializeModal('myModal', 'myBtn');
  initializeModal('myModal1', 'myBtn1');
  initializeModal('myModal2', 'myBtn2');
  initializeModal('myModal3', 'myBtn3');
  initializeModal('myModal4', 'myBtn4');
  initializeModal('myModal5', 'myBtn5');
  initializeModal('myModal6', 'myBtn6');
  initializeModal('myModal7', 'myBtn7');
  initializeModal('myModal8', 'myBtn8');
  initializeModal('myModal9', 'myBtn9');
  initializeModal('myModal10', 'myBtn10');
  initializeModal('myModal11', 'myBtn11');
  initializeModal('myModal12', 'myBtn12');
  initializeModal('myModal13', 'myBtn13');
  initializeModal('myModal14', 'myBtn14');
  initializeModal('myModal15', 'myBtn15');
  initializeModal('myModal16', 'myBtn16');
  initializeModal('myModal17', 'myBtn17');
  initializeModal('myModal18', 'myBtn18');
  initializeModal('myModal19', 'myBtn19');
  initializeModal('myModal20', 'myBtn20');
  initializeModal('myModal21', 'myBtn21');
  initializeModal('myModal22', 'myBtn22');
  initializeModal('myModal23', 'myBtn23');
  initializeModal('myModal24', 'myBtn24');
  initializeModal('myModal25', 'myBtn25');
  initializeModal('myModal26', 'myBtn26');
  initializeModal('myModal27', 'myBtn27');
  initializeModal('myModal28', 'myBtn28');
  initializeModal('myModal29', 'myBtn29');
  initializeModal('myModal30', 'myBtn30');
  initializeModal('myModal31', 'myBtn31');
  initializeModal('myModal32', 'myBtn32');
  initializeModal('myModal33', 'myBtn33');
  initializeModal('myModal34', 'myBtn34');
  initializeModal('myModal35', 'myBtn35');
  initializeModal('myModal36', 'myBtn36');
  initializeModal('myModal37', 'myBtn37');
  initializeModal('myModal38', 'myBtn38');
  initializeModal('myModal39', 'myBtn39');
  initializeModal('myModal40', 'myBtn40');
  initializeModal('myModal41', 'myBtn41');
  initializeModal('myModal42', 'myBtn42');
  initializeModal('myModal43', 'myBtn43');
  initializeModal('myModal44', 'myBtn44');
  initializeModal('myModal45', 'myBtn45');
  initializeModal('myModal46', 'myBtn46');
  initializeModal('myModal47', 'myBtn47');
  initializeModal('myModal48', 'myBtn48');
  initializeModal('myModal49', 'myBtn49');
  initializeModal('myModal50', 'myBtn50');
  initializeModal('myModal51', 'myBtn51');
  initializeModal('myModal52', 'myBtn52');
  initializeModal('myModal53', 'myBtn53');
});