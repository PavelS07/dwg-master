$(document).ready(function () {
  let width = $(window).width();

  if (width <= 768) {
    $('.bg-love').attr('height', '100%')
  }

  $('.heart').click( ()=> {
    $('.bg-love').hide(1000);
    $('.form-auth').show(2000);
  });

  $('.dropdown-trigger').dropdown({
    alignment:'left',
    constrainWidth: false,
  });

  $('.admin-add-condition').delegate('.add-condition-button', 'click', function() {
    $(this).siblings('.admin-block-conditions').append('<input value="Название" type="text" class="validate" name="conditions[]" required>');
  });
  
});