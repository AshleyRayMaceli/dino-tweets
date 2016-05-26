exports.DinoTweet = function(emoji, verb, dino, job, fruit, corporation) {
  this.emoji = emoji;
  this.verb = verb;
  this.dino = dino;
  this.job = job;
  this.fruit = fruit;
  this.corporation = corporation;
};

exports.getEmoji = function() {
  var newEmoji = $.get('/emoji.json').then(function(response) {
    newEmoji = response.seaEmoji[Math.floor((Math.random() * response.seaEmoji.length) + 1)];
    console.log(newEmoji);
    return newEmoji;
  });
};

exports.getVerb = function() {
  var newVerb = $.get('/verb.json').then(function(response) {
    newVerb = response.verbs[Math.floor((Math.random() * response.verbs.length) + 1)].past;
    console.log(newVerb);
    return newVerb;
  });
};

exports.getOccupation = function() {
  var newOccupation = $.get('/occupation.json').then(function(response) {
    newOccupation = response.occupations[Math.floor((Math.random() * response.occupations.length) + 1)];
    console.log(newOccupation);
    return newOccupation;
  });
};
