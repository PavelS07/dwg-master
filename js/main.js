$(document).ready(function () {

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

  // $('.portfolio-arrow-left').click(() => {
  //   $('.carousel').carousel('prev');
  // });

  // $('.portfolio-arrow-right').click(() => {
  //   $('.carousel').carousel('next');
  // });
  
  var mySwiper1 = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    hideOnClick: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  })

  function scrollToElement(element) {
    $("html").animate({
      scrollTop: element.offset().top - 100
    });
  }

});