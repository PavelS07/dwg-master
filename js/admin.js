$(document).ready(function () {
  let width = $(window).width();

  if (width <= 768) {
    $('.bg-love').attr('height', '100%')
  }

  $('.heart').click( ()=> {
    $('.bg-love').hide(1000);
    $('.form-auth').show(2000);
  });
});