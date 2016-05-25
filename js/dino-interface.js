// var apiKey = "YOUR-API-KEY-GOES-HERE";
// var corpora = require('corpora-project');
// var corporaProject = require('corpora-project');

$(document).ready(function() {
  // console.log(corpora.getCategories());

  $('.btn').click(function() {
    // $('#emoji').text(corpora.getFile('emojis', 'sea_emoji'));
    $.get('/sentence.json').then(function(response) {
      $('#verb').html(response.sentenceStructure[Math.floor((Math.random() * 7) + 1)]);
    });

    $.get('/emoji.json').then(function(response) {
      $('#emoji').html(response.seaEmoji[Math.floor((Math.random() * 16) + 1)]);
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
