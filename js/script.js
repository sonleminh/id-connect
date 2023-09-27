$('.custom-carousel').owlCarousel({
  autoWidth: true,
  loop: true,
  dots: false,
});
$(document).ready(function () {
  $('.custom-carousel .item').click(function () {
    $('.custom-carousel .item').not($(this)).removeClass('active');
    $(this).toggleClass('active');
  });
});

// Slider

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    infinity: true,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $('.slider2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    infinity: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $('.slider3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    infinity: true,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    infinity: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  });
});
