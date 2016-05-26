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
    console.log(newEmoji);
    displayEmoji(newEmoji);
  });
};

exports.getVerb = function(displayVerb) {
  var newVerb = $.get('/verb.json').then(function(response) {
    newVerb = response.verbs[Math.floor((Math.random() * response.verbs.length) + 1)].past;
    console.log(newVerb);
    displayVerb(newVerb);
  });
};

exports.getOccupation = function(displayOccupation) {
  var newOccupation = $.get('/occupation.json').then(function(response) {
    newOccupation = response.occupations[Math.floor((Math.random() * response.occupations.length) + 1)];
    console.log(newOccupation);
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
