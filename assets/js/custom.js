$(document).ready(function(){
    // header scrolled toggle
    $(window).on('scroll', function(){
        $('body').toggleClass('header_scrolled', $(window).scrollTop() > 30);
    });

    // testimonial slider
    $('#la-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../assets/images/icons/up_arrow_icon.svg" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../assets/images/icons/down_arrow_icon.svg" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    });    

    // company logo slider
    let owl = $('#logo-slider');
    owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      },
      onTranslated: highlightCenter
    });
    function highlightCenter() {
        let visibleItems = owl.find('.owl-item.active');
        let middleIndex = Math.floor((visibleItems.length - 1) / 2);
        console.log('Visible Items:', visibleItems.length, 'Middle Index:', middleIndex);
        visibleItems.find('.logo-item').removeClass('active-center');
        visibleItems.eq(middleIndex).find('.logo-item').addClass('active-center');
    }
});

