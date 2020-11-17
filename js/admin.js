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
    let countCondition = $(this).siblings('.admin-block-conditions').find('.number-condition').filter(':last').text();
    countCondition = parseInt(countCondition) + 1;
    html = '<div class="number-condition-block"><span class="number-condition">' + countCondition + '</span></div><textarea id="textarea1" class="materialize-textarea" name="conditions[]" required></textarea>';
    $(this).siblings('.admin-block-conditions').append(html);
  });
  
});