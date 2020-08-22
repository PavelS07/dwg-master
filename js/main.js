$(document).ready(function () {
  let width = $(window).width();

  if (width <= 768) {
    $('.portfolio-img').removeClass('materialboxed');
  }

  $('.header').click((event) => {
    let toElementString = event.target.id.split('-')[0];

    if (toElementString) {
      let toElement = $('.' + toElementString);

      scrollToElement(toElement);
    }

  });

  $('.mobile-menu').click((event) => {
    let toElementString = event.target.id.split('-')[0];

    if (toElementString && toElementString != 'slide') {
      let toElement = $('.' + toElementString);
      $('.sidenav').sidenav('close');

      scrollToElement(toElement);
    }

  });

  $('.comment-mobile-menu').click(() => {
    $('.sidenav').sidenav('close');
    $("html").animate({
      scrollTop: $('.reviews').offset().top - 160,
    });
  });

  $('.materialboxed').materialbox();  

  $('.sidenav').sidenav({
    edge: 'left'
  });

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    hideOnClick: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,
    }
  });

  $('.slick-vertical').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    draggable: false,
    swipe: false,
    infinite: false,
    prevArrow: '.reviews-arrow-left.social',
    nextArrow: '.reviews-arrow-right.social',
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 2,
	      }
	    }
    ]
  });


  $('.carousel').carousel({
    fullWidth: false,
    numVisible: 3
  });


  $('.reviews-arrow-left.site').click(() => {
    $('.carousel').carousel('prev');
  });

  $('.reviews-arrow-right.site').click(() => {
    $('.carousel').carousel('next');
  });

  function scrollToElement(element) {
    $("html").animate({
      scrollTop: element.offset().top - 100
    });
  }
});