console.log('your index javascript has been loaded...')

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle(5000);
    });
  });