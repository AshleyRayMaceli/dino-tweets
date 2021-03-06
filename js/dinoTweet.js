exports.DinoTweet = function(emoji, verb, dino, job, fruit, corporation) {
  this.emoji = emoji;
  this.verb = verb;
  this.dino = dino;
  this.job = job;
  this.fruit = fruit;
  this.corporation = corporation;
};

exports.getEmoji = function(displayEmoji) {
  var newEmoji = $.get('/emoji.json').then(function(response) {
    newEmoji = response.seaEmoji[Math.floor((Math.random() * response.seaEmoji.length) + 1)];
    displayEmoji(newEmoji);
  });
};

exports.getVerb = function(displayVerb) {
  var newVerb = $.get('/verb.json').then(function(response) {
    newVerb = response.verbs[Math.floor((Math.random() * response.verbs.length) + 1)].past;
    displayVerb(newVerb);
  });
};

exports.getOccupation = function(displayOccupation) {
  var newOccupation = $.get('/occupation.json').then(function(response) {
    newOccupation = response.occupations[Math.floor((Math.random() * response.occupations.length) + 1)];
    displayOccupation(newOccupation);
  });
};

exports.getCompany = function(displayCompany) {
  var newCompany = $.get('http://corpora-api.herokuapp.com/corporations/fortune500').then(function(response) {
    newCompany = response.data.companies[Math.floor((Math.random() * response.data.companies.length) + 1)];
    displayCompany(newCompany);
  });
};

exports.getFruit = function(displayFruit) {
  var newFruit = $.get('http://corpora-api.herokuapp.com/foods/fruits').then(function(response) {
    newFruit = response.data.fruits[Math.floor((Math.random() * response.data.fruits.length) + 1)];
    displayFruit(newFruit);
  });
};

exports.getDino = function(displayDino) {
  var newDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response) {
    newDino= response.replace(".", "").replace("<p>", "").replace("</p>", "");
    displayDino(newDino);
  });
};
exports.getDinoTwitter = function(displayDinoTwitter) {
  var newDinoTwitter = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response) {
    newDinoTwitter = response.replace(".", "").replace("<p>", "").replace("</p>", "");
    displayDinoTwitter(newDinoTwitter);
  });
};

// exports.getTweet = function(displayTweet) {
//
//   var newEmoji = $.get('/emoji.json').then(function(response) {
//     newEmoji = response.seaEmoji[Math.floor((Math.random() * response.seaEmoji.length) + 1)];
//     console.log(newEmoji);
//   });
//
//   var newVerb = $.get('/verb.json').then(function(response) {
//     newVerb = response.verbs[Math.floor((Math.random() * response.verbs.length) + 1)].past;
//   });
//
//   var newOccupation = $.get('/occupation.json').then(function(response) {
//     newOccupation = response.occupations[Math.floor((Math.random() * response.occupations.length) + 1)];
//   });
//
//   var newCompany = $.get('http://corpora-api.herokuapp.com/corporations/fortune500').then(function(response) {
//     newCompany = response.data.companies[Math.floor((Math.random() * response.data.companies.length) + 1)];
//   });
//
//   var newFruit = $.get('http://corpora-api.herokuapp.com/foods/fruits').then(function(response) {
//     newFruit = response.data.fruits[Math.floor((Math.random() * response.data.fruits.length) + 1)];
//   });
//
//   var newDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response) {
//     newDino= response.replace(".", "").replace("<p>", "").replace("</p>", "");
//   });
//
//   var newDinoTwitter = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response) {
//     newDinoTwitter = response.replace(".", "").replace("<p>", "").replace("</p>", "");
//   });
//
//   var sentence = "<div id= 'tweet'>" + "<h2>" + newDinoTwitter + " Dinosaur" + newCompany + "</h2>" + "<div>" + newDino + + newVerb + "my" + newFruit + "I'm gonna quit" + newOccupation + newEmoji + "</div>" + "</div>";
//
//   displayTweet(sentence);
// };
