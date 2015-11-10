'use strict';

$(document).ready(init);

function init(){
  $('#convert').on('click',convert);
}

function convert(){
  var text = $('#input').val();
  $.post('/convert',{text:text})
  .done(function(data){
    $('#output').empty().append($.parseHTML(data));
  })
  .fail(function(err){
    console.log(err);
  })
}





