// var apiKey = "YOUR-API-KEY-GOES-HERE";
// var corpora = require('corpora-project');
// var corporaProject = require('corpora-project');
var DinoTweet = require('./../js/dinoTweet.js').DinoTweet;
var getEmojis = require('./../js/dinoTweet.js').getEmojis;
// var emojiAPI = DinoTweet.getEmojis();
//
// console.log(emojiAPI);



// var displayFunction = function(dataReturnedFromAPI) {
//   //a bunch of jquery in here, or parse your data from the api
//   $('#emoji').html(response.seaEmoji[Math.floor((Math.random() * response.seaEmoji.length) + 1)]);
// }


$(document).ready(function() {

  $('.btn').click(function() {
    // console.log(getEmojis());
    getEmojis();
    // var newEmoji = getEmojis();
    //
    // var newDinoTweet = new DinoTweet(newEmoji, ..);

    $.get('/verb.json').then(function(response) {
      $('#verb').html(response.verbs[Math.floor((Math.random() * response.verbs.length) + 1)].past);
    });

    $.get('/emoji.json').then(function(response) {
      $('#emoji').html(response.seaEmoji[Math.floor((Math.random() * response.seaEmoji.length) + 1)]);
    });

    $.get('/occupation.json').then(function(response) {
      $('#occupation').html(response.occupations[Math.floor((Math.random() * response.occupations.length) + 1)]);
    });

    $.get('http://corpora-api.herokuapp.com/corporations/fortune500').then(function(response) {
      $('#companies').html(response.data.companies[Math.floor((Math.random() * response.data.companies.length) + 1)]);
    });

    $.get('http://corpora-api.herokuapp.com/foods/fruits').then(function(response) {
      $('#fruits').html(response.data.fruits[Math.floor((Math.random() * response.data.fruits.length) + 1)]);
    });

      $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response){
        $('#dinos').text(response.replace(".", "").replace("<p>", "").replace("</p>", ""));
    });

      $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response){
        $('#dinoCeo').text(response.replace(".", "").replace("<p>", "").replace("</p>", ""));
    }, function() {
      console.log('Where did all the dinosaurs go?');
    });
   });
  });
