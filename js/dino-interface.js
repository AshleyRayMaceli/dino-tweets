// var apiKey = "YOUR-API-KEY-GOES-HERE";

$(document).ready(function() {

  $('.button').click(function() {

    $.get('/emoji.json').then(function(response) {
      $('#emoji').html(response.seaEmoji);
      console.log(response);
    });

    $.get('http://corpora-api.herokuapp.com/corporations/fortune500').then(function(response) {
      $('#companies').html(response.data.companies[Math.floor((Math.random() * 499) + 1)]);

    });

    $.get('http://corpora-api.herokuapp.com/foods/fruits').then(function(response) {
      $('#fruits').html(response.data.fruits[Math.floor((Math.random() * 79) + 1)]);
    
    });

      $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response){
        $('#dinos').html(response);

    }, function() {
      console.log('Where did all the dinosaurs go?');
    });
   });
  });
