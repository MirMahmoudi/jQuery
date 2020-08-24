// $(document).ready(function(){
//   $('#btn_f_out').click(function(){
//     $('#p_f_out').fadeOut('slow');
//   });


// });

$('#btn_f_out').click(function(){
  $('#p_fade').fadeOut();
});

$('#btn_f_in').click(function(){
  $('#p_fade').fadeIn();
});

$('#btn_tog_f').click(function(){
  $('#p_fade').fadeToggle();
});

$('#btn_append').click(function(){
  $('#p_append').append('<span id="span1">append add to the end</span>');
  $('#span1').css('color', 'green');
});

$('#btn_prepend').click(function(){
  $('#p_append').prepend('<span id="span2">prepend add to the beginning</span>');
  $('#span2').css('color', 'red');
});

$('#btn_detach').click(function(){
  $('#span2').detach();
  $('#span1').detach();
});



$('#btn_ch_color').click(function(){
  $('#p_ch_color').addClass('change_color');
});

$('#btn_html').click(function(){
  var temp_text = '';
  if($('#html_txt_area').val() === ''){
    $('#p_html_input').addClass('warning');
    $('#p_html_input').text('please write your text in text box.');
  }else{
    $('#p_html_input').removeClass('warning');
    $('#p_html_input').addClass('add_txt');
    $('#p_html_input').html($('#html_txt_area').val());
  }
});