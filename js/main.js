$(document).ready(function () {
  let width = $(window).width();

  if (width <= 576) {
    // Check length text reviews
    fullToShortText(100);
  }

  if (width <= 768) {
    $('.portfolio-img').removeClass('materialboxed');
    $('.social-comment-img').removeClass('materialboxed');
  }

  if (width <= 991) {
    // Check length text reviews
    fullToShortText(320);
  }

  if (width <= 1400 && width > 991) {
    // Check length text reviews
    fullToShortText(180);
  }

  if(width > 1400) {
    // Check length text reviews
    fullToShortText(360);
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
    infinite: false,
    prevArrow: '.reviews-arrow-left.social',
    nextArrow: '.reviews-arrow-right.social',
    responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
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

  $('.modal').modal();

  // Short text reviews
  $('.card').delegate('.read-more', 'click', function () {
    let $fullTextReview = $(this).siblings('.full-text').text();
    let $cardName = $(this).siblings('.card-title').find('.card-name').text();
    $('.modal-text').text($fullTextReview);
    $('.modal-title').text($cardName);
  });

  // @fullToShortText - transform the full text in short text 
  // @lengthString - integer 
  function fullToShortText(lengthString) {
    $('.card-text').each((i, obj) => {

      if($(obj).text().trim().length > lengthString) {
        $(obj).text((i, text)=>{
          let shortText = text.substring(0, lengthString - 10) + '...';
          $(obj).hide();
          $(obj).parent('.card').append('<p class="card-text short-text">' + shortText + '</p>');
        });
        $(obj).parent('.card').append('<span class="read-more modal-trigger" href="#modal1">Читать</span>');
      }
  
    });
  }

  function scrollToElement(element) {
    $("html").animate({
      scrollTop: element.offset().top - 100
    });
  }
});