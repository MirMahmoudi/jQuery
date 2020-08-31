// This Function was written to get specific numbers of Gif with specific subject from Tenor through an API

function loadPics(my_subject, my_number){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.tenor.com/v1/search?q='+ my_subject +'&key=LIVDSRZULELA&limit=' + my_number);
  xhr.onload = function(){
    if(this.status == 200){
      var loaded_pic = JSON.parse(this.responseText);
      var my_output = '';
      var output = loaded_pic.results;
      // if condition for checking if the loaded Gifs array(var output) is empty or not!
      if(output.length > 0){
        for (var i in output){
          my_output += '<img src="' + loaded_pic.results[i].media[0].gif.url + '" class="images">';
        };
        document.getElementById('pics').innerHTML = my_output;
      }else{ // if the loaded Gifs array(var output) is empty give a warning message
        let warning_msg = ''
        warning_msg = '<p id="war_para">Sorry, nothing to show for your subject! Please try again and put a new subject.</p>';
        document.getElementById('pics').innerHTML = warning_msg;
      };
    };
  };
  xhr.send();
};

//----------------------------------------------------------------------------
/* for checking the number of Gifs that was requested should be between 1 & 50
   for checking the subject should not be empty */

function check_input(my_subject, my_number){
  if(my_number > 0 && my_number <= 50 && my_subject != ''){
    loadPics(my_subject, my_number);
  }else if(my_number < 1 || my_number > 50){
    let warning_msg = ''
    warning_msg = '<p id="war_para">Please enter a number between 1 & 50.</p>';
    document.getElementById('pics').innerHTML = warning_msg;
  }else if(my_subject == ''){
    let warning_msg = ''
    warning_msg = '<p id="war_para">Please enter a topic.</p>';
    document.getElementById('pics').innerHTML = warning_msg;
  }
};

//----------------------------------------------------------------------------
/* click function to send the number and subject of the Gifs that was requested after click in the "search" button */

$('#btn_search').click(function(){
  let my_subject = $('#your_subject').val();
  var my_number = $('#your_number').val();
  check_input(my_subject, my_number);
});

//----------------------------------------------------------------------------
/* keypress function to send the number and subject of the Gifs that was requested after press the "enter" key. the ascii keycode for "enter" is 13*/

$('#your_subject').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    let my_subject = $('#your_subject').val();
    var my_number = $('#your_number').val();
    check_input(my_subject, my_number);
  }
});

$('#your_number').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    let my_subject = $('#your_subject').val();
    var my_number = $('#your_number').val();
    check_input(my_subject, my_number);
  }
});

//----------------------------------------------------------------------------
/* Request 50 Gifs from Tenor by mentioned Subject that are existed in the dorp down of the menu bar
The subjects are: Tenor Gif!, Mano, Matrix Master, programming, The Netherlands */

$('#tenor').click(function(){
  let my_subject = 'Tenor Gif!'
  var my_number = 50;
  check_input(my_subject, my_number);
});

$('#mano').click(function(){
  let my_subject = 'Mano';
  var my_number = 50;
  check_input(my_subject, my_number);
});

$('#matrixMaster').click(function(){
  let my_subject = 'Matrix Master';
  var my_number = 50;
  check_input(my_subject, my_number);
});

$('#prog').click(function(){
  let my_subject = 'programming';
  var my_number = 50;
  check_input(my_subject, my_number);
});

$('#neder').click(function(){
  let my_subject = 'The Netherlands';
  var my_number = 50;
  check_input(my_subject, my_number);
});

//----------------------------------------------------------------------------
/* Small funny thing for Aboud! By clicking the last element of the dropdown of the menu bar */

$('#aboud').click(function(){
  let aboud_output = '<img src="https://media.tenor.com/images/ac9cf136a3c0f857e436c32561e9b6e8/tenor.gif" class="images">' +
  '<br>' +
  '<button id="click_me">Click me!</button>';
  document.getElementById('pics').innerHTML = aboud_output;
  aboud_output += '<br>' + '<br>' +
  '<p id="msg_aboud">I am looking forward Python Courses in Back End!</p>'
  $('#click_me').click(function(){
    document.getElementById('pics').innerHTML = aboud_output;
  });
});