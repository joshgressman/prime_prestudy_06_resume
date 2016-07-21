
$(document).ready(function (){
  $('button').hover(function(){
    $(this).css('background-color', '#00e600');
  }, function () {
    $(this).css("background-color", '#3399ff');
  $('button').on('click', function () {
    $('.hide').removeClass('hide');
    $('button').remove();
  });
  });
});
