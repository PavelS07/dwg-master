$(document).ready(function () {
  let width = $(window).width();

  if(width <= 768) {
    $('.materialboxed').removeClass('materialboxed');
  }

  $('.header').click((event) => {
    let toElementString = event.target.id.split('-')[0];

    if (toElementString) {
      let toElement = $('.' + toElementString);

      scrollToElement(toElement);
    }

  })

  $('.mobile-menu').click((event) => {
    let toElementString = event.target.id.split('-')[0];

    if (toElementString && toElementString != 'slide') {
      let toElement = $('.' + toElementString);
      $('.sidenav').sidenav('close');

      scrollToElement(toElement);
    }

  })

  $(document).ready(function () {
    $('.materialboxed').materialbox();
  });

  $(document).ready(function () {
    $('.sidenav').sidenav({
      edge: 'left'
    });
  });

  // $('.carousel.carousel-slider').carousel({
  //   fullWidth: false,
  //   noWrap: true, 
  //   numVisible: 1
  // });
  
  var mySwiper1 = new Swiper('.swiper-container', {
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

  var mySwiperReviews = new Swiper('.swiper-container-reviews', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  $('.carousel').carousel({
    fullWidth: false,
    numVisible: 3
  });

  $('.reviews-arrow-left').click(() => {
    $('.carousel').carousel('prev');
  });

  $('.reviews-arrow-right').click(() => {
    $('.carousel').carousel('next');
  });

  function scrollToElement(element) {
    $("html").animate({
      scrollTop: element.offset().top - 100
    });
  }

});